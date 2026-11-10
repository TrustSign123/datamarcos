/**
 * Program fees confirmed by Datamarcos (Deepesh Mishra, Oct 2026).
 * India amounts include GST and are shown only to Indian visitors.
 * International visitors see no prices; fees are shared on a counsellor call.
 * EMI is available, but amounts vary, so the site only says "EMI options – ask our counsellor".
 * Update the numbers here and they change on the homepage cards, FAQ and program pages.
 */
export const PROGRAM_FEES = {
  "genai-agentic-ai-engineer": "₹60,000",
  "advance-data-engineering-genai": "₹60,000",
  "applied-agentic-ai-certification": "₹40,000",
  "forward-deployed-ai-engineer": "₹70,000"
} as const;

export type FeeSlug = keyof typeof PROGRAM_FEES;

export const EMI_NOTE = "EMI options available – ask our counsellor";
