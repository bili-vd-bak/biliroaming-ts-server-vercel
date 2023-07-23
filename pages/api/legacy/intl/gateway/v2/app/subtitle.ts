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
  fetch(env.api.intl.subtitle + req.url, {
    method: req.method,
    headers: {
      "User-Agent": env.UA,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const log = env.logger.child({
        action: "字幕获取(国际版)",
        method: req.method,
        url: req.url,
      });
      log.info({});
      log.debug({ context: response });
      res.json(response);
    });
};

export default main;
