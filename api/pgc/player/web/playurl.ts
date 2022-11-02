import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch'
import * as env from '../../../_config'

const api = env.api_playurl

const main = async (req: VercelRequest, res: VercelResponse) => {
  fetch(api + req.url, {
    method: req.method,
    body: req.body
  }).then(response => response.json())
    .then(response => {
      res.json(response)
    })
}

export default main