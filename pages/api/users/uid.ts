import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import * as _blacklist from "../../../src/utils/_blacklist";
import { logger } from "../../../src/_config";

export const config = {
  runtime: "edge",
};

export default async function (req: NextRequest, ctx: NextFetchEvent) {
  logger
    .child({ action: "获取黑/白名单", method: req.method, url: req.url })
    .info({ uid: req.nextUrl.searchParams.get("uid") });
  return NextResponse.json(
    await _blacklist.main(Number(req.nextUrl.searchParams.get("uid")))
  );
}
