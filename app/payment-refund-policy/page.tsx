import { pageMetadata } from "@/lib/seo";
import RefundPolicyPage from "@/app/refund-policy/page";

export const metadata = pageMetadata({
  path: "/payment-refund-policy",
  title: "Payment & Refund Policy | Datamarcos Online Programs",
  description: "Datamarcos payment and refund policy for digital learning programs: merchant details, the no-cancellation and no-refund rule, shipping and contact details.",
  canonical: "/refund-policy"
});

export default RefundPolicyPage;