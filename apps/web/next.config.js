/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spacemarket-sandbox.global.ssl.fastly.net',
      },
    ],
  },
  reactStrictMode: true,
};
