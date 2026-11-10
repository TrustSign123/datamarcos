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

const FEE_COPY_RE = /\bfees?\b|\bEMI\b|₹/i;

type FaqLike = { q: string; a: string };


function intlFeeQuestion(question: string): string {
  const q = question.trim();
  if (/what is the fee\??\s*are EMI options available/i.test(q)) return "How do I find out about fees?";
  if (/^what are the fees\??$/i.test(q)) return "How do I find out about fees?";
  if (/^is EMI available\??$/i.test(q)) return "How do I find out about fees?";
  if (/what is the fee and next cohort date/i.test(q)) return "How do I find out about fees and the next cohort date?";
  if (/what is the fee and next batch date/i.test(q)) return "How do I find out about fees and the next batch date?";
  if (FEE_COPY_RE.test(q)) return "How do I find out about fees?";
  return question;
}

/** Swap fee/EMI answers for international visitors. Indian FAQs are unchanged. */
export function faqsForMarket<T extends FaqLike>(market: Market, faqs: T[]): T[] {
  if (isIndiaMarket(market)) return faqs;
  return faqs.map((faq) => {
    if (FEE_COPY_RE.test(faq.q) || FEE_COPY_RE.test(faq.a)) {
      return { ...faq, q: intlFeeQuestion(faq.q), a: INTL_FEE_COPY };
    }
    if (/anywhere in India \(and abroad\)/i.test(faq.a)) {
      return { ...faq, a: faq.a.replace(/from anywhere in India \(and abroad\)/i, "from anywhere") };
    }
    return faq;
  });
}

export function feeOrIntl(market: Market, indiaCopy: string): string {
  return isIndiaMarket(market) ? indiaCopy : INTL_FEE_COPY;
}
