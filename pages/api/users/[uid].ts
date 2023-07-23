import type { NextApiRequest, NextApiResponse } from "next";
import * as _blacklist from "../../../src/utils/_blacklist";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  res.json(await _blacklist.main(Number(req.query.uid)));
}
