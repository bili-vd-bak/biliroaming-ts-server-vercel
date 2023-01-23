// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
        destination: "https://grpc.biliapi.net/api/grpc/bilibili.app.playurl.v1.PlayURL/:path*",
      },
      {
        source: "/bilibili.pgc.gateway.player.v1.PlayURL/:path(.*)",
        destination: "https://app.bilibili.com/api/grpc/bilibili.pgc.gateway.player.v1.PlayURL/:path*",
      },
      {
        source: "/bilibili.community.service.dm.v1.DM/:path(.*)",
        destination: "https://app.bilibili.com/api/grpc/bilibili.community.service.dm.v1.DM/:path*",
      },
    ];
  },
};

export default nextConfig;
