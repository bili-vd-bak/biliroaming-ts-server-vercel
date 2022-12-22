import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as _blacklist from '../utils/notion-database/_blacklist'
export default async function (req: VercelRequest, res: VercelResponse) {
  res.json(await _blacklist.main(Number(req.query.uid)))
}