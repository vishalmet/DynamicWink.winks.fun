/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/dapp",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' donate-winks.vercel.app winks-win.vercel.app;"
          }
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint during builds
  },
}

export default nextConfig;