import type { NextApiRequest, NextApiResponse } from "next";
import {
  local_cache_secret,
  db_bitio_enabled,
  db_bitio_pool,
} from "../../../src/_config";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.query.s !== local_cache_secret)
    res.status(403).send({ mes: "Secret Error!" });
  else if (db_bitio_enabled === 0) res.send({ mes: "未启用Postgresql数据库" });
  else {
    await db_bitio_pool
      .query(
        `CREATE TABLE blacklist(
      uid INT8 PRIMARY KEY     NOT NULL,
      type            INT8     NOT NULL,
      reason          TEXT,
      ban_until       INT8
    )`
      )
      .catch((err) => console.error(err));
    await db_bitio_pool
      .query(
        `CREATE TABLE cache(
      cid             INT8,
      ep              INT8,
      need_vip        INT8,
      exp             INT8,
      data            JSON
    )`
      )
      .catch((err) => console.error(err));
    await db_bitio_pool
      .query(
        `CREATE TABLE log(
      uid             INT8,
      vip_type        INT8,
      access_key      TEXT,
      url             TEXT,
      visit_time      INT8
    )`
      )
      .catch((err) => console.error(err));
    res.send({ mes: "Postgresql Init Done!" });
  }
}
