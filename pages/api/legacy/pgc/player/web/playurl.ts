import type { NextApiRequest, NextApiResponse } from "next";
import * as env from "../../../../_config";
import * as data_parse from "./_data";

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  let PassWebOnCheck: 0 | 1 = 0; //当检测到请求来自B站时不受web_on开关影响
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (!req.headers.origin) console.log("Local Debug");
  else if (
    new RegExp("^https?://([a-z]+.bilibili.com|bilibili.com)$", "g").test(
      req.headers.origin as string
    )
  ) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin as string);
    PassWebOnCheck = 1;
  } else {
    res.json({ code: 400 });
    return;
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  const continue_execute = await data_parse.middleware(
    req.url as string,
    req.cookies,
    PassWebOnCheck
  );
  if (continue_execute[0] == false) res.json(env.block(continue_execute[1]));
  else res.json(await data_parse.main(req.url as string, req.cookies));
};

export default main;
