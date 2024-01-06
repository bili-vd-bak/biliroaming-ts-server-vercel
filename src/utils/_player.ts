import qs from "qs";
import * as env from "../_config";
import * as db from "./_sstore";
import * as db_notion from "./notion-database/_db";
import * as blacklist from "./_blacklist";
import grpc from "./grpc/api";
import type PlayUrlMessages from "./grpc/gen/bilibili/pgc/gateway/player/v2/playurl_pb";

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
    c_vip = await env.db_bitio_pool
      .query(
        "SELECT (data) FROM cache WHERE exp >= $1 AND need_vip = 1 AND (cid = $2 OR ep = $3)",
        [Math.round(Number(new Date()) / 1000), cid, ep_id]
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
      c_normal = await env.db_bitio_pool
        .query(
          "SELECT (data) FROM cache WHERE exp >= $1 AND need_vip = 0 AND (cid = $2 OR ep = $3)",
          [Math.round(Number(new Date()) / 1000), cid, ep_id]
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
    log_data.cache_way = "db_pg";
    await env.db_bitio_pool.query(
      "INSERT INTO cache (need_vip,exp,cid,ep,data) VALUES ($1,$2,$3,$4,$5)",
      [need_vip, deadline, Number(data.cid), Number(data.ep_id), res_data]
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

export const playurl = {
  app: async (url_data: string) => {
    //信息获取
    const url = new URL(url_data, env.api.main.app.playurl);
    const data = qs.parse(url.search.slice(1));
    if (env.need_login && Number(data.fnval) <= 1) {
      return await grpc.player.pgc(data.access_key as string, {
        ep_id: Number(data.ep_id) || 0,
        cid: Number(data.cid) || 0,
        qn: Number(data.qn),
        fnval: Number(data.fnval),
        download: (Number(data.download) || 0) as 0 | 1 | 2,
      });
    } else
      return (await fetch(
        env.api.main.app.playurl + url_data,
        env.fetch_config_UA
      ).then((res) => res.json())) as { code: number };
  },
  format: (
    grpc_json: PlayUrlMessages.PlayViewReply.AsObject,
    url_data: { fnval }
  ) => {
    const grpc_data = grpc_json.videoInfo;
    return {
      accept_format: "hdflv2,flv,flv720,flv480,mp4",
      code: 0,
      seek_param: "start",
      is_preview: grpc_json.business.isPreview,
      fnval: Number(url_data.fnval),
      video_project: true,
      fnver: 0,
      type: "DASH",
      bp: 0,
      result: "suee",
      seek_type: "offset",//dash/flv - offset , mp4 - second
      from: "local",
      video_codecid: grpc_data.videoCodecid,
      record_info: grpc_json.business.recordInfo,
      is_drm: grpc_json.business.isDrm,
      no_rexcode: 0,
      format: grpc_data.format,
      support_formats: [
        {
          display_desc: "1080P",
          superscript: "高码率",
          need_login: true,
          codecs: ["avc1.640028", "hev1.1.6.L120.90"],
          format: "hdflv2",
          description: "高清 1080P+",
          need_vip: true,
          quality: 112,
          new_description: "1080P 高码率",
        },
        {
          display_desc: "1080P",
          superscript: "",
          need_login: true,
          codecs: ["avc1.640028", "hev1.1.6.L120.90"],
          format: "flv",
          description: "高清 1080P",
          quality: 80,
          new_description: "1080P 高清",
        },
        {
          display_desc: "720P",
          superscript: "",
          need_login: true,
          codecs: ["avc1.64001F", "hev1.1.6.L120.90"],
          format: "flv720",
          description: "高清 720P",
          quality: 64,
          new_description: "720P 高清",
        },
        {
          display_desc: "480P",
          superscript: "",
          codecs: ["avc1.64001E", "hev1.1.6.L120.90"],
          format: "flv480",
          description: "清晰 480P",
          quality: 32,
          new_description: "480P 清晰",
        },
        {
          display_desc: "360P",
          superscript: "",
          codecs: ["avc1.64001E", "hev1.1.6.L120.90"],
          format: "mp4",
          description: "流畅 360P",
          quality: 16,
          new_description: "360P 流畅",
        },
      ],
      message: "",
      accept_quality: [112, 80, 64, 32, 16],
      quality: grpc_data.quality,
      timelength: grpc_data.timelength,
      durls: [],
      has_paid: grpc_json.business.vipStatus === 0 ? false : true,
      vip_status: grpc_json.business.vipStatus,
      dash:[],//TODO
      clip_info_list: grpc_json.business.clipInfoList,
      accept_description: [
        "高清 1080P+",
        "高清 1080P",
        "高清 720P",
        "清晰 480P",
        "流畅 360P",
      ],
      status: 13,
    };
  },
};
