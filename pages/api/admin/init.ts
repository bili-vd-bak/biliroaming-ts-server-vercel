import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import {
  local_cache_secret,
  db_bitio_enabled,
  db_bitio_pool,
} from "../../../src/_config";

export const config = {
  runtime: "edge",
};

export default async function (req: NextRequest, ctx: NextFetchEvent) {
  if (req.nextUrl.searchParams.get("s") !== local_cache_secret)
    return NextResponse.json({ mes: "Secret Error!" }, { status: 403 });
  else if (db_bitio_enabled === 0)
    return NextResponse.json(
      { mes: "未启用Postgresql数据库" },
      { status: 403 }
    );
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
    return NextResponse.json({ mes: "Postgresql Init Done!" });
  }
}
