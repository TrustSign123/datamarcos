import type { Metadata } from "next";
import { FdeAdPage } from "@/components/program/fde-ad/FdeAdPage";
import { pageMetadata } from "@/lib/seo";
import "./fde-ad.css";

const PATH = "/fde-ai-engineer";
const TITLE = "Forward Deployed AI Engineer | Datamarcos";
const DESCRIPTION =
  "22-week live, mentor-led Forward Deployed AI Engineer program from Datamarcos. Four client-style engagements, 170+ live hours, placement support. Next cohort starts 5 December 2026.";

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  noindex: true,
  image: "/og/forward-deployed-ai-engineer.jpg"
});

export default function FdeAiEngineerAdLandingPage() {
  return <FdeAdPage />;
}
