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
    ],
  },
};

export default nextConfig;
