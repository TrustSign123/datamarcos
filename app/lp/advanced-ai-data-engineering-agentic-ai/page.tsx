import { ProgramPageTemplate } from "@/components/program/ProgramPageTemplate";
import { programs } from "@/config/programs";

export default function AdvancedAiLandingPage() {
  const program = programs.find((item) => item.slug === "advanced-ai-data-engineering-agentic-ai");
  if (!program) return null;
  return <ProgramPageTemplate program={program} landingPage />;
}
