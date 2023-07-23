import type { NextApiRequest, NextApiResponse } from "next";
import * as _blacklist from "../../../src/utils/_blacklist";
import { logger } from "../../../src/_config";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  logger
    .child({ action: "获取黑/白名单", method: req.method, url: req.url })
    .info({ uid: req.query.uid });
  res.json(await _blacklist.main(Number(req.query.uid)));
}
