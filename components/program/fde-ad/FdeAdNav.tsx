"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Header";
import { FDE_COURSE } from "@/config/fde";

const TOC = [
  { href: "#program", label: "Program" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#projects", label: "Projects" },
  { href: "#mentors", label: "Mentors" },
  { href: "#fees", label: "Fees" }
] as const;

export function FdeAdNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("fde-ad-lock", open);
    return () => document.documentElement.classList.remove("fde-ad-lock");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fde-ad-nav" id="navbar_sec">
      <nav className="fde-ad-nav-inner" aria-label="Program">
        <Logo />
        <button
          type="button"
          className="fde-ad-btn fde-ad-btn-light fde-ad-nav-apply"
          data-dm-lead
          data-course={FDE_COURSE}
          data-cta="FDE ad LP nav - Apply Now"
        >
          Apply Now
        </button>
        <button
          type="button"
          className={`fde-ad-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="fde-ad-drawer"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div id="fde-ad-drawer" className={`fde-ad-drawer${open ? " is-open" : ""}`}>
        {TOC.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
        ))}
        <button
          type="button"
          className="fde-ad-btn fde-ad-btn-light fde-ad-drawer-apply"
          data-dm-lead
          data-course={FDE_COURSE}
          data-cta="FDE ad LP mobile menu - Apply Now"
          onClick={close}
        >
          Apply Now
        </button>
      </div>
    </header>
  );
}
