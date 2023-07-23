import type { NextApiRequest, NextApiResponse } from "next";
import ss from "@beetcb/sstore";
import { local_cache_secret } from "../../../src/_config";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.query.s !== local_cache_secret)
    res.status(403).send({ mes: "Secret Error!" });
  else {
    ss.clear();
    res.send({ mes: "Clean All Cache and Logs! Done!" });
  }
}
