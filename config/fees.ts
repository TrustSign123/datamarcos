/**
 * Program fees confirmed by Datamarcos (Deepesh Mishra).
 * India amounts (Oct 2026) include GST and are shown only to Indian visitors.
 * USD amounts (10 Nov 2026) are shown only to international visitors, with no tax wording.
 * EMI is an India payment option and must not be promised internationally.
 * Update the numbers here and they change on the homepage cards, FAQ and program pages.
 */
export const PROGRAM_FEES = {
  "genai-agentic-ai-engineer": "₹60,000",
  "advance-data-engineering-genai": "₹60,000",
  "applied-agentic-ai-certification": "₹40,000",
  "forward-deployed-ai-engineer": "₹70,000"
} as const;

export const PROGRAM_FEES_USD = {
  "genai-agentic-ai-engineer": "US$1,200",
  "advance-data-engineering-genai": "US$1,200",
  "applied-agentic-ai-certification": "US$800",
  "forward-deployed-ai-engineer": "US$1,600"
} as const;

export type FeeSlug = keyof typeof PROGRAM_FEES;

export const EMI_NOTE = "EMI options available – ask our counsellor";

/** Starting price in the announce bar, hero chips and homepage meta (international only). */
export const INTL_FEES_FROM = "Fees from US$800 with EMI options";

export const INTL_FEES_FAQ_ANSWER =
  `Forward Deployed AI Engineer: ${PROGRAM_FEES_USD["forward-deployed-ai-engineer"]}. ` +
  `Generative AI & Agentic AI Engineer: ${PROGRAM_FEES_USD["genai-agentic-ai-engineer"]}. ` +
  `Advanced Data Engineering with Applied GenAI & Agentic AI: ${PROGRAM_FEES_USD["advance-data-engineering-genai"]}. ` +
  `Applied Agentic AI: ${PROGRAM_FEES_USD["applied-agentic-ai-certification"]}. EMI options are available.`;
