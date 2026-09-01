import { CorporateInquiryForm } from "@/components/Forms";
import { CalendlyBooking } from "@/components/Integrations";
import { site } from "@/config/site";

export default function ContactPage() {
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url));
  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Contact</p><h1 className="section-title">Talk to Datamarcos.</h1><p className="section-copy">Corporate inquiry, general contact, WhatsApp, social links and booking support without fabricated address details.</p></div></section>
      <section className="section"><div className="container grid two"><CorporateInquiryForm /><div className="grid"><div className="card"><h2>General contact</h2><p>Email: {site.email}</p><p>Phone: {site.phone}</p><p>Location: {site.location}</p>{socials.map(([network, url]) => <a className="button secondary" key={network} href={url} target="_blank" rel="noreferrer">{network}</a>)}</div><CalendlyBooking /></div></div></section>
    </>
  );
}
