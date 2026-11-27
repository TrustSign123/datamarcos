import type { Metadata } from "next";
import "./globals.css";
// Blue/white redesign (17 Nov 2026, Deepesh's choice): one light theme for every page.
// theme-light.generated.css = site-wide light + blue overrides of globals.css (scripts/gen-bluewhite-theme.py);
// ds.css = the Datamarcos design system (tokens, type, buttons, cards, header, footer, homepage, FDE page). Loads last.
import "./theme-light.generated.css";
import "./ds.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HideOnAdLanding } from "@/components/ad/HideOnAdLanding";
import { WhatsAppCTA } from "@/components/Integrations";
import { BlackFridayPopup } from "@/components/BlackFridayPopup";
import { AnalyticsTags } from "@/components/AnalyticsTags";
import { AnalyticsListeners } from "@/components/AnalyticsListeners";
import { LeadModal } from "@/components/lead/LeadModal";
import { site } from "@/config/site";
import { getMarket } from "@/lib/geo-server";
import { MarketProvider } from "@/components/MarketProvider";

// Market is read from the x-dm-market request header, so this layout (and the
// pages under it) must not be statically prerendered as a single India HTML.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.url),
  // No site-wide canonical here: each page sets its own self-referencing canonical (lib/seo.ts).
  // A layout-level canonical is inherited by every page that lacks one and pointed them all at "/".
  openGraph: { title: site.title, description: site.description, siteName: site.name, type: "website", images: [{ url: "/og/datamarcos-home.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og/datamarcos-home.jpg"] },
  // Google Search Console (URL-prefix property, HTML tag method). Renders <meta name="google-site-verification"> on every page.
  verification: { google: "qCP91hcqOuO9xyGKStYqX5uEO_m7KVuapv6EYGCdhQg" }
};

const fontBody = Inter({ subsets: ["latin"], variable: "--ds-font-body", display: "swap" });
const fontDisplay = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--ds-font-display", display: "swap" });

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const market = await getMarket();
  return (
    <html lang="en" data-theme="light" className={`${fontBody.variable} ${fontDisplay.variable}`} suppressHydrationWarning>
      <body>
        <MarketProvider market={market}>
          <AnalyticsTags />
          <AnalyticsListeners />
          <HideOnAdLanding><Header /></HideOnAdLanding>
          <main>{children}</main>
          <HideOnAdLanding><Footer /></HideOnAdLanding>
          <WhatsAppCTA />
          <BlackFridayPopup />
          <LeadModal />
        </MarketProvider>
      </body>
    </html>
  );
}
