import qs from "qs";
import * as env from "../../_config";
import * as blacklist from "../_blacklist";
import * as bili from "../_bili";
import * as playerUtil from "../_player";
import { IncomingHttpHeaders } from "http";

const fetchDataFromBiliAndCache = async (url_data: string) => {
  // console.log("从BiliBili获取数据", "尝试中");
  const res = (await fetch(
    env.api.main.app.playurl + url_data,
    env.fetch_config_UA
  ).then((res) => res.json())) as { code: number };
  if (res.code === 0) await playerUtil.addNewCache(url_data, res);
  // else console.log("从BiliBili获取数据错误", res);
  return env.try_unblock_CDN_speed_enabled
    ? JSON.parse(JSON.stringify(res).replace(/bw=[^&]*/g, "bw=1280000"))
    : res; //尝试解除下载速度限制
};

/**
 * 数据处理中间件 \
 * 返回为 true - 继续执行 \
 * 返回为 false - 阻止进行 \
 * 返回为 true 时，0-标准执行 1-检查vip
 * 返回一个 [boolean,number] 参数0决定是否继续执行，参数1决定封锁信息
 * @param url_data 域名后的请求数据
 * @param headers 请求头
 * @return {boolean} boolean
 */
export const middleware = async (
  url_data: string,
  headers: IncomingHttpHeaders,
  method: string
): Promise<[boolean, number]> => {
  const log = env.logger.child({
    action: "获取playurl(APP端)",
    method: method || "unknown",
    url: url_data,
  });

  //请求头验证
  if (!headers["x-from-biliroaming"] && env.web_on === 0) return [false, 1];
  if (env.ver_min !== 0 && env.ver_min > Number(headers["build"]))
    return [false, 2];
  //信息获取
  const url = new URL(url_data, env.api.main.app.playurl);
  if (!url.search || !url.search) return [false, 7]; //缺少参数
  const data = qs.parse(url.search.slice(1));
  //自定义请求参数验证
  if (data.ep_id)
    for (const i of env.block_bangumi.ep)
      if (Number(data.ep_id) === i) return [false, 8];
  if (data.cid)
    for (const i of env.block_bangumi.cid)
      if (Number(data.cid) === i) return [false, 8];
  if (data.avid)
    for (const i of env.block_bangumi.avid)
      if (Number(data.avid) === i) return [false, 8];
  //免登陆
  const info = await bili.access_keyParams2info(url.search);
  if (info.uid === 0) {
    //查询信息失败
    if (!env.need_login) return [true, 0];
    else return [false, 6];
  }
  //信息获取
  if (!data.access_key) return [false, 7]; //缺少参数 need_login=1才需此行
  if (env.need_login && !data.access_key) return [false, 6]; //need_login强制为1
  const log_data = {
    access_key: data.access_key as string,
    UID: info.uid,
    vip_type: info.vip_type,
    url: url_data,
  };
  log.info({});
  log.debug({ headers, user_info: log_data });
  await playerUtil.addNewLog_bitio(log_data);
  await playerUtil.addNewLog_notion(log_data);
  //黑白名单验证
  const blacklist_data = await blacklist.main(info.uid);
  if (blacklist_data.code != 0) return [false, 3];
  else {
    if (env.whitelist_enabled) {
      if (blacklist_data.data.is_whitelist) return [true, 0];
      else return [false, 5];
    }
    if (env.blacklist_enabled && blacklist_data.data.is_blacklist)
      return [false, 4];
    return [true, 0];
  }
};

export const main = async (url_data: string) => {
  //信息获取
  const url = new URL(url_data, env.api.main.app.playurl);
  const data = qs.parse(url.search.slice(1));
  const info = await bili.access_keyParams2info(url.search);
  if (env.need_login && info.uid === 0) return env.block(6);
  const rCache = await playerUtil.readCache(
    Number(data.cid),
    Number(data.ep_id),
    info
  );
  // if (rCache) return JSON.parse(rCache);
  if (rCache) return rCache;
  else return fetchDataFromBiliAndCache(url_data);
};
