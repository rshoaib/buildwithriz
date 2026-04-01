import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly enforce no trailing slashes to prevent generic GSC redirect errors
  trailingSlash: false,
  // Remove the X-Powered-By header for security and a tiny performance gain
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
