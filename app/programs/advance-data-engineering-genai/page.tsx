import type { Metadata } from "next";
import { preload } from "react-dom";
import { GenAIAgenticLanding } from "@/components/program/GenAIAgenticLanding";
import { site } from "@/config/site";
import { courseJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Advance Data Engineering with GenAI & Agentic AI | Datamarcos",
  description: "A 4+ month mentor-led program: a four-month data engineering foundation, then an advanced GenAI, RAG and Agentic AI track and a capstone, with Deepesh Mishra.",
  alternates: { canonical: "/programs/advance-data-engineering-genai" },
  openGraph: {
    title: "Advanced Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
    description: "Build the data foundation. Engineer the intelligence. Deploy the agents.",
    url: `${site.url}/programs/advance-data-engineering-genai`,
    siteName: site.name,
    images: [{ url: "/images/advance-data-engineering-genai/classroom-live.jpg", width: 1280, height: 960 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
    description: "Build modern data engineering, RAG, GenAI and Agentic AI skills with mentor Deepesh Mishra.",
    images: ["/images/advance-data-engineering-genai/classroom-live.jpg"]
  }
};

const courseSchema = courseJsonLd({ name: "Advance Data Engineering with Applied GenAI & Agentic AI", description: metadata.description as string, path: "/programs/advance-data-engineering-genai", duration: "P4M" });

export default function AdvanceDataEngineeringGenAIPage() {
  // The hero photo is a CSS background (it sits under gradient overlays), so the browser only finds it after the CSS
  // is parsed. Preload it with high priority: it is this page's LCP element.
  // Phones (≤640 px, where the photo sits under a 62-97% dark overlay) get a 960 px copy; each preload matches its CSS rule.
  preload("/images/advance-data-engineering-genai/classroom-live.webp", { as: "image", fetchPriority: "high", media: "(min-width: 641px)" });
  preload("/images/advance-data-engineering-genai/classroom-live-mobile.webp", { as: "image", fetchPriority: "high", media: "(max-width: 640px)" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <GenAIAgenticLanding />
    </>
  );
}
