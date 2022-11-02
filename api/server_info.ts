import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch'

const api = "https://api.bilibili.com"

const main = async (req: VercelRequest, res: VercelResponse) => {
  fetch(api + "/client_info")
    .then(response => response.json())
    .then(response => {
      res.json(response)
    })
}

export default main