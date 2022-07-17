/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "www.thecocktaildb.com", "i.postimg.cc"],
  },
};

module.exports = nextConfig;
