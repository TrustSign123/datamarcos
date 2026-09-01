import Link from "next/link";
import { Logo } from "@/components/Header";
import { site } from "@/config/site";

const columns = [
  { title: "Solutions", links: [["Corporate Training", "/corporate-training"], ["Professional Learning", "/programs"], ["Custom Programs", "/corporate-training#solutions"], ["Trainer Network", "/become-a-trainer"]] },
  { title: "Programs", links: [["AI", "/programs?technology=AI"], ["Data", "/programs?technology=Data"], ["Cloud", "/programs?technology=Cloud"], ["DevOps", "/programs?technology=DevOps"], ["Software Engineering", "/programs?technology=Software"], ["Cybersecurity", "/programs?technology=Cybersecurity"]] },
  { title: "Resources", links: [["Articles", "/resources/articles"], ["Webinars", "/resources/webinars"], ["Case Studies", "/resources/case-studies"], ["Roadmaps", "/resources/roadmaps"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Become a Trainer", "/become-a-trainer"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Refund Policy", "/refund-policy"]] }
];

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-grid">
          <div>
            <Logo />
            <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7 }}>{site.tagline}</p>
            {socials.map(([network, url]) => (
              <a key={network} href={url} target="_blank" rel="noreferrer">
                {network}
              </a>
            ))}
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map(([label, href]) => (
                <Link key={href} href={href}>
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
