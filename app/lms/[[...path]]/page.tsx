import type { Metadata } from "next";
import { LMSHub } from "@/components/lms/LMSHub";
import { normalizedLmsPath } from "@/lib/lms-data";

export const metadata: Metadata = {
  title: "Datamarcos Learning Hub",
  description: "Authenticated course access, schedules, resources, recordings and progress for Datamarcos students.",
  robots: { index: false, follow: false }
};

export default async function LMSPage({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path } = await params;
  return <LMSHub path={normalizedLmsPath(path)} />;
}
