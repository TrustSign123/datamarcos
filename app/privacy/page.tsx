import { site } from "@/config/site";

export default function PrivacyPage() { return <section className="hero-simple"><div className="container legal-copy"><h1 className="section-title">Privacy Policy</h1><p>This editable legal page is prepared for final review and is not legal advice.</p><p>{site.legalEntityName} · {site.registeredAddress} · {site.email}</p></div></section>; }
