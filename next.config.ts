import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // ✅ Allows production build even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Allows production build even if type errors exist
    ignoreBuildErrors: false, // set to true if you want to bypass TS errors
  },
};

export default nextConfig;
