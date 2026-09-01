import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/program/ProgramPageTemplate";
import { programs } from "@/config/programs";
import { site } from "@/config/site";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);
  if (!program) return { title: "Program Not Found | Datamarcos" };
  const title = program.seo?.title || `${program.title} | Datamarcos`;
  const description = program.seo?.description || program.description;
  const image = program.seo?.ogImage || program.programOgImage;
  return {
    title,
    description,
    keywords: program.seo?.keywords,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: { title, description, url: `${site.url}/programs/${program.slug}`, images: image ? [{ url: image, width: 1200, height: 630 }] : undefined },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined }
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);
  if (!program) notFound();
  return <ProgramPageTemplate program={program} />;
}
