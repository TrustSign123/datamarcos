import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  // Dormant FDE pages: source files stay in the repo, visitors go to the single FDE page.
  async redirects() {
    const fde = ["/programs/forward-deployed-engineer", "/programs/forward-deployed-engineering"].map((source) => ({
      source,
      destination: "/programs/forward-deployed-ai-engineer",
      permanent: true
    }));
    // SEO pass 2026-10-26: legacy ~360-word program pages (config/programs.ts + app/programs/[slug]) stay in the
    // repo but 301 to the matching current course page. Data engineering is consolidated on one canonical URL.
    const legacy: [string, string][] = [
      ["/programs/data-engineering", "/programs/advance-data-engineering-genai"],
      ["/programs/advanced-ai-data-engineering-agentic-ai", "/programs/advance-data-engineering-genai"],
      ["/programs/generative-ai-engineering", "/programs/genai-agentic-ai-engineer"],
      ["/programs/ai-engineering-agentic-ai", "/programs/genai-agentic-ai-engineer"],
      ["/programs/mlops-llmops", "/programs/genai-agentic-ai-engineer"],
      // No matching current course: send to the catalog.
      ["/programs/cloud-devops-engineering", "/programs"],
      ["/programs/platform-engineering", "/programs"],
      ["/programs/devsecops", "/programs"],
      // Flagged as the footer's broken "Payment & Refund" link in the audit; send any old links to the live policy.
      ["/il-refund-policy", "/refund-policy"],
      // Old WordPress-era URLs still in Google's index ("BEST DATA ENGINEERING INSTITUTE" titles; the old
      // /corporate-training page carried copied text naming KVCH). Single hop to the closest current page (2026-10-26).
      ["/about-us", "/about"],
      ["/course-detail-1", "/programs"],
      ["/best-data-knowledge-institute", "/programs"],
      ["/corporate-training", "/programs"],
      ["/data-engineering-4-0-with-aws-live-classes", "/programs/advance-data-engineering-genai"],
      ["/generative-ai-projects", "/programs/genai-agentic-ai-engineer"]
    ];
    return [...fde, ...legacy.map(([source, destination]) => ({ source, destination, statusCode: 301 as const }))];
  }
};

export default nextConfig;
