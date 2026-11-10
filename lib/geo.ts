/**
 * Visitor market: India vs international.
 *
 * Resolution order: ?country= / dm-country cookie override, then Vercel
 * x-vercel-ip-country. A missing or invalid country is treated as India, so
 * local development and any edge that omits the header keep today's copy.
 */
import {
  INTL_FEES_FAQ_ANSWER,
  PROGRAM_FEES,
  PROGRAM_FEES_USD,
  type FeeSlug
} from "@/config/fees";

export { INTL_FEES_FROM, PROGRAM_FEES_USD, type FeeSlug } from "@/config/fees";

export const GEO_COOKIE = "dm-country";
export const MARKET_HEADER = "x-dm-market";
export const MARKET_QUERY = "__m";

export type Market = "in" | "intl";

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

export function feeForMarket(market: Market, slug: FeeSlug): string {
  return isIndiaMarket(market) ? PROGRAM_FEES[slug] : PROGRAM_FEES_USD[slug];
}

const FEE_COPY_RE = /\bfees?\b|\bEMI\b|₹/i;

type FaqLike = { q: string; a: string };

function intlFeeAnswer(question: string, slug?: FeeSlug): string {
  if (/^is EMI available/i.test(question.trim())) {
    return "Yes, EMI options are available. Ask our counsellor for the plan that suits you.";
  }
  if (slug) {
    const fee = PROGRAM_FEES_USD[slug];
    if (/next batch date/i.test(question)) {
      return `The program fee is ${fee}. EMI options are available. Our counsellor shares instalment options and the next batch date after a short call.`;
    }
    if (/next cohort date/i.test(question) || /are EMI options available/i.test(question)) {
      return `The program fee is ${fee}. EMI options are available. Our counsellor shares instalment options, scholarships and the next cohort date after a short call. Request a call and we will get back to you.`;
    }
    return `The program fee is ${fee}. EMI options are available. Ask our counsellor for the plan that suits you.`;
  }
  if (/what are the fees/i.test(question)) return INTL_FEES_FAQ_ANSWER;
  return "Yes, EMI options are available. Ask our counsellor for the plan that suits you.";
}

/** Swap fee amounts for international visitors. Indian FAQs (including EMI wording) are otherwise unchanged. */
export function faqsForMarket<T extends FaqLike>(market: Market, faqs: T[], slug?: FeeSlug): T[] {
  if (isIndiaMarket(market)) return faqs;
  return faqs.map((faq) => {
    if (FEE_COPY_RE.test(faq.q) || FEE_COPY_RE.test(faq.a)) {
      return { ...faq, a: intlFeeAnswer(faq.q, slug) };
    }
    if (/anywhere in India \(and abroad\)/i.test(faq.a)) {
      return { ...faq, a: faq.a.replace(/from anywhere in India \(and abroad\)/i, "from anywhere") };
    }
    return faq;
  });
}
