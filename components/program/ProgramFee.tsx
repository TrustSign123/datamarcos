import { EMI_NOTE, PROGRAM_FEES, PROGRAM_FEES_USD, type FeeSlug } from "@/config/fees";
import { isIndiaMarket } from "@/lib/geo";
import { getMarket } from "@/lib/geo-server";

/** Program fee line used on program pages. Fees live in config/fees.ts. */
export async function ProgramFee({ slug, className = "" }: { slug: FeeSlug; className?: string }) {
  const market = await getMarket();
  const amount = isIndiaMarket(market) ? PROGRAM_FEES[slug] : PROGRAM_FEES_USD[slug];
  return (
    <p className={`dm-program-fee ${className}`.trim()}>
      <span className="dm-program-fee-label">Program fee</span>
      <strong>{amount}</strong>
      <span className="dm-program-fee-emi">{EMI_NOTE}</span>
    </p>
  );
}
