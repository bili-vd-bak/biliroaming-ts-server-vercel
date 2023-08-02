import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import * as env from "../../../../../../src/_config";
import * as data_parse from "../../../../../../src/utils/player-data-handler/web";

export const config = {
  runtime: "edge",
};

const main = async (req: NextRequest, ctx: NextFetchEvent) => {
  let PassWebOnCheck: 0 | 1 = 0, //当检测到请求来自B站时不受web_on开关影响
    headers = {};
  headers["Access-Control-Allow-Credentials"] = "true";
  if (
    new RegExp("^https?://([a-z]+.bilibili.com|bilibili.com)$", "g").test(
      req.headers.get("origin")
    ) ||
    (env.pass_web_on_check &&
      req.headers.get("referer") === "https://www.bilibili.com")
  ) {
    headers["Access-Control-Allow-Origin"] = req.headers.get(
      "origin"
    ) as string;
    PassWebOnCheck = 1;
  }
  headers["Access-Control-Allow-Methods"] = "GET,OPTIONS,POST";
  headers["Access-Control-Allow-Headers"] =
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version";
  const url_str = req.nextUrl.pathname + req.nextUrl.search;
  console.log(url_str)
  const continue_execute = await data_parse.middleware(
    url_str as string,
    req.cookies,
    PassWebOnCheck,
    req.method
  );
  if (continue_execute[0] == false)
    return NextResponse.json(env.block(continue_execute[1]));
  else
    return NextResponse.json(
      await data_parse.main(url_str as string, req.cookies)
    );
};

export default main;
