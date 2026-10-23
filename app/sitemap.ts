import { MetadataRoute } from "next";
import { programs } from "@/config/programs";
import { site } from "@/config/site";

// Redirected to /programs/forward-deployed-ai-engineer (see next.config.ts).
const dormantSlugs = ["forward-deployed-engineering", "forward-deployed-engineer"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programs", "/corporate-training", "/about", "/contact", "/become-a-trainer", "/resources", "/resources/interview-prep", "/privacy", "/terms", "/refund-policy", "/payment-refund-policy"];
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date() })),
    ...programs.filter((program) => !dormantSlugs.includes(program.slug)).map((program) => ({ url: `${site.url}/programs/${program.slug}`, lastModified: new Date() }))
  ];
}
