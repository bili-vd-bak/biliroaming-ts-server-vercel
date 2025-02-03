//Next Type Begin
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
/**
 * Object of `cookies` from header
 */
type cookies = Partial<{
  [key: string]: string;
}>;
//Next Type End

import qs from "qs";
// 此项目无大数据hash需求，故不用wasm,还可保持edge-runtime兼容性
// import { md5 } from "hash-wasm";
import { md5 } from "js-md5";
import * as env from "../_config";

const loggerc = env.logger.child({ action: "调用组件(_bili)" });

const sorted = (params: { [x: string]: any }) => {
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

const appsignMap = [
  {
    APPKEY: "9d5889cf67e615cd",
    APPSEC: "8fd9bb32efea8cef801fd895bef2713d",
  },
  {
    APPKEY: "1d8b6e7d45233436",
    APPSEC: "560c52ccd288fed045859ed18bffd973",
  },
  {
    APPKEY: "783bbb7264451d82",
    APPSEC: "2653583c8873dea268ab9386918b1d65",
  },
  {
    APPKEY: "57263273bc6b67f6",
    APPSEC: "a0488e488d1567960d3a765e8d129f90",
  },
  {
    APPKEY: "07da50c9a0bf829f",
    APPSEC: "25bdede4e1581c836cab73a48790ca6e",
  },
  {
    APPKEY: "191c3b6b975af184",
    APPSEC: "1673b15a09ef5e4427627f47b03a0578",
  },
  {
    APPKEY: "178cf125136ca8ea",
    APPSEC: "34381a26236dd1171185c0beb042e1c6",
  },
  {
    APPKEY: "7d336ec01856996b",
    APPSEC: "a1ce6983bc89e20a36c37f40c4f1a0dd",
  },
  {
    APPKEY: "dfca71928277209b",
    APPSEC: "b5475a8825547a4fc26c7d518eaaa02e",
  },
  {
    APPKEY: "bb3101000e232e27",
    APPSEC: "36efcfed79309338ced0380abd824ac1",
  },
  {
    APPKEY: "ae57252b0c09105d",
    APPSEC: "c75875c596a69eb55bd119e74b07cfe3",
  },
  {
    APPKEY: "8e16697a1b4f8121",
    APPSEC: "f5dd03b752426f2e623d7badb28d190a",
  },
  {
    APPKEY: "7d089525d3611b1c",
    APPSEC: "acd495b248ec528c2eed1e862d393126",
  },
  {
    APPKEY: "iVGUTjsxvpLeuDCf",
    APPSEC: "aHRmhWMLkdeMuILqORnYZocwMBpMEOdt",
  },
  {
    APPKEY: "YvirImLGlLANCLvM",
    APPSEC: "JNlZNgfNGKZEpaDTkCdPQVXntXhuiJEM",
  },
  {
    APPKEY: "27eb53fc9058f8c3",
    APPSEC: "c2ed53a74eeefe3cf99fbd01d8c9c375",
  },
  {
    APPKEY: "84956560bc028eb7",
    APPSEC: "94aba54af9065f71de72f5508f1cd42e",
  },
  {
    APPKEY: "85eb6835b0a1034e",
    APPSEC: "2ad42749773c441109bdc0191257a664",
  },
  {
    APPKEY: "4ebafd7c4951b366",
    APPSEC: "8cb98205e9b2ad3669aad0fce12a4c13",
  },
  {
    APPKEY: "8d23902c1688a798",
    APPSEC: "710f0212e62bd499b8d3ac6e1db9302a",
  },
  {
    APPKEY: "4c6e1021617d40d9",
    APPSEC: "e559a59044eb2701b7a8628c86aa12ae",
  },
  {
    APPKEY: "c034e8b74130a886",
    APPSEC: "e4e8966b1e71847dc4a3830f2d078523",
  },
  {
    APPKEY: "4409e2ce8ffd12b8",
    APPSEC: "59b43e04ad6965f34319062b478f83dd",
  },
  {
    APPKEY: "37207f2beaebf8d7",
    APPSEC: "e988e794d4d4b6dd43bc0e89d6e90c43",
  },
  {
    APPKEY: "9a75abf7de2d8947",
    APPSEC: "35ca1c82be6c2c242ecc04d88c735f31",
  },
  {
    APPKEY: "aae92bc66f3edfab",
    APPSEC: "af125a0d5279fd576c1b4418a3e8276d",
  },
  {
    APPKEY: "bca7e84c2d947ac6",
    APPSEC: "60698ba2f68e01ce44738920a0ffe768",
  },
  {
    APPKEY: "h9Ejat5tFh81cq8V",
    APPSEC: "BdiI92bjmZ9QRcjJBWv2EEssyjekAGKt",
  },
];
/**
 * Bilibili APP API 签名
 * @param params JSON 原请求数据
 * @param appkey 可不填
 * @param appsec 可不填
 */
export const appsign = async (
  params: any,
  appkey = "27eb53fc9058f8c3",
  appsec = "c2ed53a74eeefe3cf99fbd01d8c9c375"
  /**
   * 常用key:
   * 783bbb7264451d82 / 2653583c8873dea268ab9386918b1d65 (Android)
   * 1d8b6e7d45233436 / 560c52ccd288fed045859ed18bffd973 (IOS)
   * 27eb53fc9058f8c3 / c2ed53a74eeefe3cf99fbd01d8c9c375 (3rd auth web/ios)
   */
) => {
  params.appkey = appkey;
  appsec = appsignMap.find((i) => i.APPKEY === appkey).APPSEC || appsec;
  params = sorted(params);
  const query = qs.stringify(params);
  const sign = md5(query + appsec);
  params.sign = sign;
  const to_return = qs.stringify(params);
  const log = loggerc.child({
    module: "Bilibili APP API 签名",
  });
  log.info({});
  log.debug({ context: to_return, appkey, appsec });
  return to_return;
};

/**
 * 生成CorrespondPath算法
 */
export const CorrespondPath = async () => {
  const publicKey = await crypto.subtle.importKey(
    "jwk",
    {
      kty: "RSA",
      n: "y4HdjgJHBlbaBN04VERG4qNBIFHP6a3GozCl75AihQloSWCXC5HDNgyinEnhaQ_4-gaMud_GF50elYXLlCToR9se9Z8z433U3KjM-3Yx7ptKkmQNAMggQwAVKgq3zYAoidNEWuxpkY_mAitTSRLnsJW-NCTa0bqBFF6Wm1MxgfE",
      e: "AQAB",
    },
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    ["encrypt"]
  );

  async function getCorrespondPath(timestamp: number) {
    const data = new TextEncoder().encode(`refresh_${timestamp}`);
    const encrypted = new Uint8Array(
      await crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, data)
    );
    return encrypted.reduce(
      (str, c) => str + c.toString(16).padStart(2, "0"),
      ""
    );
  }

  const ts = Date.now();
  const to_return = await getCorrespondPath(ts);
  const log = loggerc.child({
    module: "Bilibili 生成CorrespondPath",
  });
  log.info({});
  log.debug({ context: to_return });
  return to_return;
};

