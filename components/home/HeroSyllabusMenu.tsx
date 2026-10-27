"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ChevronDown } from "lucide-react";

export type SyllabusFile = { course: string; title: string; href: string };

/**
 * Homepage hero "Download Syllabus": opens a small list of the four course syllabi, and each item
 * downloads the PDF straight away. No lead form: data-dm-ungated opts out of the site-wide gate in LeadModal,
 * which still records a "resource_download" event (gated: "none").
 */
export function HeroSyllabusMenu({ files }: { files: SyllabusFile[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => { if (!ref.current?.contains(event.target as Node)) setOpen(false); };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div className="dmh-syl" ref={ref} data-dm-ungated>
      <button type="button" className="dmh-syllabus" aria-expanded={open} aria-controls="dmh-syl-menu" onClick={() => setOpen((v) => !v)}>
        <ArrowDownToLine size={18} /> Download Syllabus <ChevronDown size={16} className="dmh-syl-chev" aria-hidden="true" />
      </button>
      <ul id="dmh-syl-menu" className="dmh-syl-menu" hidden={!open} aria-label="Download a course syllabus (PDF)">
        {files.map((file) => (
          <li key={file.href}>
            <a
              href={file.href}
              download
              data-course={file.course}
              data-cta={`Home hero - Download Syllabus - ${file.course}`}
              onClick={() => setOpen(false)}
            >
              <ArrowDownToLine size={15} aria-hidden="true" />
              <span>{file.title}</span>
              <small>PDF</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
