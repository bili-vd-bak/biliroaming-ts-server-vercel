import type { NextApiRequest, NextApiResponse } from "next";
import * as env from "../../../../../../../src/_config";
// import * as data_parse from "./_data";

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  /* const continue_execute = await data_parse.middleware(
    req.url as string,
    req.headers
  );
  if (continue_execute[0] == false) res.json(env.block(continue_execute[1]));
  else res.json(await data_parse.main(req.url as string)); */
  fetch(env.api.intl.playurl + req.url, {
    method: req.method,
    headers: {
      "User-Agent": env.UA,
    },
  })
    .then((response) => response.text())
    .then((response) => {
      res.send(response);
    });
};

export default main;
