import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import * as env from "../../../_config";
import { getCookies } from "../../../utils/_bili"

const api = env.api_playurl;

const main = async (req: VercelRequest, res: VercelResponse) => {
  const cookies = await getCookies()
  await fetch(api + req.url, {
    method: req.method,
    body: req.body,
    headers: {
      cookie: cookies,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      res.json(response);
    });
};

export default main;
