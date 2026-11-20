"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, BarChart3, Bot, BrainCircuit, Briefcase, CalendarClock, Database, GraduationCap, LineChart, Lock, Rocket, ShieldCheck, Sparkles, Star, Workflow } from "lucide-react";
import { NEXT_COHORT_SHORT } from "@/config/cohort";

export type CatalogCategory = "flagship" | "data" | "pro" | "security";

export type CatalogItem = {
  slug: string;
  title: string;
  leadCourse: string;
  brochureHref: string;
  duration: string;
  level: string;
  tag: string;
  summary: string;
  facts: string[];
  categories: CatalogCategory[];
  flagship?: boolean;
};

type Icon = React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;

/** The three groups the 8 non-flagship programs sit in (Deepesh, 18 Nov 2026: "dive with few categories"). */
export const CATALOG_GROUPS: { id: Exclude<CatalogCategory, "flagship">; label: string; short: string; line: string; icon: Icon }[] = [
  { id: "data", label: "Data & AI Engineering", short: "Data & AI Engineering", line: "Analytics, data science and LLMs in production.", icon: Database },
  { id: "pro", label: "AI for Professionals & Leaders", short: "Professionals & Leaders", line: "Use AI well in the role you have. No coding required.", icon: Briefcase },
  { id: "security", label: "Cybersecurity & AI Security", short: "Security", line: "Secure AI apps and use AI in security operations.", icon: ShieldCheck }
];

const ICONS: Record<string, Icon> = {
  "forward-deployed-ai-engineer": Rocket,
  "genai-agentic-ai-engineer": BrainCircuit,
  "applied-agentic-ai-certification": Bot,
  "advance-data-engineering-genai": Database,
  "llmops-ai-evaluation": Workflow,
  "data-analytics-with-ai": BarChart3,
  "data-science-ai-genai": LineChart,
  "ai-literacy-responsible-ai": GraduationCap,
  "ai-product-strategy-for-leaders": Briefcase,
  "genai-at-work": Sparkles,
  "cybersecurity-with-ai": ShieldCheck,
  "ai-security-secops": Lock
};

function tone(item: Pick<CatalogItem, "categories" | "flagship">) {
  if (item.flagship) return "flag";
  if (item.categories.includes("security")) return "violet";
  if (item.categories.includes("data")) return "teal";
  return "blue";
}

/** Course thumbnail drawn in the blue/white system: icon, name, duration and level. No photos or logos. */
export function CourseThumb({ item, size = "md" }: { item: Pick<CatalogItem, "slug" | "title" | "duration" | "level" | "categories" | "flagship">; size?: "md" | "lg" }) {
  const I = ICONS[item.slug] ?? Sparkles;
  return (
    <div className={`ds-pthumb ds-pthumb-${tone(item)} ds-pthumb-${size}`} aria-hidden="true">
      <span className="ds-pthumb-icon"><I size={size === "lg" ? 26 : 20} aria-hidden /></span>
      <span className="ds-pthumb-name">{item.title}</span>
      <span className="ds-pthumb-meta"><span>{item.duration}</span><em>{item.level}</em></span>
    </div>
  );
}

function FlagshipCard({ p, ctaPrefix }: { p: CatalogItem; ctaPrefix: string }) {
  const I = ICONS[p.slug] ?? Sparkles;
  const href = `/programs/${p.slug}`;
  return (
    <article className="ds-fcard">
      <div className="ds-fcard-top">
        <span className="ds-fcard-badge"><Star size={12} aria-hidden="true" /> Flagship</span>
        <span className="ds-fcard-icon" aria-hidden="true"><I size={24} aria-hidden /></span>
        <h4><Link href={href}>{p.title}</Link></h4>
        <span className="ds-fcard-meta"><span>{p.duration}</span><em>{p.level}</em></span>
      </div>
      <div className="ds-fcard-body">
        <span className="ds-fcard-tag">{p.tag}</span>
        <p>{p.summary}</p>
        <div className="ds-fcard-actions">
          <Link className="ds-btn ds-btn-primary" href={href}>Explore <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <a className="ds-btn ds-btn-ghost" href={p.brochureHref} download data-course={p.leadCourse} data-cta={`${ctaPrefix} - Download Syllabus - ${p.leadCourse}`} aria-label={`Download the ${p.title} syllabus`}><ArrowDownToLine size={16} aria-hidden="true" /> Syllabus</a>
        </div>
      </div>
    </article>
  );
}

function MiniCard({ p }: { p: CatalogItem }) {
  const I = ICONS[p.slug] ?? Sparkles;
  return (
    <li>
      <Link href={`/programs/${p.slug}`} className={`ds-mini ds-mini-${tone(p)}`}>
        <span className="ds-mini-thumb" aria-hidden="true"><I size={22} aria-hidden /><small>{p.duration}</small></span>
        <span className="ds-mini-body">
          <b>{p.title}</b>
          <small>{p.tag}</small>
          <span className="ds-mini-level">{p.level}</span>
        </span>
        <ArrowRight className="ds-mini-go" size={16} aria-hidden="true" />
      </Link>
    </li>
  );
}

export function ProgramCatalog({ items, ctaPrefix = "Home program card" }: { items: CatalogItem[]; ctaPrefix?: string }) {
  const [cat, setCat] = useState<"all" | Exclude<CatalogCategory, "flagship">>("all");
  const flagship = items.filter((i) => i.flagship);
  const groups = CATALOG_GROUPS.filter((g) => cat === "all" || g.id === cat);
  return (
    <div className="ds-catalog">
      <div className="ds-catalog-bar">
        <h3 className="ds-catalog-h"><Star size={18} aria-hidden="true" /> Flagship career programs</h3>
        <span className="ds-catalog-cohort"><CalendarClock size={15} aria-hidden="true" /> Next cohort: {NEXT_COHORT_SHORT}</span>
      </div>
      <div className="ds-flagship">
        {flagship.map((p) => <FlagshipCard key={p.slug} p={p} ctaPrefix={ctaPrefix} />)}
      </div>

      <div className="ds-catalog-bar ds-catalog-bar-2">
        <h3 className="ds-catalog-h">More programs by category</h3>
        <div className="ds-chips" role="toolbar" aria-label="Filter programs by category">
          <button type="button" className="ds-chip" aria-pressed={cat === "all"} onClick={() => setCat("all")}>All</button>
          {CATALOG_GROUPS.map((g) => (
            <button key={g.id} type="button" className="ds-chip" aria-pressed={cat === g.id} onClick={() => setCat(g.id)}>{g.short}</button>
          ))}
        </div>
      </div>
      <div className={`ds-groups${cat === "all" ? "" : " ds-groups-one"}`}>
        {groups.map((g) => {
          const list = items.filter((i) => !i.flagship && i.categories.includes(g.id));
          const GI = g.icon;
          return (
            <section className={`ds-group ds-group-${g.id}`} key={g.id} aria-label={g.label}>
              <header>
                <span className="ds-group-icon" aria-hidden="true"><GI size={20} aria-hidden /></span>
                <span><b>{g.label}</b><small>{g.line}</small></span>
                <em>{list.length}</em>
              </header>
              <ul>{list.map((p) => <MiniCard key={p.slug} p={p} />)}</ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
