import { EMI_NOTE, PROGRAM_FEES, type FeeSlug } from "@/config/fees";
import { INTL_FEE_COPY, isIndiaMarket } from "@/lib/geo";
import { getMarket } from "@/lib/geo-server";

/** Program fee line used on program pages. Fees live in config/fees.ts. */
export async function ProgramFee({ slug, className = "" }: { slug: FeeSlug; className?: string }) {
  const market = await getMarket();
  if (!isIndiaMarket(market)) {
    return (
      <p className={`dm-program-fee ${className}`.trim()}>
        <span className="dm-program-fee-label">Program fee</span>
        <strong>{INTL_FEE_COPY}</strong>
      </p>
    );
  }
  return (
    <p className={`dm-program-fee ${className}`.trim()}>
      <span className="dm-program-fee-label">Program fee</span>
      <strong>{PROGRAM_FEES[slug]}</strong>
      <span className="dm-program-fee-gst">incl. GST</span>
      <span className="dm-program-fee-emi">{EMI_NOTE}</span>
    </p>
  );
}
