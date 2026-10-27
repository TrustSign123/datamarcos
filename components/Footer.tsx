import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/Header";
import { site } from "@/config/site";
import { homePrograms } from "@/config/home";

// B2C positioning (27 Oct 2026): the four flagship courses lead; corporate training is kept but listed last.
const columns = [
  { title: "Courses", links: [...homePrograms.map((p) => [p.title, `/programs/${p.slug}`]), ["All courses", "/programs"]] },
  { title: "Resources", links: [["Guides", "/guides"], ["Interview Prep", "/resources/interview-prep"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Become a Trainer", "/become-a-trainer"]] },
  { title: "For Teams", links: [["Corporate Training", "/corporate-training"], ["Trainer Network", "/become-a-trainer"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["7-day Refund Policy", "/refund-policy"]] }
];

const footerTagline = "Live, mentor-led online courses in Forward Deployed AI, Generative & Agentic AI and Data Engineering for students and working professionals.";

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url));
  const labelFor = (network: string) => network === "whatsapp" ? "WhatsApp" : network[0].toUpperCase() + network.slice(1);

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-grid">
          <div>
            <Logo />
            <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7 }}>{footerTagline}</p>
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
