import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scoreclickbr.s3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '/club-logos/**',
      },
      {
        protocol: 'https',
        hostname: 'f005.backblazeb2.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
