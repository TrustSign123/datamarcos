import { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/lms/dashboard", "/lms/courses", "/lms/profile", "/lms/admin"] }],
    sitemap: `${site.url}/sitemap.xml`
  };
}
