/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Хэрвээ гадаад зургууд ашиглах бол домайн нэмнэ
  },
  experimental: {
    appDir: true // Next.js app directory ашиглахыг идэвхжүүлнэ
  }
};

module.exports = nextConfig;
