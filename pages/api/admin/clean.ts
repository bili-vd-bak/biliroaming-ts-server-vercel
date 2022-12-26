import type { VercelRequest, VercelResponse } from "@vercel/node";
import ss from "@beetcb/sstore";
import { local_cache_secret } from "../_config";

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.query.s !== local_cache_secret)
    res.status(403).send({ mes: "Secret Error!" });
  else {
    ss.clear();
    res.send({ mes: "Clean All Cache and Logs! Done!" });
  }
}
