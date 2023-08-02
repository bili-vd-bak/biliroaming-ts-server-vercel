import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import * as env from "../../../../../../src/_config";
import { getCookies } from "../../../../../../src/utils/_bili";

export const config = {
  runtime: "edge",
};

const api = env.api.main.web.search;
const basic_res = {
  type: "media_bangumi",
  media_id: 1,
  title: env.fs_title,
  org_title: env.fs_title,
  media_type: 1,
  cv: "",
  staff: "无",
  season_id: 1,
  is_avid: false,
  hit_columns: ["title"],
  hit_epids: "",
  season_type: 1,
  season_type_name: "番剧",
  selection_style: env.fs_selection_style,
  ep_size: env.fs_episodes_web.length,
  url: env.fs_watch_button_link,
  button_text: env.fs_watch_button_title,
  is_follow: 0,
  is_selection: 1,
  eps: env.fs_episodes_web,
  badges: [
    {
      bg_color: "#00C0FF",
      bg_color_night: "#0B91BE",
      bg_style: 1,
      text: env.fs_badges,
      text_color: "#FFFFFF",
      text_color_night: "#E5E5E5",
      border_color: "",
      border_color_night: "",
    },
  ],
  cover: env.fs_cover,
  areas: "漫游",
  styles: env.fs_style,
  goto_url: env.fs_watch_button_link,
  desc: env.fs_desc,
  pubtime: 1500000000,
  media_mode: 2,
  fix_pubtime_str: "",
  media_score: {
    score: env.fs_rating,
    user_count: env.fs_vote,
  },
  display_info: [
    {
      bg_color: "#00C0FF",
      bg_color_night: "#0B91BE",
      bg_style: 1,
      text: env.fs_badges,
      text_color: "#FFFFFF",
      text_color_night: "#E5E5E5",
      border_color: "",
      border_color_night: "",
    },
  ],
  pgc_season_id: 1,
  corner: 13,
  index_show: env.fs_label,
};

const main = async (req: NextRequest, ctx: NextFetchEvent) => {
  const cookies = (await getCookies()) || "";
  // console.log(
  //   api + "/x/web-interface/search/type" + new URL(req.url, api).search
  // );
  // ---or---
  // api + "/x/web-interface/search/type" + req.nextUrl.search
  return fetch(api + req.nextUrl.pathname + req.nextUrl.search, {
    method: req.method,
    headers: {
      "User-Agent": env.UA,
      cookie: cookies,
    },
  })
    .then((response) => response.json())
    .then(
      (response: {
        data: { result: Array<object>; pagesize: number; numResults: number };
        code: number;
      }) => {
        const log = env.logger.child({
          action: "搜索(网页端)",
          method: req.method,
          url: req.url,
        });
        log.info({});
        log.debug({ context: response });
        if (response.code === 0) {
          let m_res = response;
          if (m_res.data.result) {
            m_res["data"]["result"].splice(0, 0, basic_res);
          } else m_res["data"]["items"] = [basic_res];
          m_res.data.pagesize += 1;
          m_res.data.numResults += 1;
          return NextResponse.json(m_res);
        } else NextResponse.json(response);
      }
    );
};

export default main;
