/**
 * Visitor market: India vs international.
 *
 * Resolution order: ?country= / dm-country cookie override, then Vercel
 * x-vercel-ip-country. A missing or invalid country is treated as India, so
 * local development and any edge that omits the header keep today's copy.
 */
export const GEO_COOKIE = "dm-country";
export const MARKET_HEADER = "x-dm-market";
export const MARKET_QUERY = "__m";

export type Market = "in" | "intl";

export const INTL_FEE_COPY = "Fees shared on a counsellor call";

export function isIndiaMarket(market: Market): boolean {
  return market === "in";
}

export function parseCountryCode(value: string | null | undefined): string | null {
  if (!value) return null;
  const code = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

/** IN or missing/invalid → India. Any other ISO country is international. */
export function marketFromCountry(country: string | null | undefined): Market {
  const code = parseCountryCode(country);
  if (!code || code === "IN") return "in";
  return "intl";
}

export function resolveMarket(opts: {
  overrideCountry?: string | null;
  vercelCountry?: string | null;
}): Market {
  const override = parseCountryCode(opts.overrideCountry);
  if (override) return marketFromCountry(override);
  return marketFromCountry(opts.vercelCountry);
}

type FaqLike = { q: string; a: string };

/** Fee-free FAQ answers for meta/JSON-LD. Identical in every market. Visible FAQs use faqsWithProgramFees. */
export const SNIPPET_FEE_FAQ_ANSWER =
  "EMI options are available. Our counsellor shares the current fee and EMI plans on a call.";

const FEE_AMOUNT_RE = /₹|\$\s*\d|\bRs\.?\b|\bINR\b|\bUS\$|\bUSD\b|\b7,999\b|\b4,999\b|\b70,000\b|\b65,000\b|\b60,000\b|\b45,000\b|\b40,000\b|\b35,000\b|\b30,000\b|\b1,900\b|\b1,700\b|\b1,500\b|\b1,400\b|\b1,200\b|\b1,000\b|\b900\b|\b350\b|\b300\b|\bEMI from\b/;

export function faqsForJsonLd<T extends FaqLike>(faqs: T[]): T[] {
  return faqs.map((faq) => (FEE_AMOUNT_RE.test(faq.a) ? { ...faq, a: SNIPPET_FEE_FAQ_ANSWER } : faq));
}

/** Visible FAQs are already market-specific (see faqsWithProgramFees). This only rewrites India-centric phrasing for international visitors. JSON-LD stays fee-free via faqsForJsonLd. */
export function faqsForMarket<T extends FaqLike>(market: Market, faqs: T[]): T[] {
  if (isIndiaMarket(market)) return faqs;
  return faqs.map((faq) => {
    if (/anywhere in India \(and abroad\)/i.test(faq.a)) {
      return { ...faq, a: faq.a.replace(/from anywhere in India \(and abroad\)/i, "from anywhere") };
    }
    return faq;
  });
}

export function feeOrIntl(market: Market, indiaCopy: string): string {
  return isIndiaMarket(market) ? indiaCopy : INTL_FEE_COPY;
}
