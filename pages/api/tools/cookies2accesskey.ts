//import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { NextApiRequest, NextApiResponse } from "next";
import { logger } from "../../../src/_config";
import qs from "qs";
import * as env from "../../../src/_config";
import { cookies2access_key } from "../../../src/utils/_bili";

// const main = async (req: VercelRequest, res: VercelResponse) => {
const main = async (req: NextApiRequest, res: NextApiResponse) => {
  logger.child({ action: "", method: req.method, url: req.url }).info({});
  const url = new URL(req.url, env.api.main.web.playurl);
  const data = qs.parse(url.search.slice(1));
  const cookies = cookieToJson(data.cookies as string);
  res.json({
    // cookies: cookies,
    access_key: await cookies2access_key(cookies as any),
  });
};

function cookieToJson(cookies: string) {
  // console.log(cookies)
  let cookieArr = cookies.split("; ");
  let obj = {};
  cookieArr.forEach((i) => {
    let arr = i.split("=");
    obj[arr[0]] = arr[1];
  });
  return obj;
}

export default main;
