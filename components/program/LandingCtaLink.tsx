"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type LandingCtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: "WhatsAppClick" | "BrochureDownload";
  eventLabel: string;
  children: ReactNode;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function LandingCtaLink({ eventName, eventLabel, children, onClick, ...props }: LandingCtaLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.fbq?.("trackCustom", eventName, { label: eventLabel });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
