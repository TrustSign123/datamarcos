/**
 * Light/dark theme (31 Oct 2026). DARK is the default for every visitor; the OS setting is ignored on purpose.
 * Light mode is only applied on pages that have light styles (LIGHT_THEME_PATHS); every other page stays dark,
 * so a half-light page can never show. Extend LIGHT_THEME_PATHS as more pages get light styles.
 */
export const THEME_STORAGE_KEY = "dm-theme";
export type Theme = "dark" | "light";
export const LIGHT_THEME_PATHS = ["/"];

export function supportsLightTheme(pathname: string | null | undefined) {
  return LIGHT_THEME_PATHS.includes(pathname || "");
}

export function readStoredTheme(): Theme {
  try { return window.localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark"; } catch { return "dark"; }
}

/** Set or clear <html data-theme> for the given page. Dark = no attribute (the default stylesheet). */
export function applyTheme(theme: Theme, pathname: string | null | undefined) {
  const root = document.documentElement;
  if (theme === "light" && supportsLightTheme(pathname)) root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");
}

/** Inline, pre-paint version of applyTheme (runs in <head> before the first paint, so there is no flash). */
export const themeBootScript = `try{if(${JSON.stringify(LIGHT_THEME_PATHS)}.indexOf(location.pathname)>-1&&localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}`;
