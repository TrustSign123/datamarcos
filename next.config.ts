import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  // Dormant FDE pages: source files stay in the repo, visitors go to the single FDE page.
  async redirects() {
    return ["/programs/forward-deployed-engineer", "/programs/forward-deployed-engineering"].map((source) => ({
      source,
      destination: "/programs/forward-deployed-ai-engineer",
      permanent: true
    }));
  }
};

export default nextConfig;
