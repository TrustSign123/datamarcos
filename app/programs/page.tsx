"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { programs } from "@/config/programs";

export default function ProgramsPage() {
  const [query, setQuery] = useState("");
  const [technology, setTechnology] = useState("");
  const [level, setLevel] = useState("");
  const [format, setFormat] = useState("");
  const [audience, setAudience] = useState("");
  const [delivery, setDelivery] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setTechnology(new URLSearchParams(window.location.search).get("technology") || "");
  }, []);

  const filtered = useMemo(() => programs.filter((program) => {
    const blob = `${program.title} ${program.description} ${program.technologies.join(" ")}`.toLowerCase();
    return (!query || blob.includes(query.toLowerCase())) &&
      (!technology || program.category.includes(technology) || program.technologies.some((t) => t.includes(technology))) &&
      (!level || program.level.includes(level)) &&
      (!format || program.format.includes(format)) &&
      (!audience || program.audience.includes(audience)) &&
      (!delivery || program.delivery.includes(delivery)) &&
      (!status || program.status === status);
  }), [query, technology, level, format, audience, delivery, status]);

  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Program catalog</p><h1 className="section-title">Explore Programs</h1><p className="section-copy">Reusable program cards for professional cohorts, workshops and corporate custom learning paths.</p></div></section>
      <section className="section">
        <div className="container">
          <div className="filters">
            <input aria-label="Search programs" placeholder="Search programs..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <select aria-label="Technology" value={technology} onChange={(e) => setTechnology(e.target.value)}><option value="">Technology</option><option>AI</option><option>Data</option><option>Cloud</option><option>DevOps</option><option>Cybersecurity</option></select>
            <select aria-label="Level" value={level} onChange={(e) => setLevel(e.target.value)}><option value="">Level</option><option>Intermediate</option><option>Advanced</option></select>
            <select aria-label="Format" value={format} onChange={(e) => setFormat(e.target.value)}><option value="">Format</option><option>Cohort</option><option>Workshop</option><option>Corporate</option></select>
            <select aria-label="Audience" value={audience} onChange={(e) => setAudience(e.target.value)}><option value="">Audience</option><option>Professionals</option><option>Organizations</option></select>
            <select aria-label="Delivery" value={delivery} onChange={(e) => setDelivery(e.target.value)}><option value="">Delivery</option><option>Remote</option><option>Onsite</option><option>Hybrid</option></select>
            <select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}><option value="">Status</option><option>LIVE</option><option>UPCOMING</option><option>COMING_SOON</option><option>CORPORATE_CUSTOM</option><option>WAITLIST</option></select>
          </div>
          <div className="grid three">{filtered.map((program) => <article className="card" key={program.id}><span className="badge">{program.status.replaceAll("_", " ")}</span><h2>{program.title}</h2><p>{program.description}</p><p><strong>Technology:</strong> {program.category}</p><p><strong>Duration:</strong> {program.duration}</p><p><strong>Level:</strong> {program.level}</p><p><strong>Format:</strong> {program.format}</p><Link className="button primary" href={`/programs/${program.slug}`}>View Program</Link></article>)}</div>
        </div>
      </section>
    </>
  );
}
