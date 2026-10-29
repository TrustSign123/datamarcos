import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { approvedGuides } from "@/lib/guides";

/** "Related guides" link block for course pages. Only approved guides render; unknown slugs are skipped. */
export function RelatedGuides({ slugs, wrapClassName = "container", id = "related-guides" }: { slugs: string[]; wrapClassName?: string; id?: string }) {
  const guides = slugs.map((s) => approvedGuides.find((g) => g.slug === s)).filter((g) => g !== undefined);
  if (!guides.length) return null;
  return (
    <section className="related-guides" id={id} aria-labelledby={`${id}-title`}>
      <div className={wrapClassName}>
        <p className="related-guides-eyebrow">Read before you decide</p>
        <h2 id={`${id}-title`}>Related guides</h2>
        <ul className="related-guides-list">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`}>
                <strong>{g.h1}</strong>
                <span>{g.description}</span>
                <small>Read the guide <ArrowRight size={14} aria-hidden="true" /></small>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
