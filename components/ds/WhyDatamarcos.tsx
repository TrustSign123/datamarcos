import Link from "next/link";
import { BadgeCheck, Briefcase, Hammer, RotateCcw, UserRoundCheck } from "lucide-react";
import { PLACEMENT_URL } from "@/config/placement";
import { site } from "@/config/site";

/**
 * "Why Datamarcos": five differentiators, each restating a fact already published on our sites
 * (config/site.ts founder facts, program pages, CareerOS, refund policy). `fde` swaps in FDE-specific proof.
 */
export function WhyDatamarcos({ variant = "home" }: { variant?: "home" | "fde" }) {
  const fde = variant === "fde";
  const items = [
    { icon: UserRoundCheck, title: "Founder-led, live teaching", body: fde ? "Taught live by Deepesh Mishra, BITS Pilani alumnus and solution architect who has trained teams at 200+ organizations." : `Deepesh Mishra teaches live: BITS Pilani alumnus, 18+ years, has worked with ${site.founder.workedWith.slice(0, 3).join(", ")} and more.` },
    { icon: BadgeCheck, title: "Industry practitioners", body: "Learn from people who build and train for companies, not just teach slides." },
    { icon: Hammer, title: "Real projects", body: fde ? "Four client-style engagements with briefs, security reviews and a panel." : "Projects and capstones you deploy and can show in an interview." },
    { icon: Briefcase, title: "A clear placement journey", body: "Career track, verified capstone, then CareerOS for live openings and mock interviews.", href: PLACEMENT_URL },
    { icon: RotateCcw, title: "Low risk", body: "Free counselling call first, and a 7-day refund policy.", internal: "/refund-policy" }
  ];
  return (
    <section className="ds-section ds-why" aria-labelledby={`why-${variant}`}>
      <div className="ds-wrap">
        <header className="ds-head ds-head-center">
          <div>
            <p className="ds-eyebrow">Why Datamarcos</p>
            <h2 id={`why-${variant}`}>{fde ? <>Why learn FDE <em>with us.</em></> : <>Why learners <em>choose us.</em></>}</h2>
          </div>
        </header>
        <ul className="ds-why-grid">
          {items.map((item) => (
            <li key={item.title}>
              <item.icon size={22} aria-hidden="true" />
              <b>{item.title}</b>
              <span>{item.body}</span>
              {item.href && <a className="ds-link" href={item.href} target="_blank" rel="noopener noreferrer">CareerOS</a>}
              {item.internal && <Link className="ds-link" href={item.internal}>Refund policy</Link>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
