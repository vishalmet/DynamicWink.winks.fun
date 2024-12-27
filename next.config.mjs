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
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          }
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
}

export default nextConfig;