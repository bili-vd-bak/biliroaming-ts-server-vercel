import qs from "qs";
import * as env from "../../_config";
import * as blacklist from "../_blacklist";
import * as bili from "../_bili";
import * as playerUtil from "../_player";

const checkBlackList = async (uid: number): Promise<[boolean, number]> => {
  //黑白名单验证
  const blacklist_data = await blacklist.main(uid);
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

/**
 * 数据处理中间件 \
 * 返回为 true - 继续执行 \
 * 返回为 false - 阻止进行 \
 * 返回为 true 时，0-标准执行 1-检查vip
 * 返回一个 [boolean,number] 参数0决定是否继续执行，参数1决定封锁信息
 * @param url_data 域名后的请求数据
 * @param cookies cookies
 * @return {boolean} boolean
 */
export const middleware = async (
  url_data: string,
  cookies: any, //FIXME 未添加完整类型
  PassWebOnCheck: 0 | 1,
  method?: string
): Promise<[boolean, number]> => {
  const log = env.logger.child({
    action: "获取playurl(网页端)",
    method: method || "unknown",
    url: url_data,
  });

  //请求头验证
  if (!env.web_on && PassWebOnCheck === 0) return [false, 1];

  //信息获取
  const url = new URL(url_data, env.api.main.web.playurl);
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
  if (!env.need_login) return [true, 0];

  //信息获取
  if (env.need_login && !data.access_key && !cookies.SESSDATA) {
    return [false, 6]; //要求登录
  }

  //仅允许access_key或cookies鉴权
  let access_key: string;
  if (!data.access_key && cookies.SESSDATA) {
    //拯救一下只传cookies的BBDown
    //TODO 查明DedeUserID,bili_jct,buvid3,buvid4影响
    if (!cookies.DedeUserID) return [false, 6]; //FIXME DedeUserID处理问题
    access_key = await bili.cookies2access_key(cookies);
  }
  const info = await bili.access_key2info(
    (data.access_key as string) || access_key
  );
  if (!info) return [false, 6]; //查询信息失败
  const log_data = {
    access_key: (data.access_key as string) || access_key,
    UID: info.uid,
    vip_type: info.vip_type,
    url: url_data,
  };
  log.info({});
  log.debug({
    cookies,
    user_info: log_data,
  });
  await playerUtil.addNewLog_bitio(log_data);
  await playerUtil.addNewLog_notion(log_data);

  //黑白名单验证
  return checkBlackList(info.uid);
};

export const main = async (url_data: string, cookies) => {
  //信息获取
  const url = new URL(url_data, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));
  //有access_key优先，否则若有cookies用cookies
  const login = data.access_key || !playerUtil.isEmptyObject(cookies);
  if (login) {
    let info: { uid: number; vip_type: 0 | 1 | 2 }, access_key: string;
    if (!data.access_key && cookies)
      access_key = await bili.cookies2access_key(cookies);
    info = await bili.access_key2info(
      (data.access_key as string) || access_key
    );
    const rCache = await playerUtil.readCache(
      Number(data.cid),
      Number(data.ep_id),
      info
    );
    if (rCache) return { code: 0, message: "success", result: rCache };
    else {
      const res = (await fetch(
        env.api.main.web.playurl +
          url_data +
          (access_key ? "&access_key=" + access_key : ""),
        env.fetch_config_UA
      ).then((res) => res.json())) as { code: number; result: object };
      if (res.code === 0) await playerUtil.addNewCache(url_data, res?.result);
      return env.try_unblock_CDN_speed_enabled
        ? JSON.parse(JSON.stringify(res).replace(/bw=[^&]*/g, "bw=1280000"))
        : res; //尝试解除下载速度限制
    }
  } else {
    cookies = bili.getCookies();
    console.log(env.api.main.web.playurl + url_data);
    const res = (await fetch(env.api.main.web.playurl + url_data, {
      headers: { "User-Agent": env.UA, cookie: cookies },
    }).then((res) => res.json())) as { code: number; result: object };
    console.log(res);
    if (res.code === 0) await playerUtil.addNewCache(url_data, res?.result);
    return env.try_unblock_CDN_speed_enabled
      ? JSON.parse(JSON.stringify(res).replace(/bw=[^&]*/g, "bw=1280000"))
      : res; //尝试解除下载速度限制
  }
};
