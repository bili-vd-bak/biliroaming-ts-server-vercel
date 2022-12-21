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
 * BilibiliAPI签名
 * @param params JSON 原请求数据
 * @param appkey 可不填
 * @param appsec 可不填
 */
export const appsign = (
  params: any,
  appkey = "1d8b6e7d45233436",
  appsec = "560c52ccd288fed045859ed18bffd973"
): string => {
  params.appkey = appkey;
  params = sorted(params);
  const query = qs.stringify(params);
  const sign = md5(query + appsec);
  params.sign = sign;
  return qs.stringify(params);
};

/**
 * 获取当前UTC时间戳
 */
export const UTC = (): number => {
  return Math.round(new Date().getTime() / 1000);
};

/**
 * 通过access_key查询个人信息
 * @param access_key Bilibili access key
 */
export const access_key2info = async (access_key: string) => {
  return await fetch(
    env.api_search +
      "/x/v2/account/myinfo?" +
      appsign({ access_key: access_key, ts: UTC() })
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.data;
      return {
        uid: data.mid,
        vip_type: data.vip.type,
      };
    });
};

/**
 * 获取Bilibili网页版游客Cookies
 */
export const getCookies = async () => {
  return await fetch("https://www.bilibili.com/").then((res) => {
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