import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production build to succeed even with type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
