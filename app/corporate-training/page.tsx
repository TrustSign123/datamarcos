import { CorporateCTA } from "@/components/CTA";
import { CalendlyBooking } from "@/components/Integrations";
import { CorporateInquiryForm } from "@/components/Forms";
import { industries } from "@/config/industries";

export default function CorporateTrainingPage() {
  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Corporate training</p><h1 className="section-title">Build the Capabilities Your Teams Need.</h1><p className="section-copy">Customized technology training, assessments, workshops, bootcamps and trainer-on-demand support for modern organizations.</p><div className="hero-actions"><a className="button primary" href="#inquiry">Request Corporate Training</a><a className="button secondary" href="#booking">Book Discovery Call</a></div></div></section>
      <section className="section"><div className="container grid three">{["Learning needs assessment", "Training solutions", "Technology domains", "Delivery models", "Trainer network", "Measurement"].map((item) => <div className="card" key={item}><h2>{item}</h2><p>Structured corporate learning support configured around your teams, tools and transformation priorities.</p></div>)}</div></section>
      <section className="section alt"><div className="container"><p className="eyebrow">Industries</p><h2 className="section-title">Training across industry contexts.</h2><div className="grid three">{industries.map((industry) => <div className="card" key={industry}>{industry}</div>)}</div></div></section>
      <section className="section" id="inquiry"><div className="container grid two"><div><p className="eyebrow">Inquiry</p><h2 className="section-title">Talk to Datamarcos.</h2><p className="section-copy">Share the capability you need to build. The form supports real endpoints through environment configuration and development demo success when no endpoint is available.</p></div><CorporateInquiryForm /></div></section>
      <section className="section alt" id="booking"><div className="container"><p className="eyebrow">Calendly</p><h2 className="section-title">Corporate discovery call</h2><CalendlyBooking /></div></section>
      <CorporateCTA />
    </>
  );
}
