"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mobileNavigation, navigation } from "@/config/navigation";
import { trackEvent } from "@/lib/analytics";

const flagshipPrograms = [
  { title: "Generative AI & Agentic AI Engineer", href: "/programs/genai-agentic-ai-engineer", image: "/images/program-thumbnails/genai-agentic-ai-engineer.png" },
  { title: "Advance Data Engineering with Applied GenAI & Agentic AI", href: "/programs/advance-data-engineering-genai", image: "/images/program-thumbnails/data-engineering-genai.png" },
  { title: "Applied Agentic AI", href: "/programs/applied-agentic-ai-certification", image: "/images/program-thumbnails/applied-agentic-ai.png" },
  { title: "Forward Deployed AI Engineer", href: "/programs/forward-deployed-ai-engineer", image: "/images/program-thumbnails/forward-deployed-ai-engineer.png" }
];

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Datamarcos home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img" focusable="false">
          <path className="mark-blue" d="M12 41c0-8.8 5.6-14.6 13.5-14.6h7.1v8.1h-6.9c-3.5 0-5.7 2.4-5.7 6.2s2.2 6.2 5.7 6.2h5.8V14.5c0-6.2 4.1-10.5 10.3-10.5 6.1 0 10.1 3.8 11 9.2l-7.6 2.2c-.4-2.2-1.8-3.4-3.5-3.4-1.9 0-3.1 1.4-3.1 3.8v29.4c0 6.2-4.1 10-10.3 10h-3.2C17.4 55.2 12 49.6 12 41Z" />
          <path className="mark-red" d="M34 31.8c0-8.6 6.8-15.2 16-15.2 1.9 0 3.8.3 5.5.9v8.2c-1.6-.8-3.4-1.2-5.4-1.2-4.7 0-8.2 3.2-8.2 7.5 0 4.2 3.4 7.4 8.2 7.4 2 0 3.8-.4 5.4-1.2v8.2c-1.8.6-3.6.9-5.5.9-9.2 0-16-6.7-16-15.5Z" />
          <path className="mark-red" d="M52 9h7v46h-7V9Zm7 15h5v4h-5v-4Zm0 11h5v4h-5v-4Zm0 11h5v4h-5v-4Z" />
        </svg>
      </span>
      <span className="brand-copy"><strong>DATAMARCOS</strong><small>Technology Learning</small></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const programsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!programsOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!programsMenuRef.current?.contains(event.target as Node)) setProgramsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [programsOpen]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => item.label === "Programs" ? (
            <div className="program-nav-item" key="program-menu" ref={programsMenuRef} onKeyDown={(event) => { if (event.key === "Escape") setProgramsOpen(false); }}>
              <button className="program-nav-trigger" type="button" aria-expanded={programsOpen} aria-controls="program-nav-menu" onClick={() => setProgramsOpen(!programsOpen)}>
                Programs <ChevronDown size={16} aria-hidden="true" />
              </button>
              {programsOpen && (
                <div className="program-nav-menu" id="program-nav-menu">
                  <div className="program-nav-menu-heading"><strong>Flagship programs</strong><Link href="/programs" onClick={() => setProgramsOpen(false)}>All programs <span aria-hidden="true">&rarr;</span></Link></div>
                  <div className="program-nav-grid">
                    {flagshipPrograms.map((program) => (
                      <Link className="program-nav-card" href={program.href} key={program.href} onClick={() => setProgramsOpen(false)}>
                        <span className="program-nav-image"><Image src={program.image} alt="" fill priority sizes="76px" /></span>
                        <strong>{program.title}</strong>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link key={item.href + item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="button secondary">
            Talk to Us
          </Link>
          <Link
            href="/corporate-training#inquiry"
            className="button primary"
            onClick={() => trackEvent("corporate_cta_click", { location: "header" })}
          >
            Request Corporate Training
          </Link>
        </div>
        <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {mobileNavigation.map((item) => item.label === "Programs" ? (
          <div className="mobile-program-group" key="mobile-programs">
            <button className="mobile-program-trigger" type="button" aria-expanded={programsOpen} onClick={() => setProgramsOpen(!programsOpen)}>
              Programs <ChevronDown size={17} aria-hidden="true" />
            </button>
            {programsOpen && <div className="mobile-program-links"><Link href="/programs" onClick={() => { setOpen(false); setProgramsOpen(false); }}>All programs</Link>{flagshipPrograms.map((program) => <Link href={program.href} key={program.href} onClick={() => { setOpen(false); setProgramsOpen(false); }}>{program.title}</Link>)}</div>}
          </div>
        ) : (
          <Link key={item.href + item.label} href={item.href} onClick={() => { setOpen(false); setProgramsOpen(false); }}>
            {item.label}
          </Link>
        ))}
        <Link className="button primary" href="/contact" onClick={() => setOpen(false)}>
          Talk to Datamarcos
        </Link>
      </nav>
    </header>
  );
}
