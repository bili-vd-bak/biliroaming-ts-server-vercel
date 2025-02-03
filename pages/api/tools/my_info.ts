//import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { NextApiRequest, NextApiResponse } from "next";
import { logger } from "../../../src/_config";
import qs from "qs";
import * as env from "../../../src/_config";
import {
  access_key2info,
  access_keyParams2info,
} from "../../../src/utils/_bili";

// const main = async (req: VercelRequest, res: VercelResponse) => {
const main = async (req: NextApiRequest, res: NextApiResponse) => {
  logger.child({ action: "", method: req.method, url: req.url }).info({});
  const url = new URL(req.url, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));
  res.json({
    accesskey: data.access_key,
    appkey: data.appkey || "default",
    params_query_mode: !!data.sign,
    me: await (data.sign
      ? access_keyParams2info("?" + qs.stringify(data))
      : access_key2info(data.access_key as string)),
  });
};

export default main;
