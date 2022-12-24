import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import * as env from "../../../_config";

const api = env.api.main.web.season_info;

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  fetch(api + req.url, {
    method: req.method,
  })
    .then((response) => response.json())
    .then((response) => {
      res.json(response);
    });
};

export default main;
