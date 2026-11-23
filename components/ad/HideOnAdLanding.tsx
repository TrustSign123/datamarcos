"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { isAdLandingPath } from "@/lib/ad-landing";

/** Keeps the site header and footer off paid-ad landing pages. */
export function HideOnAdLanding({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (isAdLandingPath(pathname)) return null;
  return <>{children}</>;
}
