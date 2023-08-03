import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import * as env from "../../../../../../src/_config";
import * as data_parse from "../../../../../../src/utils/player-data-handler/app";

export const config = {
  runtime: "edge",
};

const main = async (req: NextRequest, ctx: NextFetchEvent) => {
  //res.json(req.headers)
  const url_str = req.nextUrl.pathname + req.nextUrl.search;
  const continue_execute = await data_parse.middleware(
    url_str as string,
    req.headers,
    req.method
  );
  if (continue_execute[0] == false)
    return NextResponse.json(env.block(continue_execute[1]));
  else return NextResponse.json(await data_parse.main(url_str as string));
  /*fetch(api + req.url, {
    method: req.method,
    body: req.body
  }).then(response => response.json())
    .then(response => {
      res.json(response)
    })*/
};

export default main;
