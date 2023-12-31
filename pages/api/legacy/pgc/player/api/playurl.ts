import type { NextApiRequest, NextApiResponse } from "next";
import * as env from "../../../../../../src/_config";
import * as data_parse from "../../../../../../src/utils/player-data-handler/app";

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  //res.json(req.headers)
  const continue_execute = await data_parse.middleware(
    req.url as string,
    req.headers,
    req.method
  );
  if (continue_execute[0] == false)
    res.json(env.block(continue_execute[1], continue_execute[2] || ""));
  else
    res.json(
      await data_parse.main(
        req.url as string,
        continue_execute[2] as {
          uid: number;
          vip_type: 0 | 1 | 2;
        }
      )
    );
  /*fetch(api + req.url, {
    method: req.method,
    body: req.body
  }).then(response => response.json())
    .then(response => {
      res.json(response)
    })*/
};

export default main;
