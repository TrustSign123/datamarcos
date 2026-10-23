import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/Header";
import { site } from "@/config/site";

const columns = [
  { title: "Solutions", links: [["Corporate Training", "/corporate-training"], ["Professional Learning", "/programs"], ["Custom Programs", "/corporate-training#solutions"], ["Trainer Network", "/become-a-trainer"]] },
  { title: "Programs", links: [["GenAI & Agentic AI Engineer", "/programs/genai-agentic-ai-engineer"], ["Advanced Data Engineering + GenAI", "/programs/advance-data-engineering-genai"], ["Applied Agentic AI", "/programs/applied-agentic-ai-certification"], ["Forward Deployed AI Engineer", "/programs/forward-deployed-ai-engineer"], ["All programs", "/programs"]] },
  { title: "Resources", links: [["Interview Prep", "/resources/interview-prep"], ["Articles", "/resources/articles"], ["Webinars", "/resources/webinars"], ["Case Studies", "/resources/case-studies"], ["Roadmaps", "/resources/roadmaps"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Become a Trainer", "/become-a-trainer"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Payment & Refund", "/payment-refund-policy"]] }
];

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url));
  const labelFor = (network: string) => network === "whatsapp" ? "WhatsApp" : network[0].toUpperCase() + network.slice(1);

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-grid">
          <div>
            <Logo />
            <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7 }}>{site.tagline}</p>
            <div className="footer-contact">
              <strong>Get in touch</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.location}</span>
            </div>
            {socials.map(([network, url]) => (
              <a key={network} href={url} target="_blank" rel="noreferrer">
                {labelFor(network)}
              </a>
            ))}
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="footer-heading">{column.title}</h2>
              {column.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {column.title === "Legal" && (label === "Privacy" ? <ShieldCheck size={15} aria-hidden="true" /> : <FileText size={15} aria-hidden="true" />)}
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">© 2026 Datamarcos. All rights reserved.</div>
      </div>
    </footer>
  );
}
