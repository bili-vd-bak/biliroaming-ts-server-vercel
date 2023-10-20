//=============================类型定义区(不用改)=================================
type io = 0 | 1;
type _block_region = ["cn" | "hk" | "tw" | "th"];
//=============================================================================

//==============================API区(不用改)====================================
//搜索、信息查询等APP端功能
//export const api_search: string = "https://app.bilibili.com";
//playurl等主要功能 api
//export const api_playurl: string = "https://api.bilibili.com";
//main 为 主站API(大陆+港澳台) ;intl 为 海外版API(东南亚)
export const api = {
  main: {
    web: {
      playurl: "https://api.bilibili.com",
      search: "https://api.bilibili.com",
      season_info: "https://api.bilibili.com",
      user_info: "https://api.bilibili.com",
      third_login: "https://passport.bilibili.com",
    },
    app: {
      playurl: "https://api.bilibili.com",
      search: "https://app.bilibili.com",
      season_info: "https://api.bilibili.com",
      user_info: "https://app.bilibili.com",
    },
  },
  intl: {
    playurl: "https://app.biliintl.com",
    subtitle: "https://app.biliintl.com",
    search: "https://app.biliintl.com",
    season_info: "https://app.biliintl.com",
  },
  grpc: {
    web: {
      playurl: "https://app.bilibili.com",
    },
    app: {
      playurl: "https://grpc.biliapi.net",
      subtitle: "https://app.bilibili.com",
    },
  },
};
//OAuth用API
export const api_oauth = {
  main: "https://passport.bilibili.com/x/passport-login/oauth2/refresh_token",
  intl: "https://passport.biliintl.com/x/intl/passport-login/oauth2/refresh_token",
};
//调用API所用UA
export const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82";
export const fetch_config_UA = { headers: { "User-Agent": UA } };
//==============================================================================

//===========================替换搜索 Fuck Search================================
//添加假番剧作公告板
//标题 <em class="keyword">标签可以重点标注
export const fs_title: string = '功能测试 <em class="keyword">xrz</em>';
//封面
export const fs_cover: string =
  "https://i0.hdslb.com/bfs/face/046974d6dde4af386f7eb4f231b84ec08bad693b.jpg";
//用处不明
export const fs_uri: string = "https://xrz.cool";
//标签-副标题1
export const fs_style: string = "标签1 | 测试";
//标签-副标题2
export const fs_label: string = "标签2 | test";
//描述(WEB版API)
export const fs_desc: string = "这是一个公告哦！";
//番剧分数
export const fs_rating: number = 10;
//打分人数
export const fs_vote: number = 1;
//立即观看按钮-主选项标题
export const fs_watch_button_title: string = "立即观看";
//立即观看按钮-主选项链接
export const fs_watch_button_link: string = "https://cn.bing.com";
//追番按钮-追番
export const fs_follow_button_title: string = "别点";
//追番按钮-取消追番
export const fs_unfollow_button_title: string = "谢邀";
//番剧封面右上角标签
export const fs_badges: string = "萨日朗";
//番剧剧集显示方式 grid-单行方块(按钮式) horizontal-列表长条(横条式)
export const fs_selection_style: "grid" | "horizontal" = "horizontal";
//番剧剧集数据(APP端API)
export const fs_episodes_app = [
  {
    title: "教程",
    uri: "https://github.com/yujincheng08/BiliRoaming/wiki#使用方法",
  },
  {
    title: "官方反馈群",
    uri: "https://t.me/biliroaming",
    badges: [
      {
        text: "官方",
        text_color: "#FFFFFF",
        text_color_night: "#E5E5E5",
        bg_color: "#FB7299",
        bg_color_night: "#BB5B76",
        border_color: "#FB7299",
        border_color_night: "#BB5B76",
        bg_style: 1,
      },
    ],
  },
  {
    title: "这里没东西",
    uri: "https://www.bilibili.com/video/av928861104",
    badges: [
      {
        text: "愿者上勾",
        text_color: "#FFFFFF",
        text_color_night: "#E5E5E5",
        bg_color: "#FB7299",
        bg_color_night: "#BB5B76",
        border_color: "#FB7299",
        border_color_night: "#BB5B76",
        bg_style: 1,
      },
    ],
  },
];
//番剧剧集数据(WEB端API) 在官方WEB中，long_title与index_title设置可能无效，显示的为title (显示为：index_title空格long_title) ；cover不显示
//此处参考 https://socialsisteryi.github.io/bilibili-API-collect/docs/search/search_response.html#%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B2-%E7%BB%93%E6%9E%9C%E4%B8%BA%E7%95%AA%E5%89%A7-%E5%BD%B1%E8%A7%86
export const fs_episodes_web = [
  {
    id: 1,
    cover: "",
    title: "教程",
    url: "https://github.com/yujincheng08/BiliRoaming/wiki#使用方法",
    release_date: "",
    badges: null,
    index_title: "1",
    long_title: "教程",
  },
  {
    id: 1,
    cover: "",
    title: "官方反馈群",
    url: "https://t.me/biliroaming",
    release_date: "",
    badges: [
      {
        text: "官方",
        text_color: "#FFFFFF",
        text_color_night: "#E5E5E5",
        bg_color: "#FB7299",
        bg_color_night: "#BB5B76",
        border_color: "#FB7299",
        border_color_night: "#BB5B76",
        bg_style: 1,
      },
    ],
    index_title: "2",
    long_title: "官方反馈群",
  },
  {
    id: 1,
    cover: "",
    title: "这里没东西",
    url: "https://www.bilibili.com/video/av928861104",
    release_date: "",
    badges: [
      {
        text: "愿者上勾",
        text_color: "#FFFFFF",
        text_color_night: "#E5E5E5",
        bg_color: "#FB7299",
        bg_color_night: "#BB5B76",
        border_color: "#FB7299",
        border_color_night: "#BB5B76",
        bg_style: 1,
      },
    ],
    index_title: "3",
    long_title: "这里没东西",
  },
];
//============================================================

