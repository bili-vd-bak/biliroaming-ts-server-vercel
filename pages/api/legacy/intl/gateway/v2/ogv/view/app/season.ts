import type { NextApiRequest, NextApiResponse } from "next";
import * as env from "../../../../../../../../../src/_config";

const api = env.api.intl.season_info;

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  fetch(api + req.url, {
    method: req.method,
  })
    .then((response) => response.json())
    .then(
      (response: {
        code: number;
        result: {
          modules: {
            episodes: {
              subtitles: {
                id: number;
                is_machine: boolean;
                key: string;
                title: string;
                url: string;
              }[];
            }[];
          }[];
        };
      }) => {
        if (response.code === 0 && env.th_subtitle_api) {
          let m_res = response;
          if (m_res.result?.modules[0]?.episodes) {
            const episodes = m_res.result?.modules[0]?.episodes;
            for (const ep of episodes) {
            }
          }
        } else res.json(response);
      }
    );
};

export default main;
