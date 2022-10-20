/** @type {import('next').NextConfig} */
const path = require("path");
const allowedImageWordPressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL
).hostname;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  /**
   * We specify which domains are allowed to be optimized.
   * This is needed to ensure that external urls can't be abused.
   * @see https://nextjs.org/docs/basic-features/image-optimization#domains
   */
  images: {
    domains: [
      allowedImageWordPressDomain,
      "via.placeholder.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
