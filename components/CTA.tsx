import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CorporateCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section alt" : "section"}>
      <div className="container card" style={{ background: "var(--navy)", color: "white", padding: "42px" }}>
        <p className="eyebrow" style={{ color: "var(--green)" }}>Corporate learning</p>
        <h2 className="section-title" style={{ color: "white" }}>Planning Your Next Technology Upskilling Program?</h2>
        <p className="section-copy" style={{ color: "rgba(255,255,255,.76)" }}>Tell us what your teams need to learn. We&apos;ll help design the right training solution.</p>
        <div className="hero-actions">
          <Link className="button primary" href="/corporate-training#inquiry">Request Corporate Training <ArrowRight size={18} /></Link>
          <Link className="button secondary" href="/contact">Talk to a Learning Consultant</Link>
        </div>
      </div>
    </section>
  );
}
