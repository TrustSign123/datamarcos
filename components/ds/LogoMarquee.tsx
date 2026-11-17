import type React from "react";
import { orgLogos } from "@/config/home";

/** Company network strip (real organisations only, see config/home.ts orgLogos evidence notes). */
export function LogoMarquee({ title = "Where our learners work & teams we’ve trained" }: { title?: string }) {
  const logos = [...orgLogos, ...orgLogos];
  return (
    <div className="ds-logos" aria-label={title}>
      <p className="ds-logos-title"><span>{title}</span></p>
      <div className="ds-logos-viewport">
        <div className="ds-logos-track" role="list">
          {logos.map((logo, index) => {
            const clone = index >= orgLogos.length;
            return (
              <span key={`${logo.name}-${index}`} role={clone ? undefined : "listitem"} aria-hidden={clone || undefined} className="ds-logo">
                {logo.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element -- static brand SVGs
                  <img src={logo.logo.src} alt={clone ? "" : logo.name} width={logo.logo.width} height={logo.logo.height} loading="eager" fetchPriority="low" decoding="async" style={{ "--logo-h": `${logo.logo.h}px` } as React.CSSProperties} />
                ) : logo.name}
              </span>
            );
          })}
        </div>
      </div>
      <p className="ds-fine ds-logos-note">From learners’ own LinkedIn profiles, corporate trainings and Deepesh Mishra’s career. Trademarks of their owners; no endorsement implied.</p>
    </div>
  );
}
