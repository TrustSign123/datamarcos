import { site } from "@/config/site";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">About Datamarcos</p><h1 className="section-title">Technology Learning Built for a Fast-Moving Industry.</h1><p className="section-copy">Technology changes quickly. Organizations need learning partners who understand both the technology and the business context in which it must be applied.</p></div></section>
      <section className="section"><div className="container grid two"><div><h2>Mission</h2><p>Help organizations and professionals build capabilities that keep pace with technology.</p><h2>Vision</h2><p>Become a global technology learning and workforce transformation partner.</p></div><div className="founder-portrait"><Image src={site.founder.image} alt={site.founder.imageAlt} width={700} height={875} /></div></div></section>
      <section className="section alt"><div className="container grid two"><div><p className="eyebrow">Founder</p><h2 className="section-title">{site.founder.name}</h2><p className="section-copy">{site.founder.bio}</p><div className="tech-list">{site.founder.capabilities.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div><div className="grid two founder-stats">{site.stats.map((stat) => <div className="card" key={stat.label}><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</div></div></section>
      <section className="section"><div className="container grid three">{["Technology expertise", "Learning design", "Industry context", "Expert trainers", "Practical delivery", "Global vision"].map((item) => <div className="card" key={item}><h3>{item}</h3></div>)}</div></section>
    </>
  );
}