/**
 * 通过WEB端Cookies获取APP端access_key(IOS APPKEY)
 * @param cookies WEB端Cookies
 */

export const cookies2access_key = async (cookies: {
  SESSDATA: string;
  DedeUserID: string;
  bili_jct: string; //即`csrf token`
}) => {
  const log = loggerc.child({
    module: "通过WEB端Cookies获取APP端access_key(IOS APPKEY)",
  });
  if (!cookies.SESSDATA || !cookies.DedeUserID || !cookies.bili_jct) {
    log.info({ status: "Failed: No cookies" });
    return;
  }
  const auth_code = await fetch(
    // 第三方登陆法失效，现使用TV登陆法(会产生登陆信息)
    env.api.main.web.third_login + "/x/passport-tv-login/qrcode/auth_code",
    {
      method: "POST",
      body: await appsign(
        { appkey: "783bbb7264451d82", local_id: 0, ts: Date.now() },
        "783bbb7264451d82",
        "2653583c8873dea268ab9386918b1d65"
      ),
      headers: {
        "User-Agent": env.UA,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        // cookie: `DedeUserID=${cookies.DedeUserID}; SESSDATA=${cookies.SESSDATA}`,
      },
    }
  )
    .then((res) => res.json())
    .then(
      (res: {
        code: number;
        message: string;
        ttl: number;
        data?: {
          url: string;
          auth_code: string;
        };
      }) => {
        if (res.code !== 0 || !res?.data?.auth_code) {
          log.info({ status: "Failed: No auth_code" });
          return;
        }
        return res.data.auth_code;
      }
    );
  if (!auth_code) {
    log.info({ status: "Failed: No auth_code" });
    return;
  }
  return await fetch(
    env.api.main.web.third_login + "/x/passport-tv-login/h5/qrcode/confirm",
    {
      method: "POST",
      body: qs.stringify({ auth_code, build: 7082000, csrf: cookies.bili_jct }),
      headers: {
        "User-Agent": env.UA,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        cookie: `DedeUserID=${cookies.DedeUserID}; SESSDATA=${cookies.SESSDATA}`,
      },
    }
  ).then(
    async () =>
      await fetch(
        env.api.main.web.third_login + "/x/passport-tv-login/qrcode/poll",
        {
          method: "POST",
          body: await appsign(
            {
              appkey: "783bbb7264451d82",
              local_id: 0,
              auth_code,
              ts: Date.now(),
            },
            "783bbb7264451d82",
            "2653583c8873dea268ab9386918b1d65"
          ),
          headers: {
            "User-Agent": env.UA,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then(
          (res: {
            code: number;
            message: string;
            ttl: number;
            data?: {
              access_token: string;
              refresh_token: string;
              expires_in: number;
            };
          }) => {
            if (res.code !== 0 || !res?.data?.access_token) {
              log.info({ status: "Failed: No access_token" });
              return;
            }
            const to_return = res.data.access_token;
            log.info({ status: "Success" });
            log.debug({ context: to_return });
            return to_return;
          }
        )
  );
};

/**
 * 通过access_key查询个人信息
 * @param access_key Bilibili access key \
 * 查询不到，返回为 无会员(0,0)
 */
export const access_key2info = async (access_key: string, appkey?: string) => {
  const log = loggerc.child({
    module: "通过access_key查询个人信息",
  });
  return await fetch(
    env.api.main.app.user_info +
      "/x/v2/account/myinfo?" +
      (await appsign({ access_key, appkey, ts: Date.now() })),
    env.fetch_config_UA
  )
    .then((res) => res.json())
    .then((res: { data?: any; code: number }) => {
      let to_return = {
        uid: 0,
        vip_type: 0 as 0 | 1 | 2,
      };
      if (res.code === 0) {
        const data = res.data;
        to_return = {
          uid: Number(data.mid),
          vip_type: Number(data.vip.type) as 0 | 1 | 2, //TODO 没有加类型判断校验
        };
      }
      log.info({});
      log.debug({ context: to_return, res });
      return to_return;
    });
};

/**
 * 通过含access_key及sign的Params查询个人信息
 * @param params 字符串的params，如 ?access_key=xxx&sign=xxx \
 * 查询不到，返回为 无会员(0,0)
 */
export const access_keyParams2info = async (params: string) => {
  const log = loggerc.child({
    module: "通过含access_key及sign的Params查询个人信息",
  });
  return await fetch(
    env.api.main.app.user_info + "/x/v2/account/myinfo" + params,
    env.fetch_config_UA
  )
    .then((res) => res.json())
    .then((res: { data?: any; code: number }) => {
      let to_return = {
        uid: 0,
        vip_type: 0 as 0 | 1 | 2,
      };
      if (res.code === 0) {
        const data = res.data;
        to_return = {
          uid: Number(data.mid),
          vip_type: Number(data.vip.type) as 0 | 1 | 2, //TODO 没有加类型判断校验
        };
      }
      log.info({});
      log.debug({ context: to_return });
      return to_return;
    });
};

/**
 * 通过cookie查询mid/vip
 * @param cookies Bilibili cookies \
 * 查询不到，返回为 无会员(0,0)
 */
export const cookies2info = async (cookies: { SESSDATA: string }) => {
  const log = loggerc.child({
    module: "通过cookie查询mid/vip",
  });
  if (!cookies.SESSDATA) {
    log.info({ status: "Failed" });
    return;
  }
  return await fetch(env.api.main.web.user_info + "/x/vip/web/user/info?", {
    headers: { "User-Agent": env.UA, cookie: "SESSDATA=" + cookies.SESSDATA },
  })
    .then((res) => res.json())
    .then(
      (res: { data?: { mid: number; vip_type: 0 | 1 | 2 }; code: number }) => {
        let to_return = {
          uid: 0,
          vip_type: 0 as 0 | 1 | 2,
        };
        if (res.code === 0) {
          const data = res.data;
          to_return = {
            uid: Number(data.mid),
            vip_type: Number(data.vip_type) as 0 | 1 | 2, //TODO 没有加类型判断校验
          };
        }
        log.info({});
        log.debug({ context: to_return });
        return to_return;
      }
    );
};

/**
 * 获取Bilibili网页版Cookies \
 * 默认：游客Cookies \
 * @param link 欲获取Cookies之链接
 */
export const getCookies = async (uri = "https://www.bilibili.com/") => {
  const log = loggerc.child({
    module: "获取Bilibili网页版Cookies(游客)",
  });
  return await fetch(uri, env.fetch_config_UA)
    .then((res) => {
      //代码来源
      /*本文作者： cylee'贝尔塔猫
      本文链接： https://www.cnblogs.com/CyLee/p/16170228.html
      关于博主： 评论和私信会在第一时间回复。或者直接私信我。
      版权声明： 本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处！*/

      // 获取 cookie
      const cookie = res.headers.get("set-cookie") || "";
      // 清理一下 cookie 的格式，移除过期时间，只保留基础的键值对才能正常使用
      const real_cookie = cookie
        .replace(/(;?)( ?)expires=(.+?);\s/gi, "")
        .replace(/(;?)( ?)path=\/(,?)(\s?)/gi, "")
        .replace(
          /(;?)( ?)domain=(.?)([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?)/gi,
          ""
        )
        .replace(/,/gi, ";")
        .trim();
      const to_return = real_cookie;
      log.info({});
      log.debug({ context: to_return });
      return to_return;
    })
    .catch((err) => console.error(err));
};

export const cookies2usable = (cookies: cookies) => {
  let usable_cookies = "";
  for (const [key, val] of Object.entries(cookies)) {
    usable_cookies += key + "=" + val + ";";
  }
  return usable_cookies;
};
