import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/aegovi',
  assetPrefix: '/aegovi',
};

export default nextConfig;
