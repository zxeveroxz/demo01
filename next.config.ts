import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tecdn.b-cdn.net",
      },
    ]
  }
};

export default nextConfig;
