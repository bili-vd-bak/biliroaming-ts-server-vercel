// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/pgc/:path(.*)",
        destination: "/api/pgc/:path*",
      },
      {
        source: "/x/:path(.*)",
        destination: "/api/x/:path*",
      },
      {
        source: "/intl/:path(.*)",
        destination: "/api/intl/:path*",
      },
    ];
  },
};

export default nextConfig;
