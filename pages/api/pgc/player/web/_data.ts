import qs from "qs";
import fetch from "node-fetch";
import * as env from "../../../_config";
import * as blacklist from "../../../utils/notion-database/_blacklist";
import * as db from "../../../utils/_sstore";
import * as db_notion from "../../../utils/notion-database/_db";
import * as bili from "../../../utils/_bili";

const addNewLog = async (data: {
  access_key: string;
  UID: number;
  vip_type: 0 | 1 | 2;
  url: string;
}) => {
  const source = await db.get("log", true);
  if (!source) return;
  const source_json = JSON.parse(source);
  const log: {
    access_key: string;
    UID: number;
    vip_type: 0 | 1 | 2;
    url: string;
    visit_time: number;
  }[] = source_json;
  log.push({
    access_key: data.access_key,
    UID: data.UID,
    vip_type: data.vip_type,
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

const readCache = async (
  cid: number,
  ep_id: number,
  info: { uid: number; vip_type: number }
) => {
  const c_vip = await db.get(`c-vip-${cid}-${ep_id}`);
  if (c_vip) {
    if (
      env.whitelist_vip_enabled &&
      (await blacklist.main(info.uid).data?.is_whitelist)
    )
      return c_vip;
    if (info.vip_type !== 0) return await db.get(`c-vip-${cid}-${ep_id}`);
  } else return await db.get(`c-${cid}-${ep_id}`);
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
  //??????????????????
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
 * ????????????????????? \
 * ????????? true - ???????????? \
 * ????????? false - ???????????? \
 * ????????? true ??????0-???????????? 1-??????vip
 * ???????????? [boolean,number] ??????0?????????????????????????????????1??????????????????
 * @param url_data ????????????????????????
 * @param cookies cookies
 * @return {boolean} boolean
 */
export const middleware = async (
  url_data: string,
  cookies
): Promise<[boolean, number]> => {
  //???????????????
  if (!env.web_on) return [false, 1];

  //????????????
  const url = new URL(url_data, env.api.main.web.playurl);
  if (!url.search || !url.search) return [false, 7]; //????????????
  const data = qs.parse(url.search.slice(1));
  if (env.need_login && !data.access_key && !cookies.SESSDATA) {
    if (!env.need_login) return [true, 0]; //?????????
    else return [false, 6]; //????????????
  }

  //?????????access_key???cookies??????
  let access_key: string;
  if (cookies.SESSDATA) {
    //??????????????????cookies???BBDown
    if (!cookies.DedeUserID) return [false, 6]; //FIXME DedeUserID????????????
    access_key = await bili.cookies2access_key(cookies);
  }
  const info = await bili.access_key2info(
    (data.access_key as string) || access_key
  );
  if (!info) return [false, 6]; //??????????????????
  await addNewLog({
    access_key: (data.access_key as string) || access_key,
    UID: info.uid,
    vip_type: info.vip_type,
    url: url_data,
  });
  if (env.NOTION_db_log)
    await addNewLog_notion({
      access_key: (data.access_key as string) || access_key,
      UID: info.uid,
      vip_type: info.vip_type,
      url: url_data,
    });

  //??????????????????
  return checkBlackList(info.uid);
};

export const main = async (url_data: string, cookies) => {
  //????????????
  const url = new URL(url_data, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));
  //???access_key?????????????????????cookies???cookies
  if (data.access_key || cookies) {
    let info: { uid: number; vip_type: number }, access_key: string;
    if (cookies) access_key = await bili.cookies2access_key(cookies);
    info = await bili.access_key2info(
      (data.access_key as string) || access_key
    );
    const rCache = await readCache(Number(data.cid), Number(data.ep_id), info);
    if (rCache)
      return { code: 0, message: "success", result: JSON.parse(rCache) };
    else {
      const res = (await fetch(
        env.api.main.web.playurl +
          url_data +
          (access_key ? "&access_key=" + access_key : "")
      ).then((res) => res.json())) as { code: number; result: object };
      if (res.code === 0) await addNewCache(url_data, res?.result);
      return res;
    }
  } else {
    const res = (await fetch(env.api.main.web.playurl + url_data, {
      headers: { cookie: bili.cookies2usable(cookies) },
    }).then((res) => res.json())) as { code: number; result: object };
    if (res.code === 0) await addNewCache(url_data, res?.result);
    return res;
  }
};
