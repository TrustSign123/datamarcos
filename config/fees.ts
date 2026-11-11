/**
 * Program fees confirmed by Datamarcos (Deepesh Mishra, 11 Nov 2026).
 * India amounts are in INR and include GST. International amounts are in USD.
 * Seat booking is 5% of the fee, rounded to the nearest rupee or dollar, and is
 * adjusted against the full fee. EMI / instalment figures are the fee divided by
 * 24 months, rounded up. Do not invent discounts or strikethrough prices.
 *
 * Visible on-page fees are market-specific. Meta, OG and FAQ JSON-LD stay
 * fee-free in every market (see faqsForJsonLd in lib/geo.ts).
 */
import type { Market } from "@/lib/geo";
import { isIndiaMarket } from "@/lib/geo";
import { NEXT_COHORT_LONG } from "@/config/cohort";

export const EMI_MONTHS = 24;
export const SEAT_PERCENT = 5;

export const PROGRAM_PRICE = {
  "forward-deployed-ai-engineer": {
    title: "Forward Deployed AI Engineer",
    leadCourse: "Forward Deployed AI Engineer",
    inr: 70_000,
    usd: 1_900
  },
  "genai-agentic-ai-engineer": {
    title: "Generative AI & Agentic AI Engineer",
    leadCourse: "Generative AI & Agentic AI Engineer",
    inr: 60_000,
    usd: 1_500
  },
  "advance-data-engineering-genai": {
    title: "Advance Data Engineering with Applied GenAI & Agentic AI",
    leadCourse: "Advance Data Engineering with Applied GenAI & Agentic AI",
    inr: 60_000,
    usd: 1_400
  },
  "applied-agentic-ai-certification": {
    title: "Applied Agentic AI",
    leadCourse: "Applied Agentic AI",
    inr: 40_000,
    usd: 900
  },
  "data-science-ai-genai": {
    title: "Data Science & AI with GenAI",
    leadCourse: "Data Science & AI with GenAI",
    inr: 65_000,
    usd: 1_700
  },
  "ai-security-secops": {
    title: "AI Security & SecOps",
    leadCourse: "AI Security & SecOps",
    inr: 45_000,
    usd: 1_200
  },
  "llmops-ai-evaluation": {
    title: "LLMOps & AI Evaluation",
    leadCourse: "LLMOps & AI Evaluation",
    inr: 40_000,
    usd: 1_000
  },
  "ai-product-strategy-for-leaders": {
    title: "AI Product & Strategy for Leaders",
    leadCourse: "AI Product & Strategy for Leaders",
    inr: 35_000,
    usd: 900
  },
  "data-analytics-with-ai": {
    title: "Data Analytics with AI",
    leadCourse: "Data Analytics with AI",
    inr: 35_000,
    usd: 900
  },
  "cybersecurity-with-ai": {
    title: "Cybersecurity with AI",
    leadCourse: "Cybersecurity with AI",
    inr: 30_000,
    usd: 900
  },
  "genai-at-work": {
    title: "GenAI at Work",
    leadCourse: "GenAI at Work",
    inr: 7_999,
    usd: 350
  },
  "ai-literacy-responsible-ai": {
    title: "AI Literacy & Responsible AI",
    leadCourse: "AI Literacy & Responsible AI",
    inr: 4_999,
    usd: 300
  }
} as const;

export type FeeSlug = keyof typeof PROGRAM_PRICE;
export type PaymentType = "seat" | "full";

export function isPaymentType(value: string | null | undefined): value is PaymentType {
  return value === "seat" || value === "full";
}


export const FEE_SLUGS = Object.keys(PROGRAM_PRICE) as FeeSlug[];

export function isFeeSlug(value: string | null | undefined): value is FeeSlug {
  return Boolean(value && value in PROGRAM_PRICE);
}

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

/** 5% of the fee, rounded to the nearest rupee or dollar. */
export function seatAmount(fee: number): number {
  return Math.round((fee * SEAT_PERCENT) / 100);
}

/** Fee divided by 24 months, rounded up. */
export function emiAmount(fee: number): number {
  return Math.ceil(fee / EMI_MONTHS);
}

export type FeeQuote = {
  slug: FeeSlug;
  title: string;
  leadCourse: string;
  india: boolean;
  currency: "INR" | "USD";
  fee: number;
  seat: number;
  emi: number;
  feeFormatted: string;
  seatFormatted: string;
  emiFormatted: string;
};

