import * as env from "../_config";
import * as blacklist_notion from "./notion-database/_blacklist";

export const addNewUser = async (
  UID: number,
  type: 0 | 1 | 2 = 0,
  reason = "",
  ban_until = 0
) => {
  const res = await env.db_bitio_pool.query(
    "INSERT INTO blacklist (uid,type,reason,ban_until) VALUES ($1,$2,$3,$4)",
    [UID, type, reason, ban_until]
  );
  return res;
};

export const format_bitio = async (UID: number) => {
  const data = await env.db_bitio_pool
    .query("SELECT * FROM blacklist WHERE uid = $1", [UID])
    .then((res) => res.rows[0]);
  console.log(data);
  if (data) {
    if (data.type == 1)
      await env.db_bitio_pool
        .query("DELETE FROM blacklist WHERE ban_until <= $1 AND type = 1", [
          Date.now(),
        ])
        .then((res) => console.log(res)); //TODO 修改为标准log(pino)
    return {
      code: 0,
      message: "",
      data: {
        uid: Number(data.uid),
        is_blacklist: data.type == 1 ? true : false,
        is_whitelist: data.type == 2 ? true : false,
        status: Number(data.type),
        ban_until: Number(data.ban_until),
      },
    };
  } else {
    return {
      code: 400,
      message: "Invalid UID",
    };
  }
};

export const main = async (UID: number) => {
  if (!env.db_NOTION_blacklist && !env.db_bitio_enabled) {
    if (env.public_blacklist_enabled) {
      return await fetch(env.public_blacklist + UID)
        .then((res) => res.json())
        .catch((err) => console.error(err));
    } else
      return {
        code: 0,
        message: "未启用黑名单数据库",
        data: {
          uid: UID,
          is_blacklist: false,
          is_whitelist: false,
          status: 0,
          ban_until: 0,
        },
      };
  }
  if (env.db_NOTION_blacklist) {
    const res_notion = await blacklist_notion.main(UID);
    if (res_notion.code === 0) return res_notion;
  }
  const res = await format_bitio(UID);
  if (res.code === 0) return res;
  else if (/^[1-9]\d*$/.test(UID.toString())) {
    if (env.public_blacklist_enabled) {
      const data = (await fetch(env.public_blacklist + UID)
        .then((res) => res.json())
        .catch((err) => console.error(err))) as {
        data: { status: 0 | 1 | 2; is_blacklist: boolean; ban_until: number };
      };
      await addNewUser(
        UID,
        data.data.status,
        data.data.is_blacklist ? "本用户已进入公共黑名单" : "",
        data.data.ban_until
      );
      return data;
    } else {
      await addNewUser(UID);
      return {
        code: 0,
        message: "",
        data: {
          uid: UID,
          is_blacklist: false,
          is_whitelist: false,
          status: 0,
          ban_until: 0,
        },
      };
    }
  } else {
    return res;
  }
};
