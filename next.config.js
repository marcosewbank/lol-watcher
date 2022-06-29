/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: [
      "lolstatic-a.akamaihd.net",
      "static.lolesports.com",
      "feed.lolesports.com",
      "esports-api.lolesports.com",
    ],
  },
};

module.exports = nextConfig;
