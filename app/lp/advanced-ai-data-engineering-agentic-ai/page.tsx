import { ProgramPageTemplate } from "@/components/program/ProgramPageTemplate";
import { programs } from "@/config/programs";
import { pageMetadata } from "@/lib/seo";

// Paid-campaign landing page for the legacy data-engineering program: stays live for ads,
// but is noindex so it does not compete with /programs/advance-data-engineering-genai (SEO pass 2026-10-26).
export const metadata = pageMetadata({
  path: "/lp/advanced-ai-data-engineering-agentic-ai",
  title: "Advanced AI Data Engineering with Agentic AI | Datamarcos",
  description: "Landing page for the Datamarcos advanced AI data engineering program with GenAI, RAG and agentic AI. See the main Advance Data Engineering course page.",
  noindex: true
});

export default function AdvancedAiLandingPage() {
  const program = programs.find((item) => item.slug === "advanced-ai-data-engineering-agentic-ai");
  if (!program) return null;
  return <ProgramPageTemplate program={program} landingPage />;
}
