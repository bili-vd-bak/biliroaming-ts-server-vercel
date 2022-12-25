import qs from "qs";
import fetch from "node-fetch";
import * as env from "../../../_config";
import * as blacklist from "../../../utils/notion-database/_blacklist";
import * as db from "../../../utils/_sstore";
import * as db_notion from "../../../utils/notion-database/_db";
import * as bili from "../../../utils/_bili";

const addNewLog = async (data: {
  access_key?: string;
  session?: string;
  cookies?: string;
  UID?: number;
  vip_type?: 0 | 1 | 2;
  url: string;
}) => {
  const source = await db.get("log_web", true);
  if (!source) return;
  const source_json = JSON.parse(source);
  const log: {
    access_key?: string;
    session?: string;
    cookies?: string;
    UID?: number;
    vip_type?: 0 | 1 | 2;
    url: string;
    visit_time: number;
  }[] = source_json;
  log.push({
    access_key: data.access_key || "",
    session: data.session || "",
    cookies: data.cookies || "",
    UID: data.UID || 0,
    vip_type: data.vip_type || 0,
    url: data.url,
    visit_time: Date.now(),
  });
  return db.set("log", JSON.stringify(log));
};

const addNewLog_notion = async (data: any) => {
  const res = await db_notion.update(
    env.NOTION_db_log,
    JSON.stringify({
      parent: { database_id: env.NOTION_db_log },
      properties: {
        access_key: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: { content: data.access_key },
              plain_text: data.access_key,
            },
          ],
        },
        UID: {
          number: data.UID,
        },
        vip_type: {
          number: data.vip_type,
        },
        url: {
          rich_text: [
            { type: "text", text: { content: data.url }, plain_text: data.url },
          ],
        },
        visit_time: {
          number: Date.now(),
        },
      },
    })
  );
  return res;
};

const readCache = async (cid: number, ep_id: number, access_key: string) => {
  const info = await bili.access_key2info(access_key);
  if (await db.get(`c-vip-${cid}-${ep_id}`)) {
    if (
      env.whitelist_vip_enabled &&
      (await blacklist.main(info.uid).data?.is_whitelist)
    )
      return await db.get(`c-vip-${cid}-${ep_id}`);
    if (info.vip_type !== 0) return await db.get(`c-vip-${cid}-${ep_id}`);
  }
  return await db.get(`c-${cid}-${ep_id}`);
};

const addNewCache = async (url_data: string, res_data) => {
  const need_vip = res_data.has_paid ? 1 : 0;
  const url = new URL(url_data, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));

  if (need_vip)
    db.set(
      `c-vip-${Number(data.cid)}-${Number(data.ep_id)}`,
      JSON.stringify(res_data),
      Date.now() + env.cache_time
    );
  else
    db.set(
      `c-${Number(data.cid)}-${Number(data.ep_id)}`,
      JSON.stringify(res_data),
      Date.now() + env.cache_time
    );
};

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
  cookies
): Promise<[boolean, number]> => {
  //请求头验证
  if (!env.web_on) return [false, 1];

  //信息获取
  const url = new URL(url_data, env.api.main.web.playurl);
  if (!url.search || !url.search) return [false, 7]; //缺少参数
  const data = qs.parse(url.search.slice(1));
  if (env.need_login && !data.access_key && !data.session && !cookies.SESSDATA)
    return [false, 6]; //TODO need_login强制为1
  if (cookies.SESSDATA) {
    const info = await bili.cookies2info(cookies);
    console.log(info);
    if (!info) return [false, 6];
    await addNewLog({
      session: data.session as string,
      cookies: cookies,
      UID: info.uid,
      vip_type: info.vip_type,
      url: url_data,
    });
    return checkBlackList(info.uid);
  } /* else if (data.access_key) {
    const info = await bili.access_key2info(data.access_key as string);
    if (!info) return [false, 6]; //查询信息失败
    await addNewLog({
      access_key: data.access_key as string,
      session: data.session as string,
      cookies: cookies,
      UID: info.uid,
      vip_type: info.vip_type,
      url: url_data,
    });
    if (env.NOTION_db_log)
      await addNewLog_notion({
        access_key: data.access_key as string,
        UID: info.uid,
        vip_type: info.vip_type,
        url: url_data,
      });

    //黑白名单验证
    return checkBlackList(info.uid);
  } */ else return [true, 0]; //TODO 配置session封锁检测
};

export const main = async (url_data: string, cookies) => {
  //信息获取
  const url = new URL(url_data, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));
  /* if (data.access_key) {
    const rCache = await readCache(
      Number(data.cid),
      Number(data.ep_id),
      data.access_key as string
    );
    if (rCache) return rCache;
    else {
      const res = (await fetch(env.api.main.web.playurl + url_data).then(
        (res) => res.json()
      )) as { code: number; result: object };
      if (res.code === 0) await addNewCache(url_data, res?.result);
      return res;
    }
  } else */ {
    //TODO cookie/session方式不读缓存
    const res = (await fetch(env.api.main.web.playurl + url_data, {
      headers: { cookie: "SESSDATA=" + cookies.SESSDATA },
    }).then((res) => res.json())) as { code: number; result: object };
    if (res.code === 0) await addNewCache(url_data, res?.result);
    return res;
  }
};
