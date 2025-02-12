import qs from "qs";
import * as env from "../_config";
import * as db from "./_sstore";
import * as db_notion from "./notion-database/_db";
import * as blacklist from "./_blacklist";

export interface data_web {
  exp_info: object;
  play_check: object;
  play_view_business_info: {
    episode_info: {
      aid: number;
      bvid: string;
      cid: number;
      ep_id: number;
    };
    season_info: object;
    user_status: {
      is_login: 0 | 1;
      pay_info: {
        pay_check: 0 | 1;
        pay_pack_paid: 0 | 1;
        sponsor: 0 | 1;
      };
      vip_info: {
        real_vip: boolean;
        status: 0 | 1;
        type: 0 | 1 | 2;
      };
    };
    watch_progress?: object;
  };
  video_info: object;
  view_info: object;
}

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

// 如果有效期内vip请求时无vip缓存而有normal缓存，则返回normal缓存
export const readCache = async (
  cid: number,
  ep_id: number,
  info: { uid: number; vip_type: 0 | 1 | 2 },
  web = false
) => {
  if (!env.db_local_enabled && !env.db_bitio_enabled) return;
  if (!cid) cid = 0;
  if (!ep_id) ep_id = 0;
  const log = loggerc.child({
    module: "读取缓存",
  });
  let log_data = { cache_way: "unknown", cache_platform: web ? "web" : "app" },
    to_return: { c: Object; cw?: data_web; ccw?: data_web | "need_refresh" } = {
      c: {},
    };

  const namebase = `-${cid}-${ep_id}`;

  let c_vip: Object | null | undefined;
  let cw = (web ? await db.get({ key: "cw" + namebase }) : undefined) as
    | data_web
    | null
    | undefined;
  if (typeof cw === "string") return undefined;

  // For Pgsql query
  let queryWhere = "";
  if (cid && !ep_id) queryWhere = `cid = ${cid}`;
  else if (ep_id && !cid) queryWhere = `ep = ${ep_id}`;
  else queryWhere = `(cid = ${cid} AND ep = ${ep_id})`;

  if (env.db_local_enabled) {
    log_data.cache_way = "db_local";
    c_vip = await db.get({ key: `c-vip${namebase}` });
  } else if (env.db_bitio_enabled) {
    log_data.cache_way = "db_pg";
    const queryFrom = `FROM cache WHERE exp >= ${Math.round(
      Number(new Date()) / 1000
    )} AND need_vip = true AND ${queryWhere}`;
    if (web) {
      const r = await env.db_bitio_pool
        .query(`SELECT (data,data_web) ${queryFrom}`)
        .then((res) => res.rows[0] || undefined);
      c_vip = r?.data || undefined;
      cw = r?.data_web || undefined;
    }
    c_vip = await env.db_bitio_pool
      .query(`SELECT (data) ${queryFrom}`)
      .then((res) => res.rows[0]?.data || undefined);
  }
  if (c_vip && (web ? cw : true)) {
    const tr = { c: c_vip };
    if (info.vip_type !== 0) to_return = tr;
    else if (
      env.whitelist_vip_enabled &&
      (await blacklist.main(info.uid)).data?.is_whitelist
    )
      to_return = tr;
  } else {
    let c_normal: Object | null | undefined;
    if (env.db_local_enabled) {
      log_data.cache_way = "db_local";
      c_normal = await db.get({ key: `c${namebase}` });
    } else if (env.db_bitio_enabled) {
      log_data.cache_way = "db_pg";
      const queryFrom = `FROM cache WHERE exp >= ${Math.round(
        Number(new Date()) / 1000
      )} AND need_vip = false AND ${queryWhere}`;
      if (web) {
        const r = await env.db_bitio_pool
          .query(`SELECT (data,data_web) ${queryFrom}`)
          .then((res) => res.rows[0] || undefined);
        c_normal = r?.data || undefined;
        cw = r?.data_web || undefined;
      }
      c_normal = await env.db_bitio_pool
        .query(`SELECT (data) ${queryFrom}`)
        .then((res) => res.rows[0]?.data || undefined);
    }
    if (!c_normal) await delExpCache(cid, ep_id); //删除过时缓存
    to_return = { c: c_normal };
  }
  if (web) {
    if (cw) {
      to_return.cw = cw;
      to_return.ccw = {
        ...to_return.cw,
        video_info: to_return.c,
        play_view_business_info: {
          ...to_return.cw.play_view_business_info,
          watch_progress: {
            current_watch_progress: 0,
            last_ep_id: 0,
            last_time: 0,
          },
        },
      } as data_web;
    } else to_return.ccw = "need_refresh";
  }
  const log2 = log.child(log_data);
  log2.info({});
  log2.debug({ context: to_return });
  return to_return;
};

export const addNewCache = async (
  url_data: string,
  res_data: { code?: number; has_paid?: any },
  res_data_web?: data_web,
  refresh = false
) => {
  if (!env.db_local_enabled && !env.db_bitio_enabled) return;
  const log = loggerc.child({
    module: "添加缓存",
  });
  let log_data = {
    cache_way: "unknown",
    cache_platform: res_data_web ? "web" : "app",
    cache_refresh: refresh,
  };

  if (res_data_web) {
    delete res_data_web.video_info;
    delete res_data_web.play_view_business_info.watch_progress; // 防止干扰/隐私泄露
  }

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

  const cid =
    Number(
      data.cid || res_data_web?.play_view_business_info?.episode_info?.cid
    ) || 0;
  const ep_id =
    Number(
      data.ep_id || res_data_web?.play_view_business_info?.episode_info?.ep_id
    ) || 0;

  if (env.db_local_enabled) {
    log_data.cache_way = "db_local";
    const namebase = `-${cid}-${ep_id}`,
      name = (need_vip ? "-vip" : "") + namebase;
    db.set("c" + name, res_data_str, deadline);
    if (res_data_web)
      db.set("cw" + namebase, JSON.stringify(res_data_web), deadline);
  } else if (env.db_bitio_enabled) {
    log_data.cache_way = "db_pg";
    if (refresh) {
      let queryWhere = "";
      if (cid && !ep_id) queryWhere = `cid = ${cid}`;
      else if (ep_id && !cid) queryWhere = `ep = ${ep_id}`;
      else queryWhere = `(cid = ${cid} AND ep = ${ep_id})`;

      if (res_data_web)
        await env.db_bitio_pool.query(
          `UPDATE cache SET data = $1 data_web = $2 WHERE ${queryWhere}`,
          [res_data_str, res_data_web]
        );
      else
        await env.db_bitio_pool.query(
          `UPDATE cache SET data = $1 WHERE ${queryWhere}`,
          [res_data_str]
        );
    } else
      await env.db_bitio_pool.query(
        "INSERT INTO cache (need_vip,exp,cid,ep,data,data_web) VALUES ($1,$2,$3,$4,$5,$6)",
        [need_vip, deadline, cid, ep_id, res_data, res_data_web || {}]
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
