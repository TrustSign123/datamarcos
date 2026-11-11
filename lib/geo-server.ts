import { cookies, headers } from "next/headers";
import { GEO_COOKIE, MARKET_HEADER, resolveMarket, type Market } from "@/lib/geo";

/**
 * Server-side market. Pages get x-dm-market from middleware.
 * API routes are excluded from that matcher, so fall back to the dm-country
 * cookie and x-vercel-ip-country. Missing/invalid still means India.
 */
export async function getMarket(): Promise<Market> {
  const headerStore = await headers();
  const header = headerStore.get(MARKET_HEADER);
  if (header === "intl" || header === "in") return header;
  const cookieCountry = (await cookies()).get(GEO_COOKIE)?.value;
  return resolveMarket({
    overrideCountry: cookieCountry,
    vercelCountry: headerStore.get("x-vercel-ip-country")
  });
}
