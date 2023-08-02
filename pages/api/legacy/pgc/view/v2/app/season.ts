import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import * as env from "../../../../../../../src/_config";

export const config = {
  runtime: "edge",
};

const api = env.api.main.app.season_info;

const main = async (req: NextRequest, ctx: NextFetchEvent) => {
  return fetch(api + req.nextUrl.pathname + req.nextUrl.search, {
    method: req.method,
    headers: {
      "User-Agent": env.UA,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const log = env.logger.child({
        action: "番剧详情(APP端)",
        method: req.method,
        url: req.url,
      });
      log.info({});
      log.debug({ context: response });
      return NextResponse.json(response);
    });
};

export default main;
