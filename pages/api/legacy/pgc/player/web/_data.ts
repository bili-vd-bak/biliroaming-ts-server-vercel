import qs from "qs";
import fetch from "node-fetch";
import * as env from "../../../../_config";
import * as blacklist from "../../../../utils/_blacklist";
import * as db from "../../../../utils/_sstore";
import * as db_notion from "../../../../utils/notion-database/_db";
import * as bili from "../../../../utils/_bili";

const addNewLog_bitio = async (data: {
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

const addNewLog_notion = async (data: any) => {
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

const readCache = async (
  cid: number,
  ep_id: number,
  info: { uid: number; vip_type: 0 | 1 | 2 }
) => {
  env.log.str("读取缓存", "尝试中");
  let c_vip: Object | null | undefined;
  if (env.db_local_enabled) c_vip = await db.get(`c-vip-${cid}-${ep_id}`);
  else if (env.db_bitio_enabled)
    c_vip = await env.db_bitio_pool
      .query(
        "SELECT (data) FROM cache WHERE exp >= $1 AND need_vip = 1 AND (cid = $2 OR ep = $3)",
        [Math.round(Number(new Date()) / 1000), cid, ep_id]
      )
      .then((res) => res.rows[0]?.data || undefined);
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
      c_normal = await env.db_bitio_pool
        .query(
          "SELECT (data) FROM cache WHERE exp >= $1 AND need_vip = 0 AND (cid = $2 OR ep = $3)",
          [Math.round(Number(new Date()) / 1000), cid, ep_id]
        )
        .then((res) => res.rows[0]?.data || undefined);
    return c_normal;
  }
};

const addNewCache = async (
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
    await env.db_bitio_pool.query(
      "INSERT INTO cache (need_vip,exp,cid,ep,data) VALUES ($1,$2,$3,$4,$5)",
      [need_vip, deadline, Number(data.cid), Number(data.ep_id), res_data]
    );
  }
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
  cookies: any, //FIXME 未添加完整类型
  PassWebOnCheck: 0 | 1
): Promise<[boolean, number]> => {
  env.log.obj("用户Cookies", cookies);
  //请求头验证
  if (!env.web_on && PassWebOnCheck === 0) return [false, 1];

  //信息获取
  const url = new URL(url_data, env.api.main.web.playurl);
  if (!url.search || !url.search) return [false, 7]; //缺少参数
  const data = qs.parse(url.search.slice(1));
  if (env.need_login && !data.access_key && !cookies.SESSDATA) {
    if (!env.need_login) return [true, 0]; //免登陆
    else return [false, 6]; //要求登录
  }

  //仅允许access_key或cookies鉴权
  let access_key: string;
  if (cookies.SESSDATA) {
    //拯救一下只传cookies的BBDown
    if (!cookies.DedeUserID) return [false, 6]; //FIXME DedeUserID处理问题
    access_key = await bili.cookies2access_key(cookies);
  }
  const info = await bili.access_key2info(
    (data.access_key as string) || access_key
  );
  if (!info) return [false, 6]; //查询信息失败
  env.log.obj("用户信息", {
    access_key: data.access_key as string,
    UID: info.uid,
    vip_type: info.vip_type,
    url: url_data,
  });
  await addNewLog_bitio({
    access_key: (data.access_key as string) || access_key,
    UID: info.uid,
    vip_type: info.vip_type,
    url: url_data,
  });
  await addNewLog_notion({
    access_key: (data.access_key as string) || access_key,
    UID: info.uid,
    vip_type: info.vip_type,
    url: url_data,
  });

  //黑白名单验证
  return checkBlackList(info.uid);
};

export const main = async (url_data: string, cookies) => {
  //信息获取
  const url = new URL(url_data, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));
  //有access_key优先，否则若有cookies用cookies
  if (data.access_key || cookies) {
    let info: { uid: number; vip_type: 0 | 1 | 2 }, access_key: string;
    if (cookies) access_key = await bili.cookies2access_key(cookies);
    info = await bili.access_key2info(
      (data.access_key as string) || access_key
    );
    const rCache = await readCache(Number(data.cid), Number(data.ep_id), info);
    if (rCache) return { code: 0, message: "success", result: rCache };
    else {
      const res = (await fetch(
        env.api.main.web.playurl +
          url_data +
          (access_key ? "&access_key=" + access_key : "")
      ).then((res) => res.json())) as { code: number; result: object };
      if (res.code === 0) await addNewCache(url_data, res?.result);
      return env.try_unblock_CDN_speed_enabled
        ? JSON.parse(JSON.stringify(res).replace(/bw=[^&]*/g, "bw=1280000"))
        : res; //尝试解除下载速度限制
    }
  } else {
    const res = (await fetch(env.api.main.web.playurl + url_data, {
      headers: { cookie: bili.cookies2usable(cookies) },
    }).then((res) => res.json())) as { code: number; result: object };
    if (res.code === 0) await addNewCache(url_data, res?.result);
    return env.try_unblock_CDN_speed_enabled
      ? JSON.parse(JSON.stringify(res).replace(/bw=[^&]*/g, "bw=1280000"))
      : res; //尝试解除下载速度限制
  }
};
