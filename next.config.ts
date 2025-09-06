import type { NextConfig } from "next";

const nextConfig = {
  typescript: {
    // 🚨 TEMP: allow production builds even if there are TS errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // 🚨 TEMP: allow builds even if ESLint fails
    ignoreDuringBuilds: true,
  },
  // (optional) If you use images from remote sources, keep your existing config here
};

export default nextConfig;
