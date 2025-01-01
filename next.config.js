const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "media.cnn.com",
      "www.ft.com",
      "deadline.com",
      "dims.apnews.com",
      "i.guim.co.uk", 
    ],
  },
};

module.exports = nextConfig;
