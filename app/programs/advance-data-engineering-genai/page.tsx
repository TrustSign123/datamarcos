import type { Metadata } from "next";
import { GenAIAgenticLanding } from "@/components/program/GenAIAgenticLanding";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Advance Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
  description: "A mentor-led program connecting a four-month data engineering foundation with advanced GenAI, production RAG, Agentic AI and an integrated capstone, taught by Deepesh Mishra.",
  alternates: { canonical: "/programs/advance-data-engineering-genai" },
  openGraph: {
    title: "Advance Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
    description: "Build the data foundation. Engineer the intelligence. Deploy the agents.",
    url: `${site.url}/programs/advance-data-engineering-genai`,
    siteName: site.name,
    images: [{ url: "/images/advance-data-engineering-genai/classroom-live.jpg", width: 1280, height: 960 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Advance Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
    description: "Build modern data engineering, RAG, GenAI and Agentic AI skills with mentor Deepesh Mishra.",
    images: ["/images/advance-data-engineering-genai/classroom-live.jpg"]
  }
};

export default function AdvanceDataEngineeringGenAIPage() {
  return <GenAIAgenticLanding />;
}
