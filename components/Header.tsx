"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Building2, ChevronDown, Clock3, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { resourceMenu } from "@/config/navigation";
import { EMI_NOTE, homePrograms } from "@/config/home";
import { env, site } from "@/config/site";

/** Learner-first navigation. Anchors point at homepage sections so they work from any page. */
const sectionLinks = [
  { label: "Learner Stories", href: "/#learner-stories" },
  { label: "Mentor", href: "/#mentor" },
  { label: "FAQ", href: "/#faq" }
];

const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;

export function Logo() {
  return (
    <Link className="brand" href="/">
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
  const pathname = usePathname();
  // The FDE program page carries no fee amounts (counsellors share them); other pages are unchanged.
  // Fee-free header/banner: the FDE page and the new /guides section (guides carry no fees or prices).
  // Fee-free pages: the header shows no fees here (the GenAI hero keeps its own fee line; see the Oct 2026 change log).
  const feeFree = ["/programs/forward-deployed-ai-engineer", "/programs/genai-agentic-ai-engineer", "/programs/applied-agentic-ai-certification", "/guides"].includes(pathname) || pathname.startsWith("/guides/");
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState<"programs" | "resources" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const closeAll = useCallback(() => { setDrawer(false); setMenu(null); }, []);

  // Solid + shadow once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => { closeAll(); }, [pathname, closeAll]);

  // Outside click / Escape closes desktop dropdowns and the drawer.
  useEffect(() => {
    const onPointer = (event: PointerEvent) => { if (menu && !navRef.current?.contains(event.target as Node)) setMenu(null); };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeAll(); };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onPointer); document.removeEventListener("keydown", onKey); };
  }, [menu, closeAll]);

  // Lock page scroll behind the mobile drawer.
  useEffect(() => {
    document.documentElement.classList.toggle("dmx-lock", drawer);
    return () => document.documentElement.classList.remove("dmx-lock");
  }, [drawer]);

  const hoverOpen = (name: "programs" | "resources") => { window.clearTimeout(closeTimer.current); setMenu(name); };
  const hoverClose = () => { window.clearTimeout(closeTimer.current); closeTimer.current = window.setTimeout(() => setMenu(null), 160); };

  return (
    <>
      <div className="dmx-announce" role="note">
        <div className="container">
          <span className="dmx-announce-dot" aria-hidden="true" />
          <span><b>Admissions open</b><span className="dmx-announce-text-extra"> for our live online programs</span><span className="dmx-announce-text-extra">{feeFree ? " · EMI options available" : " · Fees from ₹40,000 with EMI options"}</span></span>
          <button type="button" data-dm-lead data-cta="Announcement bar - Talk to a counsellor">Talk to a counsellor <ArrowRight size={14} /></button>
        </div>
      </div>
      <header className={`site-header dmx-header${scrolled ? " is-scrolled" : ""}${drawer ? " is-open" : ""}`}>
        <div className="container dmx-bar">
          <Logo />
          <nav className="dmx-nav" aria-label="Primary navigation" ref={navRef}>
            <div className="dmx-item" onMouseEnter={() => hoverOpen("programs")} onMouseLeave={hoverClose}>
              <button type="button" className="dmx-link dmx-trigger" aria-expanded={menu === "programs"} aria-controls="dmx-programs" onClick={() => setMenu(menu === "programs" ? null : "programs")}>
                Courses <ChevronDown size={16} aria-hidden="true" />
              </button>
              {menu === "programs" && (
                <div className="dmx-mega" id="dmx-programs">
                  <p className="dmx-mega-label">Our 4 flagship courses · live online, for students &amp; working professionals</p>
                  <div className="dmx-mega-grid">
                    {homePrograms.map((program) => (
                      <Link key={program.slug} className="dmx-course" href={`/programs/${program.slug}`} onClick={closeAll}>
                        <span className="dmx-course-img"><Image src={program.image} alt={program.imageAlt} width={72} height={72} sizes="72px" /></span>
                        <span className="dmx-course-copy">
                          <small>{program.tag}</small>
                          <strong>{program.title}</strong>
                          <span className="dmx-course-meta"><Clock3 size={13} aria-hidden="true" /> {program.facts[0]}<b>{feeFree ? program.facts[1] : program.fee}</b></span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="dmx-mega-foot">
                    <span>Live online · mentor-led by Deepesh Mishra · {EMI_NOTE}</span>
                    <div>
                      <Link href="/programs" onClick={closeAll}>All courses <ArrowRight size={14} /></Link>
                      <button type="button" data-dm-lead data-cta="Header programs menu - Free career call" onClick={closeAll}>Not sure? Free career call <ArrowRight size={14} /></button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {sectionLinks.map((link) => <Link key={link.href} className="dmx-link" href={link.href}>{link.label}</Link>)}
            <div className="dmx-item" onMouseEnter={() => hoverOpen("resources")} onMouseLeave={hoverClose}>
              <button type="button" className="dmx-link dmx-trigger" aria-expanded={menu === "resources"} aria-controls="dmx-resources" onClick={() => setMenu(menu === "resources" ? null : "resources")}>
                Resources <ChevronDown size={16} aria-hidden="true" />
              </button>
              {menu === "resources" && (
                <div className="dmx-mega dmx-mega-small" id="dmx-resources">
                  {resourceMenu.map((entry) => entry.external ? (
                    <a key={entry.title} className="dmx-res" href={entry.href} target="_blank" rel="noopener noreferrer" onClick={closeAll}><strong>{entry.title} <ArrowUpRight size={13} aria-hidden="true" /></strong><span>{entry.description}</span></a>
                  ) : (
                    <Link key={entry.title} className="dmx-res" href={entry.href} onClick={closeAll}><strong>{entry.title}</strong><span>{entry.description}</span></Link>
                  ))}
                  {/* Corporate training is secondary (B2C positioning): moved here from the header action bar. */}
                  <Link className="dmx-res" href="/corporate-training" onClick={closeAll}><strong><Building2 size={13} aria-hidden="true" /> For Teams</strong><span>Corporate technology training for your team.</span></Link>
                </div>
              )}
            </div>
          </nav>
          <div className="dmx-actions">
            <a className="dmx-icon" href={env.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><MessageCircle size={19} /></a>
            <Link className="dmx-apply" href="/programs" data-dm-lead data-cta="Header - Apply Now">Apply Now <ArrowRight size={16} /></Link>
          </div>
          <div className="dmx-mobile-actions">
            <Link className="dmx-apply dmx-apply-sm" href="/programs" data-dm-lead data-cta="Mobile header - Apply Now">Apply Now</Link>
            <button className="dmx-burger" type="button" aria-label={drawer ? "Close menu" : "Open menu"} aria-expanded={drawer} aria-controls="dmx-drawer" onClick={() => setDrawer(!drawer)}>
              {drawer ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <div className={`dmx-scrim${drawer ? " open" : ""}`} onClick={closeAll} aria-hidden="true" />
      <nav id="dmx-drawer" className={`dmx-drawer${drawer ? " open" : ""}`} aria-label="Mobile navigation" inert={!drawer}>
        <div className="dmx-drawer-head">
          <Logo />
          <button type="button" className="dmx-burger" aria-label="Close menu" onClick={closeAll}><X size={24} /></button>
        </div>
        <div className="dmx-drawer-body">
          <p className="dmx-drawer-label">Our 4 flagship courses · live online</p>
          {homePrograms.map((program) => (
            <Link key={program.slug} className="dmx-drawer-course" href={`/programs/${program.slug}`} onClick={closeAll}>
              <Image src={program.image} alt={program.imageAlt} width={52} height={52} sizes="52px" />
              <span><strong>{program.title}</strong><small>{program.facts[0]} · {feeFree ? program.facts[1] : program.fee}</small></span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
          <Link className="dmx-drawer-all" href="/programs" onClick={closeAll}>All courses <ArrowRight size={14} /></Link>
          <div className="dmx-drawer-links">
            {sectionLinks.map((link) => <Link key={link.href} href={link.href} onClick={closeAll}>{link.label}</Link>)}
            <details>
              <summary>Resources <ChevronDown size={16} aria-hidden="true" /></summary>
              {resourceMenu.map((entry) => entry.external
                ? <a key={entry.title} href={entry.href} target="_blank" rel="noopener noreferrer" onClick={closeAll}>{entry.title}</a>
                : <Link key={entry.title} href={entry.href} onClick={closeAll}>{entry.title}</Link>)}
            </details>
            <Link href="/about" onClick={closeAll}>About</Link>
            <Link href="/corporate-training" onClick={closeAll}>For Teams (corporate training)</Link>
            <Link href="/contact" onClick={closeAll}>Contact</Link>
          </div>
        </div>
        <div className="dmx-drawer-foot">
          <button type="button" className="dmx-apply dmx-apply-block" data-dm-lead data-cta="Mobile menu - Apply Now" onClick={closeAll}>Apply Now <ArrowRight size={17} /></button>
          <div className="dmx-drawer-contact">
            <a href={env.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
            <a href={phoneHref}><Phone size={17} /> {site.phone}</a>
          </div>
        </div>
      </nav>
    </>
  );
}
