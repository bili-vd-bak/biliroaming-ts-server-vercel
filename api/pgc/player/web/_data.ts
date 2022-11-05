import qs from "qs";
import fetch from "node-fetch";
import * as env from "../../../_config";
import * as blacklist from "../../../utils/notion-database/_blacklist";
import * as db from "../../../utils/notion-database/_db";
import * as bili from "../../../utils/_bili";

const addNewLog = async (data) => {
  const res = await db.update(
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
          number: bili.UTC(),
        },
      },
    })
  );
  return res;
};

const readCache = async (cid: number, ep_id: number) => {
  const res = await db.query(
    env.NOTION_db_cache,
    JSON.stringify({
      filter: {
        or: [
          {
            property: "cid",
            number: {
              equals: cid,
            },
          },
          {
            property: "ep_id",
            number: {
              equals: ep_id,
            },
          },
        ],
      },
      sorts: [
        {
          property: "visit_time",
          direction: "descending",
        },
      ],
    })
  );
  return res;
};

const addNewCache = async (url_data: string, res_data) => {
  const need_vip = res_data.has_paid ? 1 : 0;
  const url = new URL(url_data, env.api_playurl);
  const data = qs.parse(url.search.slice(1));
  const res = await db.update(
    env.NOTION_db_cache,
    JSON.stringify({
      parent: { database_id: env.NOTION_db_cache },
      properties: {
        need_vip: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: { content: need_vip.toString() },
              plain_text: need_vip.toString(),
            },
          ],
        },
        cid: {
          number: Number(data.cid),
        },
        ep_id: {
          number: Number(data.ep_id),
        },
        visit_time: {
          number: bili.UTC(),
        },
        cache: {
          rich_text: [
            {
              type: "text",
              text: { content: JSON.stringify(res_data) },
              plain_text: JSON.stringify(res_data),
            },
          ],
        },
      },
    })
  );
  console.log(res);
  return res;
};

const delCache = async (id: string) => {
  const res = await db.del(id);
  return res;
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
  headers
): Promise<[boolean, number]> => {
  //请求头验证
  if (!env.web_on) return [false, 1];

  //信息获取
  const url = new URL(url_data, env.api_playurl);
  if (!url.search || !url.search) return [false, 7]; //缺少参数
  const data = qs.parse(url.search.slice(1));
  if (!data.access_key) return [false, 7]; //TODO 缺少参数 need_login=1才需此行
  if (env.need_login && !data.access_key) return [false, 6]; //TODO need_login强制为1
  const info = await bili.access_key2info(data.access_key as string);
  if (env.NOTION_db_log)
    await addNewLog({
      access_key: data.access_key,
      UID: info.uid,
      vip_type: info.vip_type,
      url: url_data,
    });

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

export const format = (notion_cache) => {
  if (notion_cache.results[0]) {
    const basic_data = notion_cache.results[0].properties;
    let ids: string[] = [];
    for (let i of notion_cache.results) {
      ids.push(i.id);
    }
    return {
      code: 0,
      notion_page_ids: ids,
      need_vip: basic_data.need_vip.number,
      cid: basic_data.cid.number,
      ep_id: basic_data.ep_id.number,
      visit_time: basic_data.visit_time.number,
      cache: JSON.parse(basic_data.cache.rich_text[0].plain_text),
    };
  } else
    return {
      code: 400,
    };
};

const dataFetch = async (url_data: string) => {
  const url = new URL(url_data, env.api_playurl);
  const data = qs.parse(url.search.slice(1));
  if (data.area) {
    let api_playurl: string = env.api_playurl;
    for (let i in env.plugin_conf) {
      if (env.plugin_conf[i][0] == data.area)
        api_playurl = env.plugin_conf[i][1];
    }
    return await fetch(api_playurl + url_data).then((res) => res.json());
  } else {
    const res = await fetch(env.api_playurl + url_data);
    if (res.ok) {
      const res_data = await res.json();
      if (res_data.code == 200) return res_data;
    }
    for (let i of env.plugin_conf) {
      const j = await fetch(i[1] + url_data);
      if (j.ok) {
        const k = await j.json();
        if (k.code == 200) return k;
      }
    }
  }
  return { code: 400 };
};

export const main = async (url_data: string) => {
  //信息获取
  const url = new URL(url_data, env.api_playurl);
  const data = qs.parse(url.search.slice(1));
  //env.NOTION_db_cache恒为空
  if (env.NOTION_db_cache) {
    const rCache = format(
      await readCache(Number(data.cid), Number(data.ep_id))
    );
    if (rCache.code == 0) {
      if (rCache.visit_time + env.cache_time < bili.UTC()) {
        //缓存过期
        for (let i of rCache.notion_page_ids as string[]) {
          await delCache(i);
        }
        const res = await dataFetch(url_data);
        if (res.code == 0) await addNewCache(url_data, res?.result);
        return res;
      } else {
        //缓存未过期
        if (
          env.need_login ||
          env.check_vip_enabled ||
          env.whitelist_vip_enabled
        ) {
          const info = await bili.access_key2info(data.access_key as string);
          if (
            env.whitelist_vip_enabled &&
            (await blacklist.main(info.uid)).data?.is_whitelist
          )
            return { code: 0, message: "success", result: rCache.cache };
          else if (env.check_vip_enabled && info.vip_type >= rCache.need_vip)
            return { code: 0, message: "success", result: rCache.cache };
          else return { code: 400 };
        } else if (env.check_vip_enabled && rCache.need_vip == 0)
          return { code: 0, message: "success", result: rCache.cache };
        else return { code: 400 };
      }
    } else {
      //无缓存
      const res = await dataFetch(url_data);
      if (res.code == 0) await addNewCache(url_data, res?.result);
      return res;
    }
    //从以下开始执行
  } else return await dataFetch(url_data);
};
