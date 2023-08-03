import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import * as env from "../../../../../../../src/_config";

export const config = {
  runtime: "edge",
};

const main = async (req: NextRequest, ctx: NextFetchEvent) => {
  /* const continue_execute = await data_parse.middleware(
    req.url as string,
    req.headers
  );
  if (continue_execute[0] == false) res.json(env.block(continue_execute[1]));
  else res.json(await data_parse.main(req.url as string)); */
  return fetch(env.api.intl.playurl + req.nextUrl.pathname + req.nextUrl.search, {
    method: req.method,
    headers: {
      "User-Agent": env.UA,
    },
  });
  // .then((response) => response.text())
  // .then((response) => {
  //   res.send(response);
  // });
};

export default main;
