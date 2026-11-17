/**
 * Design slots for assets we do not have yet (mentor intro videos, project demos, more mentor profiles).
 * They render ONLY on local and Vercel preview builds, clearly labelled, so nobody mistakes them for content.
 * On production (VERCEL_ENV=production) they render nothing. Never put invented content in a slot.
 */
export const SHOW_PLACEHOLDERS = process.env.VERCEL_ENV !== "production";
