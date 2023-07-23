import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { createHash } from "crypto";
import { local_cache_secret } from "../../../src/_config";
const confPath = `/tmp/conf/${createHash("md5")
  .update("conf.json", "utf8")
  .digest("hex")}`;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.query.s !== local_cache_secret)
    res.status(403).send({ mes: "Secret Error!" });
  else {
    let hotConf = {};

    if (!fs.existsSync("/tmp")) {
      fs.mkdirSync("/tmp");
    } else {
      if (!fs.existsSync("/tmp/conf")) {
        fs.mkdirSync("/tmp/conf");
      }
    }

    if (!fs.existsSync(confPath)) {
      fs.writeFileSync(confPath, "{}");
    }

    hotConf = await JSON.parse(fs.readFileSync(confPath).toString() || "{}");

    res.send(hotConf);
  }
}
