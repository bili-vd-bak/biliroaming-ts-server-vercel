import fetch from "node-fetch";
import qs from "qs";
import md5 from "js-md5";
import * as env from "../_config";

const sorted = (params) => {
  const map = new Map();
  for (let k in params) {
    map.set(k, params[k]);
  }
  const arr = Array.from(map).sort();
  let obj = {};
  for (let i in arr) {
    let k = arr[i][0];
    let value = arr[i][1];
    obj[k] = value;
  }
  return obj;
};

/**
 * Bilibili APP API签名
 * @param params JSON 原请求数据
 * @param appkey 可不填
 * @param appsec 可不填
 */
export const appsign = (
  params: any,
  appkey = "27eb53fc9058f8c3",
  appsec = "c2ed53a74eeefe3cf99fbd01d8c9c375"
): string => {
  params.appkey = appkey;
  params = sorted(params);
  const query = qs.stringify(params);
  const sign = md5(query + appsec);
  params.sign = sign;
  return qs.stringify(params);
};

/**
 * 通过WEB端Cookies获取APP端access_key
 * @param cookies WEB端Cookies
 */

export const cookies2access_key = async (cookies: {
  SESSDATA: string;
  DedeUserID: string;
}) => {
  if (!cookies.SESSDATA) return;
  if (!cookies.DedeUserID) return;
  /* const sign = md5(
    "api=http://link.acg.tv/forum.php" + "c2ed53a74eeefe3cf99fbd01d8c9c375"
  ); */
  const uri = await fetch(
    env.api.main.web.third_login +
      "/login/app/third?appkey=27eb53fc9058f8c3&api=http://link.acg.tv/forum.php&sign=67ec798004373253d60114caaad89a8c",
    {
      headers: {
        cookie: `DedeUserID=${cookies.DedeUserID}; SESSDATA=${cookies.SESSDATA}`,
      },
    }
  )
    .then((res) => res.json())
    .then(
      (res: {
        code: number;
        status: boolean;
        ts: number;
        data: {
          api_host: string;
          has_login: 0 | 1;
          direct_login?: 0 | 1;
          user_info?: { mid: string; uname: string; face: string };
          confirm_uri?: string;
        };
      }) => {
        if (res.code !== 0) return;
        if (!res.data) return;
        if (!res.data.confirm_uri) return;
        return res.data.confirm_uri;
      }
    );
  if (!uri) return;
  return await fetch(uri, {
    redirect: "manual",
    headers: {
      cookie: `DedeUserID=${cookies.DedeUserID}; SESSDATA=${cookies.SESSDATA}`,
    },
  }).then((res) => {
    const url = res.headers.get("Location");
    if (!url) return;
    const params = new URL(url).searchParams.get("access_key");
    return params;
  });
};

/**
 * 通过access_key查询个人信息
 * @param access_key Bilibili access key \
 * 查询不到，返回为空
 */
export const access_key2info = async (access_key: string) => {
  return await fetch(
    env.api.main.app.user_info +
      "/x/v2/account/myinfo?" +
      appsign({ access_key: access_key, ts: Date.now() })
  )
    .then((res) => res.json())
    .then((res: { data?: any; code: number }) => {
      if (res.code === 0) {
        const data = res.data;
        return {
          uid: Number(data.mid),
          vip_type: Number(data.vip.type) as 0 | 1 | 2, //TODO 没有加类型判断校验
        };
      } else return;
    });
};

/**
 * 通过cookie查询mid/vip
 * @param cookies Bilibili cookies \
 * 查询不到，返回为空
 */
export const cookies2info = async (cookies: { SESSDATA: string }) => {
  if (!cookies.SESSDATA) return;
  return await fetch(env.api.main.web.user_info + "/x/vip/web/user/info?", {
    headers: { cookie: "SESSDATA=" + cookies.SESSDATA },
  })
    .then((res) => res.json())
    .then(
      (res: { data?: { mid: number; vip_type: 0 | 1 | 2 }; code: number }) => {
        if (res.code === 0) {
          const data = res.data;
          return {
            uid: Number(data.mid),
            vip_type: Number(data.vip_type) as 0 | 1 | 2, //TODO 没有加类型判断校验
          };
        } else return;
      }
    );
};

/**
 * 获取Bilibili网页版Cookies \
 * 默认：游客Cookies \
 * @param link 欲获取Cookies之链接
 */
export const getCookies = async (uri = "https://www.bilibili.com/") => {
  return await fetch(uri).then((res) => {
    //代码来源
    /*本文作者： cylee'贝尔塔猫
      本文链接： https://www.cnblogs.com/CyLee/p/16170228.html
      关于博主： 评论和私信会在第一时间回复。或者直接私信我。
      版权声明： 本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处！*/

    // 获取 cookie
    const cookie = res.headers.get("set-cookie") || "";
    // 清理一下 cookie 的格式，移除过期时间，只保留基础的键值对才能正常使用
    const real_cookie = cookie
      .replace(/expires=(.+?);\s/gi, "")
      .replace(/path=\/(,?)(\s?)/gi, "")
      .trim();
    return real_cookie;
  });
};
