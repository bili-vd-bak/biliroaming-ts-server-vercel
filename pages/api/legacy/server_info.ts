import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { fetch_config_UA, logger } from "../../../src/_config";

export const config = {
  runtime: "edge",
};

const api = "https://api.bilibili.com";

const main = async (req: NextRequest, ctx: NextFetchEvent) => {
  logger
    .child({ action: "获取服务器IP", method: req.method, url: req.url })
    .info({});
  return fetch(api + "/client_info", fetch_config_UA);
};

export default main;
