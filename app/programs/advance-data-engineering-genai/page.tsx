import type { Metadata } from "next";
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

const courseSchema = courseJsonLd({ name: "Advance Data Engineering with Applied GenAI & Agentic AI", description: metadata.description as string, path: "/programs/advance-data-engineering-genai" });

export default function AdvanceDataEngineeringGenAIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <GenAIAgenticLanding />
    </>
  );
}
