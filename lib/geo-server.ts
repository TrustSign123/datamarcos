import { headers } from "next/headers";
import { MARKET_HEADER, type Market } from "@/lib/geo";

/** Server-side market. Middleware sets x-dm-market; default to India if absent. */
export async function getMarket(): Promise<Market> {
  const header = (await headers()).get(MARKET_HEADER);
  if (header === "intl" || header === "in") return header;
  return "in";
}
