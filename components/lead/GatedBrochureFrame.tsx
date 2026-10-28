"use client";

import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import { isLeadUnlocked, UNLOCK_EVENT } from "./leadUnlock";

/**
 * Embedded brochure preview that stays locked until the visitor has submitted the lead form
 * (same 30-day localStorage unlock as the gated download links). Keeps the parent's frame styles.
 */
export function GatedBrochureFrame({ src, title, course, cover }: { src: string; title: string; course: string; cover?: string }) {
  const [unlocked, setUnlocked] = useState(false);
  // The cover is a CSS background, which the browser downloads as soon as it renders, even far below the fold.
  // Set it only when the frame comes within ~800 px of the viewport.
  const [showCover, setShowCover] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!cover || !box) return;
    if (!("IntersectionObserver" in window)) { setShowCover(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { setShowCover(true); io.disconnect(); }
    }, { rootMargin: "800px 0px" });
    io.observe(box);
    return () => io.disconnect();
  }, [cover, unlocked]);

  useEffect(() => {
    const sync = () => setUnlocked(isLeadUnlocked());
    sync();
    window.addEventListener(UNLOCK_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(UNLOCK_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (unlocked) return <iframe src={src} title={title} loading="lazy" />;

  return (
    <div ref={boxRef} className="dm-locked-brochure" style={cover && showCover ? { ["--dm-cover" as string]: `url(${cover})` } : undefined}>
      <div className="dm-locked-brochure-inner">
        <span className="dm-locked-brochure-icon"><Lock size={22} aria-hidden="true" /></span>
        <p className="dm-locked-brochure-eyebrow">Full program guide</p>
        <h3>{title}</h3>
        <p>Share your details once to read and download the complete syllabus.</p>
        <a className="dm-locked-brochure-button" href={src} data-dm-download data-file={src} data-course={course}>Unlock the syllabus</a>
      </div>
    </div>
  );
}
