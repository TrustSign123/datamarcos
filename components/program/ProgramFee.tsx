import { EMI_NOTE, PROGRAM_FEES, type FeeSlug } from "@/config/fees";

/** Program fee line used on program pages. Fees live in config/fees.ts. */
export function ProgramFee({ slug, className = "" }: { slug: FeeSlug; className?: string }) {
  return (
    <p className={`dm-program-fee ${className}`.trim()}>
      <span className="dm-program-fee-label">Program fee</span>
      <strong>{PROGRAM_FEES[slug]}</strong>
      <span className="dm-program-fee-emi">{EMI_NOTE}</span>
    </p>
  );
}
