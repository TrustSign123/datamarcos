import { pageMetadata } from "@/lib/seo";
import RefundPolicyPage from "@/app/refund-policy/page";

export const metadata = pageMetadata({
  path: "/payment-refund-policy",
  title: "Payment & 7-Day Refund Policy | Datamarcos",
  description: "Datamarcos payment and 7-day refund policy: ask within 7 days of your batch start or payment date, whichever is later, and we'll refund you. Merchant, shipping and contact details.",
  canonical: "/refund-policy"
});

export default RefundPolicyPage;