import { ProgramsCatalog } from "@/components/programs/ProgramsCatalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/programs",
  title: "AI, GenAI & Data Engineering Programs Catalog | Datamarcos",
  description: "Compare Datamarcos live courses: GenAI & Agentic AI (18 weeks), Applied Agentic AI (8 weeks), Forward Deployed AI (22 weeks) and Data Engineering (4+ months)."
});

export default function ProgramsPage() {
  return <ProgramsCatalog />;
}
