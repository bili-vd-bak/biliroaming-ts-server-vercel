import * as env from "../../_config";
import * as db from "./_db";

export const query = async (UID: number) => {
  const res = await db.query(
    env.db_NOTION_blacklist,
    JSON.stringify({
      filter: {
        and: [
          {
            property: "UID",
            title: {
              equals: UID.toString(),
            },
          },
        ],
      },
    })
  );
  return res;
};

export const addNewUser = async (
  UID: number,
  type: 0 | 1 | 2 = 0,
  reason = "",
  ban_until = 0
) => {
  const res = await db.update(
    env.db_NOTION_blacklist,
    JSON.stringify({
      parent: { database_id: env.db_NOTION_blacklist },
      properties: {
        UID: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: { content: UID.toString() },
              plain_text: UID.toString(),
            },
          ],
        },
        type: {
          number: type,
        },
        reason: {
          rich_text: [
            { type: "text", text: { content: reason }, plain_text: reason },
          ],
        },
        ban_until: {
          number: ban_until,
        },
      },
    })
  );
  return res;
};

export const format = (data) => {
  if (data.results[0]) {
    const basic_data = data.results[0].properties;
    return {
      code: 0,
      message: "",
      data: {
        uid: Number(basic_data.UID.title[0].text.content),
        is_blacklist: basic_data.type.number == 1 ? true : false,
        is_whitelist: basic_data.type.number == 2 ? true : false,
        status: basic_data.type.number,
        ban_until: basic_data.ban_until.number,
      },
    };
  } else {
    return {
      code: 400,
      message: "Invalid UID",
    };
  }
};

export const checkIfFinishBan = async (data): Promise<boolean> => {
  if (data.results[0]) {
    const id = data.results[0].id;
    const ban_until = format(data).data?.ban_until;
    if (Date.now() / 1000 >= ban_until) {
      await db.edit(
        id,
        JSON.stringify({
          properties: {
            type: {
              number: 0,
            },
            ban_until: {
              number: 0,
            },
          },
        })
      );
      return true;
    } else return false;
  } else return true;
};

export const main = async (UID: number) => {
  if (!env.db_NOTION_blacklist) {
    if (env.public_blacklist_enabled) {
      return await fetch(env.public_blacklist + UID)
        .then((res) => res.json())
        .catch((err) => console.error(err));
    } else
      return {
        code: -1,
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
  const raw_res = await query(UID);
  const res = format(raw_res);
  if (res.code == 0) {
    if (res.data?.is_blacklist) {
      if (await checkIfFinishBan(raw_res)) return await main(UID);
      else return res;
    } else return res;
  } else if (/^[1-9]\d*$/.test(UID.toString())) {
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
