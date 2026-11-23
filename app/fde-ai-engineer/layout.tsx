import { Darker_Grotesque, Funnel_Sans } from "next/font/google";

const funnel = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-funnel",
  display: "swap"
});

const darker = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-darker",
  display: "swap"
});

/** Standalone chrome for the Meta-ads landing page: Funnel Sans + Darker Grotesque, not the site DS fonts. */
export default function FdeAdLayout({ children }: { children: React.ReactNode }) {
  return <div className={`fde-ad-root ${funnel.variable} ${darker.variable} ${funnel.className}`}>{children}</div>;
}
