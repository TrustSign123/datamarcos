import { feeQuote, type FeeSlug } from "@/config/fees";
import { getMarket } from "@/lib/geo-server";
import { razorpayConfigured } from "@/lib/razorpay-server";
import { FeesEnrolmentClient } from "./FeesEnrolmentClient";

export async function FeesEnrolment({ slug }: { slug: FeeSlug }) {
  const market = await getMarket();
  return <FeesEnrolmentClient quote={feeQuote(slug, market)} paymentsEnabled={razorpayConfigured()} />;
}
