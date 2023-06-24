import qs from "qs";
import * as env from "../_config";
import * as db from "./_sstore";
import * as db_notion from "./notion-database/_db";
import * as blacklist from "./_blacklist";

export const addNewLog_bitio = async (data: {
  access_key: string;
  UID: number;
  vip_type: 0 | 1 | 2;
  url: string;
}) => {
  if (!env.db_bitio_enabled) return;
  await env.db_bitio_pool`INSERT INTO log (access_key,uid,vip_type,url,visit_time) VALUES (${
    data.access_key
  },${data.UID},${data.vip_type},${data.url},${Date.now()})`;
  return;
};

export const addNewLog_notion = async (data: any) => {
  if (!env.db_NOTION_log) return;
  const res = await db_notion.update(
    env.db_NOTION_log,
    JSON.stringify({
      parent: { database_id: env.db_NOTION_log },
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

export const readCache = async (
  cid: number,
  ep_id: number,
  info: { uid: number; vip_type: 0 | 1 | 2 }
) => {
  env.log.str("读取缓存", "尝试中");
  let c_vip: Object | null | undefined;
  if (env.db_local_enabled) c_vip = await db.get(`c-vip-${cid}-${ep_id}`);
  else if (env.db_bitio_enabled)
    c_vip =
      await env.db_bitio_pool`SELECT (data) FROM cache WHERE exp >= ${Math.round(
        Number(new Date()) / 1000
      )} AND need_vip = 1 AND (cid = ${cid} OR ep = ${ep_id})`.then(
        (res) => res[0]?.data || undefined
      );
  if (c_vip) {
    if (info.vip_type !== 0) return c_vip;
    else if (
      env.whitelist_vip_enabled &&
      (await blacklist.main(info.uid)).data?.is_whitelist
    )
      return c_vip;
  } else {
    let c_normal: Object | null | undefined;
    if (env.db_local_enabled) c_normal = await db.get(`c-${cid}-${ep_id}`);
    else if (env.db_bitio_enabled)
      c_normal =
        await env.db_bitio_pool`SELECT (data) FROM cache WHERE exp >= ${Math.round(
          Number(new Date()) / 1000
        )} AND need_vip = 0 AND (cid = ${cid} OR ep = ${ep_id})`.then(
          (res) => res[0]?.data || undefined
        );
    if (!c_normal) await delExpCache(cid, ep_id); //删除过时缓存
    return c_normal;
  }
};

export const addNewCache = async (
  url_data: string,
  res_data: { code?: number; has_paid?: any }
) => {
  if (!env.db_local_enabled && !env.db_bitio_enabled) return;

  const need_vip = res_data.has_paid ? 1 : 0;
  const url = new URL(url_data, env.api.main.app.playurl);
  const data = qs.parse(url.search.slice(1));
  const res_data_str = env.try_unblock_CDN_speed_enabled
    ? JSON.stringify(res_data).replace(/bw=[^&]*/g, "bw=1280000")
    : JSON.stringify(res_data); //尝试解除下载速度限制
  const deadline = Number(
    (res_data_str.match(/deadline=[^&]*/) || [""])[0].slice(9) ||
      Math.round((Number(new Date()) + env.cache_time) / 1000)
  );

  if (env.db_local_enabled) {
    if (need_vip)
      db.set(
        `c-vip-${Number(data.cid)}-${Number(data.ep_id)}`,
        res_data_str,
        deadline
      );
    else
      db.set(
        `c-${Number(data.cid)}-${Number(data.ep_id)}`,
        res_data_str,
        deadline
      );
  } else if (env.db_bitio_enabled) {
    await env.db_bitio_pool.unsafe(
      `INSERT INTO cache (need_vip,exp,cid,ep,data) VALUES (${need_vip},${deadline},${Number(
        data.cid
      )},${Number(data.ep_id)},${res_data})`
    );
  }
};

export const delExpCache = async (
  cid?: number | undefined | null,
  ep_id?: number | undefined | null
) => {
  await env.db_bitio_pool`DELETE FROM cache WHERE exp <= ${Math.round(
    Number(new Date()) / 1000
  )}`.then(() => env.log.str("删除所有过时缓存", "尝试中"));
};
