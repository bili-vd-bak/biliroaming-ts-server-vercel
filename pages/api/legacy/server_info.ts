//import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { NextApiRequest, NextApiResponse } from "next";
import { fetch_config_UA, logger } from "../../../src/_config";

const api = "https://api.bilibili.com";

// const main = async (req: VercelRequest, res: VercelResponse) => {
const main = async (req: NextApiRequest, res: NextApiResponse) => {
  logger
    .child({ action: "获取服务器IP", method: req.method, url: req.url })
    .info({});
  fetch(api + "/x/web-interface/zone", fetch_config_UA)
    .then((response) => response.json())
    .then((response) => {
      res.json(response);
    });
};

export default main;
