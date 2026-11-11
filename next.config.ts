import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  // Dynamic geo (root layout force-dynamic) turns on Next.js streaming metadata.
  // By default that puts <title>, description and canonical in <body> for Googlebot
  // and normal browsers (only htmlLimitedBots such as Bingbot and Chrome-Lighthouse
  // get them in <head>). Match every UA so metadata always renders in <head>.
  htmlLimitedBots: /.*/,
  // Dormant FDE pages: source files stay in the repo, visitors go to the single FDE page.
  async redirects() {
    const fde = ["/programs/forward-deployed-engineer", "/programs/forward-deployed-engineering"].map((source) => ({
      source,
      destination: "/programs/forward-deployed-ai-engineer",
      statusCode: 301 as const
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
      ["/data-engineering-4-0-with-aws-live-classes", "/programs/advance-data-engineering-genai"],
      ["/generative-ai-projects", "/programs/genai-agentic-ai-engineer"],
      // Old Instagram bio links that now 404 (2026-10-27).
      ["/ai-tools-chatgpt-page", "/programs/genai-agentic-ai-engineer"],
      ["/data-engineering-course-page", "/programs/advance-data-engineering-genai"],
      // Placeholder resource indexes (audit Nov 2026): send visitors to the live guides hub.
      ["/resources/articles", "/guides"],
      ["/resources/webinars", "/guides"],
      ["/resources/roadmaps", "/guides"],
      ["/resources/case-studies", "/guides"]
    ];
    // /corporate-training is a real page again (2026-10-27). Its old placeholder sub-pages (ai, data, cloud, devops,
    // custom-programs) now point at it; the [domain] route file stays in the repo, dormant.
    const corporate = [{ source: "/corporate-training/:domain", destination: "/corporate-training", statusCode: 301 as const }];
    return [...fde, ...corporate, ...legacy.map(([source, destination]) => ({ source, destination, statusCode: 301 as const }))];
  }
};

export default nextConfig;