export function feeQuote(slug: FeeSlug, market: Market): FeeQuote {
  const program = PROGRAM_PRICE[slug];
  const india = isIndiaMarket(market);
  const fee = india ? program.inr : program.usd;
  const format = india ? formatInr : formatUsd;
  const seat = seatAmount(fee);
  const emi = emiAmount(fee);
  return {
    slug,
    title: program.title,
    leadCourse: program.leadCourse,
    india,
    currency: india ? "INR" : "USD",
    fee,
    seat,
    emi,
    feeFormatted: format(fee),
    seatFormatted: format(seat),
    emiFormatted: format(emi)
  };
}

/** Amount in Razorpay's smallest currency unit (paise or cents). Never take this from the client. */
export function paymentAmountMinor(quote: FeeQuote, type: PaymentType): number {
  return (type === "seat" ? quote.seat : quote.fee) * 100;
}

/** India-formatted map kept for older imports (homepage card data, etc.). */
export const PROGRAM_FEES = Object.fromEntries(
  FEE_SLUGS.map((slug) => [slug, formatInr(PROGRAM_PRICE[slug].inr)])
) as { [K in FeeSlug]: string };

export const EMI_NOTE = "EMI options available – ask our counsellor";

export const FEES_SECTION_ID = "fees";
export const VIEW_FEES_LABEL = "View fees & EMI";

export function paymentIntentLabel(type: PaymentType, course: string): string {
  return type === "seat" ? `Book seat – ${course}` : `Pay full fee – ${course}`;
}

export function programFeeFaqAnswer(slug: FeeSlug, market: Market): string {
  const quote = feeQuote(slug, market);
  const gst = quote.india ? " (incl. GST)" : "";
  const emi = quote.india
    ? `EMI from ${quote.emiFormatted}/month, up to 24 months, subject to approval (EMI via partner).`
    : `Flexible instalments — from ${quote.emiFormatted}/month over 24 months, subject to approval. Instalment options can also be arranged with our counsellor.`;
  return `The program fee is ${quote.feeFormatted}${gst}. You can book your seat for ${quote.seatFormatted} (5% of the fee, adjusted against the full fee). ${emi} You can pay the full fee on the program page, or talk to a counsellor. The next cohort starts on ${NEXT_COHORT_LONG}.`;
}

export function allProgramFeesFaqAnswer(market: Market): string {
  const lines = FEE_SLUGS.map((slug) => {
    const quote = feeQuote(slug, market);
    const gst = quote.india ? " incl. GST" : "";
    return `${quote.title}: ${quote.feeFormatted}${gst}`;
  });
  const emi = isIndiaMarket(market)
    ? "You can book a seat for 5% of the fee (adjusted against the full fee). EMI from the monthly amount listed on each program page is available up to 24 months, subject to approval (EMI via partner)."
    : "You can book a seat for 5% of the fee (adjusted against the full fee). Flexible instalments from the monthly amount listed on each program page are available over 24 months, subject to approval. You can also ask our counsellor about instalment options.";
  return `${lines.join(". ")}. ${emi}`;
}

const FEE_FAQ_RE = /\bfees?\b|\bEMI\b/i;

export function faqsWithProgramFees<T extends { q: string; a: string }>(
  market: Market,
  faqs: T[],
  slug?: FeeSlug
): T[] {
  return faqs.map((faq) => {
    if (/refund/i.test(faq.q)) return faq;
    const asksFee = FEE_FAQ_RE.test(faq.q) || FEE_FAQ_RE.test(faq.a);
    if (!asksFee) return faq;
    if (slug) {
      return { ...faq, a: programFeeFaqAnswer(slug, market) };
    }
    if (/^what are the fees/i.test(faq.q)) {
      return { ...faq, a: allProgramFeesFaqAnswer(market) };
    }
    if (/^is EMI available/i.test(faq.q)) {
      const emi = isIndiaMarket(market)
        ? "Yes. Each program page lists EMI from the monthly amount for that course (the fee divided by 24, rounded up), up to 24 months, subject to approval. India EMI is arranged via a partner."
        : "Yes. Each program page lists flexible instalments from the monthly amount for that course (the fee divided by 24, rounded up) over 24 months, subject to approval. You can also ask our counsellor about instalment options.";
      return { ...faq, a: emi };
    }
    return faq;
  });
}

export const APPLY_FEE_INTRO = "Fees, EMI and enrolment options are listed in the Fees & enrolment section. A counsellor can help you choose.";
