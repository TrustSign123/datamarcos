/** Paid-ad landing routes: no site header/footer chrome, noindex pages. */
export const AD_LANDING_PATHS = ["/fde-ai-engineer"] as const;

export function isAdLandingPath(pathname: string | null | undefined) {
  if (!pathname) return false;
  return AD_LANDING_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}
