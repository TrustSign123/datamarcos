import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  path: "/terms",
  title: "Terms | Datamarcos Website Terms, Legal Entity and Contact",
  description: "Datamarcos website terms page with the legal entity name, registered address in Noida and contact email. The full terms are being finalised for legal review."
});

export default function TermsPage() { return <section className="hero-simple"><div className="container legal-copy"><h1 className="section-title">Terms</h1><p>This editable legal page is prepared for final review and is not legal advice.</p><p>{site.legalEntityName} · {site.registeredAddress} · {site.email}</p></div></section>; }