//===========================小工具============================
//尝试解除下载速度限制(替换下载链接中bw=1280000),略影响性能
export const try_unblock_CDN_speed_enabled: io = 0;
//============================================================

//===========================数据库============================
//支持 本地模式(日志、缓存)、NOTION(日志、黑名单)、PostgreSOL(日志、缓存、黑名单)
//注：本地模式 与 PostgreSQL 优先本地
//缓存时间 单位：15分钟(min) 需打开缓存数据库 仅当deadline不存在时生效
export const cache_time = 1000 * 60 * 15;
//本地模式设置
//本地模式开关
export const db_local_enabled: io = 1;
//本地数据库查询密钥
export const local_cache_secret = process.env.local_cache_secret || "";
//PostgreSQL配置(需Read/Write权限)
import { Pool } from "@neondatabase/serverless"; //导入(不用改)
export const db_bitio_enabled: io = 0; //启用postgresql数据库
const connectionString = //三种配置方法
  process.env.POSTGRES_URL || //在Vercel项目Storage里连接数据库，并将上方 db_bitio_enabled 设为1
  process.env.db_bitio_pool || //配置环境变量 db_bitio_pool 为下方格式
  "postgresql://用户名:秘钥@服务器域名:端口/数据库名"; //配置数据库链接
export const db_bitio_pool = new Pool({ connectionString, ssl: true }); //导出(不用改)
//NOTION数据库配置
//NOTION KEY
export const NOTION_KEY =
  process.env.NOTION_KEY || "secret_***BUrz1***********eknk*****gm";
//NOTION DATABASES
//为空""且不添加环境变量即禁用该功能
export const db_NOTION_blacklist = process.env.NOTION_db_blacklist || "";
export const db_NOTION_log = process.env.NOTION_db_log || "";
//============================================================

//======================黑白名单设置============================
//黑名单模式 1-开 0-关
export const blacklist_enabled: io = 1;
//白名单模式 1-开 0-关
export const whitelist_enabled: io = 0;
//验证vip与视频要求 1-开 0-关
export const check_vip_enabled: io = 1;
//禁忌设置-白名单调用vip access_key 1-开 0-关
export const whitelist_vip_enabled: io = 0;
//============================================================

//===================获取公共黑白名单============================
//功能开关 1-开 0-关
export const public_blacklist_enabled: io = 0;
//公共黑名单地址 要求：URL后需可以直接加 UID/mid
export const public_blacklist: string = "https://black.qimo.ink/api/users/";
//============================================================

//=====================限制API调用=============================
//要求登录 1-开 0-关
export const need_login: io = 1;
//允许WEB版使用(B站官网可直接请求,无需开启此选项) 1-开 0-关
export const web_on: io = 0;
//允许Referer为 https://www.bilibili.com 的请求而无需打开web_on (解决BBDown问题) 1-开 0-关
//用BBDown的打开此选项(虽然似乎没用)
export const pass_web_on_check: io = 1;
//限制哔哩漫游最低版本 填写数字 0-不限制
//1208为1.6.10的版本号
export const ver_min: number = 1208;
//锁区，填写的是支持的地区 cn-中国大陆 hk-中国香港 tw-中国台湾 th-泰国/新加坡/东南亚地区
//TODO 暂时未加地区检测，访问不支持地区由B站服务器提示错误。
export const block_region: _block_region = ["hk"];
//============================================================

//=====================获取非官方泰区字幕========================
//为空则禁用
//字幕获取地址 要求：URL={th_subtitle_api}{season_id}/subtitle.json?id={当集ID}
export const th_subtitle_api: string = "";
//============================================================

//===================封锁类型(不用改)===========================
export enum block_type {
  "web_on已关闭，请使用BiliRoaming" = 1,
  "BiliRoaming版本过低，请更新",
  "黑/白名单数据获取错误，请稍后再试",
  "宁已进入黑名单，请不要再传播漫游",
  "白名单模式已启用，您未在白名单中",
  "已设置登录可用，请登录",
  "缺少参数",
}
export const block = (code: number) => {
  return {
    code: Number(`-${code}`),
    message: `${
      block_type[code] + (code === 2 ? `至${ver_min}(版本号)以上` : "")
    }(E=${code})`,
  };
};
//============================================================

//===================信息展示(不用改)===========================
export const version = `3.0.4[${
  (
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
    process.env.VERCEL_GIT_COMMIT_SHA
  )?.slice(0, 7) || "unknown"
}]`;
//============================================================

//===================日志函数(不用改)===========================
import pino from "pino";
export const logger = pino();
/* 由于包问题，默认不启用`pino-pretty`日志美化(不影响日志记录)
若需本地使用本项目且需更好的日志体验，请`pnpm i pino-pretty`，并注释上面一行及解除下面两行的注释*/
// import pretty from "pino-pretty";
// export const logger = pino(pretty({ colorize: true })).child({ version });
//============================================================
