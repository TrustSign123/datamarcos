import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/Header";
import { NewsletterForm } from "@/components/footer/NewsletterForm";
import { site } from "@/config/site";
import { homePrograms } from "@/config/home";
import { PLACEMENT_URL } from "@/config/placement";

// Footer redesign (Deepesh, 20 Nov 2026). Every link points at a route that exists in app/ (or the live CareerOS portal).
const columns: { title: string; links: [string, string][] }[] = [
  { title: "Explore Programs", links: [...homePrograms.map((p) => [p.title, `/programs/${p.slug}`] as [string, string]), ["View All Programs", "/programs"]] },
  { title: "Career Support", links: [["Placements & Outcomes", "/placements"], ["Placement Support (CareerOS)", PLACEMENT_URL], ["Interview Prep", "/resources/interview-prep"], ["Career Roadmaps", "/resources/roadmaps"], ["Free Guides", "/guides"], ["Resources", "/resources"]] },
  { title: "Company", links: [["About Us", "/about"], ["Contact Us", "/contact"], ["Become a Trainer", "/become-a-trainer"], ["7-day Refund Policy", "/refund-policy"]] },
  { title: "For Business", links: [["Corporate Training", "/corporate-training"], ["Trainer Network", "/become-a-trainer"], ["Partner With Us", "/contact"]] }
];

// LinkedIn and Instagram are the profiles already listed in the homepage Organization sameAs. YouTube / X only if set in env.
const socials = [
  { label: "LinkedIn", href: site.social.linkedin || "https://www.linkedin.com/company/90980108/", Icon: Linkedin },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
  { label: "Instagram", href: site.social.instagram || "https://www.instagram.com/datamarcos_official/", Icon: Instagram },
  { label: "X", href: site.social.x, Icon: Twitter }
].filter((s): s is { label: string; href: string; Icon: typeof Linkedin } => Boolean(s.href));

function FooterLink({ label, href }: { label: string; href: string }) {
  return href.startsWith("http")
    ? <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
    : <Link href={href}>{label}</Link>;
}

export function Footer() {
  const tel = site.phone.replace(/[^+\d]/g, "");
  return (
    <footer className="footer ds-footer dmf">
      <div className="dmf-wrap">
        <section className="dmf-band dmf-news" aria-labelledby="dmf-news-title">
          <div className="dmf-news-card">
            <div className="dmf-news-copy">
              <h2 id="dmf-news-title">Stay ahead in the AI era.</h2>
              <p>Get AI career insights, program updates and new cohort dates in your inbox.</p>
            </div>
            <NewsletterForm />
          </div>
        </section>

        <div className="dmf-band dmf-links">
          <div className="dmf-brand">
            <Logo />
            <p className="dmf-brand-h">Build the Future with AI.</p>
            <p className="dmf-brand-p">Live, mentor-led online programs in AI and Data Engineering for students and working professionals.</p>
            <ul className="dmf-social" aria-label="Datamarcos on social media">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Datamarcos on ${label}`}><Icon size={18} aria-hidden="true" /></a></li>
              ))}
            </ul>
          </div>
          {columns.map((column) => (
            <nav key={column.title} className="dmf-col" aria-label={column.title}>
              <h2 className="dmf-h">{column.title}</h2>
              <ul>{column.links.map(([label, href]) => <li key={label}><FooterLink label={label} href={href} /></li>)}</ul>
            </nav>
          ))}
        </div>

        <div className="dmf-band dmf-contact">
          <ul className="dmf-contact-list">
            <li><Mail size={16} aria-hidden="true" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Phone size={16} aria-hidden="true" /><a href={`tel:${tel}`}>{site.phone}</a></li>
            <li><MapPin size={16} aria-hidden="true" /><span>Noida, Uttar Pradesh, India</span></li>
          </ul>
          <ul className="dmf-legal">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
            <li><Link href="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

        <div className="dmf-band dmf-copy">
          <span>© 2026 Datamarcos. All rights reserved.</span>
          <span className="dmf-motto">LEARN · UPSKILL · TRANSFORM</span>
        </div>
      </div>
    </footer>
  );
}
