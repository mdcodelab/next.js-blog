/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.cnn.com",
      "www.ft.com",
      "d1e00ek4ebabms.cloudfront.net", // Adaugă și acest subdomeniu dacă apare în link
    ],
  },
};

module.exports = nextConfig;
