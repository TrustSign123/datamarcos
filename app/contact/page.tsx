import { CorporateInquiryForm } from "@/components/Forms";
import { CalendlyBooking } from "@/components/Integrations";
import { site } from "@/config/site";

export default function ContactPage() {
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url));
  const labelFor = (network: string) => network === "whatsapp" ? "Chat on WhatsApp" : network[0].toUpperCase() + network.slice(1);

  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Contact</p><h1 className="section-title">Get in touch.</h1><p className="section-copy">For corporate training, professional programs, workshops and partnership inquiries, contact Datamarcos directly.</p></div></section>
      <section className="section"><div className="container grid two"><CorporateInquiryForm /><div className="grid"><div className="card"><h2>Get in touch</h2><p><strong>Address:</strong> {site.location}</p><p><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p><p><strong>Phone:</strong> {site.phone}</p>{socials.map(([network, url]) => <a className="button secondary" key={network} href={url} target="_blank" rel="noreferrer">{labelFor(network)}</a>)}</div><CalendlyBooking /></div></div></section>
    </>
  );
}
