// @ts-check

const cache_control = (/** @type {number} */ time) => [
  {
    key: "Cache-Control",
    value: `max-age=${time}, s-maxage=${time}, stale-while-revalidate=${time}`,
  },
  {
    key: "CDN-Cache-Control",
    value: `max-age=${time}`,
  },
  {
    key: "Cloudflare-CDN-Cache-Control",
    value: `max-age=${time}`,
  },
  {
    key: "Vercel-CDN-Cache-Control",
    value: `max-age=${time}`,
  },
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: cache_control(86400),
      },
      {
        source: "/api/users/(.*)",
        headers: cache_control(86400),
      },
      {
        source: "/pgc/view/v2/app/season(.*)",
        headers: cache_control(86400),
      },
      {
        source: "/pgc/view/web/season(.*)",
        headers: cache_control(86400),
      },
      {
        source: "/x/v2/search/type(.*)",
        headers: cache_control(43200),
      },
      {
        source: "/x/web-interface/search/type(.*)",
        headers: cache_control(43200),
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/pgc/:path(.*)",
        destination: "/api/legacy/pgc/:path*",
      },
      {
        source: "/x/:path(.*)",
        destination: "/api/legacy/x/:path*",
      },
      {
        source: "/intl/:path(.*)",
        destination: "/api/legacy/intl/:path*",
      },
      {
        source: "/api/server_info(.*)",
        destination: "/api/legacy/server_info",
      },
      {
        source: "/bilibili.app.playurl.v1.PlayURL/:path(.*)",
        destination:
          "https://grpc.biliapi.net/api/grpc/bilibili.app.playurl.v1.PlayURL/:path*",
      },
      {
        source: "/bilibili.pgc.gateway.player.v1.PlayURL/:path(.*)",
        destination:
          "https://app.bilibili.com/api/grpc/bilibili.pgc.gateway.player.v1.PlayURL/:path*",
      },
      {
        source: "/bilibili.community.service.dm.v1.DM/:path(.*)",
        destination:
          "https://app.bilibili.com/api/grpc/bilibili.community.service.dm.v1.DM/:path*",
      },
    ];
  },
};

export default nextConfig;
