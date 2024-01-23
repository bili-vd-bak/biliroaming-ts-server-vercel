import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { logger } from "../../../src/_config";
import qs from "qs";
import * as env from "../../../src/_config";
import { access_key2info } from "../../../src/utils/_bili";

export const config = {
  runtime: "edge",
};

const main = async (req: NextRequest, ctx: NextFetchEvent) => {
  logger.child({ action: "", method: req.method, url: req.url }).info({});
  const url = new URL(req.url, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));
  return NextResponse.json({
    accesskey: data.access_key,
    me: await access_key2info(data.access_key as string),
  });
};

export default main;
