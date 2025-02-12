import qs from "qs";
import * as env from "../_config";
import * as db from "./_sstore";
import * as db_notion from "./notion-database/_db";
import * as blacklist from "./_blacklist";

const loggerc = env.logger.child({ action: "调用组件(_player)" });

/**
 * 检测是否为空Object `{}`
 * @param obj
 */
export function isEmptyObject(obj: Object) {
  return (
    obj &&
    Object.getPrototypeOf(obj) === Object.prototype &&
    Object.keys(obj).length === 0
  );
}

export const addNewLog_bitio = async (data: {
  access_key: string;
  UID: number;
  vip_type: 0 | 1 | 2;
  url: string;
}) => {
  if (!env.db_bitio_enabled) return;
  await env.db_bitio_pool.query(
    "INSERT INTO log (access_key,uid,vip_type,url,visit_time) VALUES ($1,$2,$3,$4,$5)",
    [data.access_key, data.UID, data.vip_type, data.url, Date.now()]
  );
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
  if (!env.db_local_enabled && !env.db_bitio_enabled) return;
  if (!cid) cid = 0;
  if (!ep_id) ep_id = 0;
  const log = loggerc.child({
    module: "读取缓存",
  });
  let log_data = { cache_way: "unknown" },
    to_return = {};

  let c_vip: Object | null | undefined;
  if (env.db_local_enabled) {
    log_data.cache_way = "db_local";
    c_vip = await db.get({ key: `c-vip-${cid}-${ep_id}` });
  } else if (env.db_bitio_enabled) {
    log_data.cache_way = "db_pg";
    let queryWhere = "";
    if (cid && !ep_id) queryWhere = `cid = ${cid}`;
    else if (ep_id && !cid) queryWhere = `ep = ${ep_id}`;
    else queryWhere = `(cid = ${cid} AND ep = ${ep_id})`;
    c_vip = await env.db_bitio_pool
      .query(
        `SELECT (data) FROM cache WHERE exp >= $1 AND need_vip = true AND ${queryWhere}`,
        [Math.round(Number(new Date()) / 1000)]
      )
      .then((res) => res.rows[0]?.data || undefined);
  }
  if (c_vip) {
    if (info.vip_type !== 0) to_return = c_vip;
    else if (
      env.whitelist_vip_enabled &&
      (await blacklist.main(info.uid)).data?.is_whitelist
    )
      to_return = c_vip;
  } else {
    let c_normal: Object | null | undefined;
    if (env.db_local_enabled) {
      log_data.cache_way = "db_local";
      c_normal = await db.get({ key: `c-${cid}-${ep_id}` });
    } else if (env.db_bitio_enabled) {
      log_data.cache_way = "db_pg";
      let queryWhere = "";
      if (cid && !ep_id) queryWhere = `cid = ${cid}`;
      else if (ep_id && !cid) queryWhere = `ep = ${ep_id}`;
      else queryWhere = `(cid = ${cid} AND ep = ${ep_id})`;
      c_normal = await env.db_bitio_pool
        .query(
          `SELECT (data) FROM cache WHERE exp >= $1 AND need_vip = false AND ${queryWhere}`,
          [Math.round(Number(new Date()) / 1000)]
        )
        .then((res) => res.rows[0]?.data || undefined);
    }
    if (!c_normal) await delExpCache(cid, ep_id); //删除过时缓存
    to_return = c_normal;
  }
  const log2 = log.child(log_data);
  log2.info({});
  log2.debug({ context: to_return });
  return to_return;
};

export const addNewCache = async (
  url_data: string,
  res_data: { code?: number; has_paid?: any }
) => {
  if (!env.db_local_enabled && !env.db_bitio_enabled) return;
  const log = loggerc.child({
    module: "添加缓存",
  });
  let log_data = { cache_way: "unknown" };

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
    log_data.cache_way = "db_local";
    if (need_vip)
      db.set(
        `c-vip-${Number(data.cid) || 0}-${Number(data.ep_id) || 0}`,
        res_data_str,
        deadline
      );
    else
      db.set(
        `c-${Number(data.cid) || 0}-${Number(data.ep_id) || 0}`,
        res_data_str,
        deadline
      );
  } else if (env.db_bitio_enabled) {
    log_data.cache_way = "db_pg";
    await env.db_bitio_pool.query(
      "INSERT INTO cache (need_vip,exp,cid,ep,data) VALUES ($1,$2,$3,$4,$5)",
      [
        need_vip,
        deadline,
        Number(data.cid) || 0,
        Number(data.ep_id) || 0,
        res_data,
      ]
    );
  }
  log.info({});
  log.debug({ context: res_data });
};

export const delExpCache = async (
  cid?: number | undefined | null,
  ep_id?: number | undefined | null
) => {
  const log = loggerc.child({
    module: "删除缓存",
  });
  if (env.db_local_enabled) db.clear();
  else if (env.db_bitio_enabled)
    await env.db_bitio_pool.query("DELETE FROM cache WHERE exp <= $1", [
      Math.round(Number(new Date()) / 1000),
    ]);
  log.info({});
};
