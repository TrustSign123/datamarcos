/**
 * 7-day refund policy (Deepesh, 27 Oct 2026). Replaces the earlier "no cancellations or refunds" rule.
 * Single source for the policy wording used on /refund-policy, FAQs and the small trust lines near Apply CTAs.
 * Items marked ASSUMPTION need Deepesh's confirmation (see the PR description).
 */
export const REFUND_POLICY_PATH = "/refund-policy";
export const REFUND_LABEL = "7-day refund policy";
export const REFUND_UPDATED = "27 October 2026";
export const REFUND_UPDATED_ISO = "2026-10-27";

/** ASSUMPTION: how the 7 days are counted. */
export const REFUND_WINDOW = "within 7 days of your batch start date or your payment date, whichever is later";
/** ASSUMPTION: processing time. */
export const REFUND_TIMELINE = "We start your refund within 7 working days of your request, back to your original payment method through Razorpay. Your bank may take another 5–7 working days to show it.";

/** One-line answer reused by FAQs (home + legacy program pages). */
export const REFUND_FAQ_ANSWER = `We have a 7-day refund policy. If the program isn't right for you, whether you're having trouble with the learning or for any other reason, ask ${REFUND_WINDOW} and we'll refund you. Email hello@datamarcos.com or WhatsApp +91 88519 30644.`;
