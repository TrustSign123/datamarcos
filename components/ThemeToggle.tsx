"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { applyTheme, readStoredTheme, supportsLightTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Keeps <html data-theme> right on client-side navigation (before paint), e.g. leaving "/" for a dark-only page. */
export function ThemeSync() {
  const pathname = usePathname();
  useIsoLayoutEffect(() => { applyTheme(readStoredTheme(), pathname); }, [pathname]);
  return null;
}

/** Sun/moon button. Rendered only on pages that have light styles; elsewhere the site stays dark and the toggle is hidden. */
export function ThemeToggle({ variant = "icon" }: { variant?: "icon" | "row" }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => { setTheme(readStoredTheme()); }, []);
  if (!supportsLightTheme(pathname)) return null;

  const next: Theme = theme === "light" ? "dark" : "light";
  const label = next === "light" ? "Switch to light theme" : "Switch to dark theme";
  const toggle = () => {
    try { window.localStorage.setItem(THEME_STORAGE_KEY, next); } catch { /* private mode: still switch for this view */ }
    applyTheme(next, pathname);
    setTheme(next);
  };
  const Icon = theme === "light" ? Moon : Sun;

  return variant === "row" ? (
    <button type="button" className="dmx-theme-row" onClick={toggle} aria-label={label}>
      <Icon size={18} aria-hidden="true" />
      <span>{theme === "light" ? "Dark theme" : "Light theme"}</span>
    </button>
  ) : (
    <button type="button" className="dmx-icon dmx-theme" onClick={toggle} aria-label={label} title={label}>
      <Icon size={19} aria-hidden="true" />
    </button>
  );
}
