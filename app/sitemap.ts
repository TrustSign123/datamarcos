import { MetadataRoute } from "next";
import { programs } from "@/config/programs";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programs", "/corporate-training", "/about", "/contact", "/become-a-trainer", "/resources", "/privacy", "/terms", "/refund-policy"];
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date() })),
    ...programs.map((program) => ({ url: `${site.url}/programs/${program.slug}`, lastModified: new Date() }))
  ];
}
