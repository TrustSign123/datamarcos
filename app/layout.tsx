import type { Metadata } from "next";
import "./globals.css";
// Light theme (31 Oct 2026): overrides apply only under <html data-theme="light">; dark is the default. See lib/theme.ts.
import "./theme-light.generated.css";
import "./theme-light.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppCTA } from "@/components/Integrations";
import { AnalyticsTags } from "@/components/AnalyticsTags";
import { AnalyticsListeners } from "@/components/AnalyticsListeners";
import { LeadModal } from "@/components/lead/LeadModal";
import { site } from "@/config/site";
import { themeBootScript } from "@/lib/theme";
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

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const market = await getMarket();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies a saved light-theme choice before the first paint (no flash). Dark is the default; OS setting ignored. */}
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <MarketProvider market={market}>
          <AnalyticsTags />
          <AnalyticsListeners />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppCTA />
          <LeadModal />
        </MarketProvider>
      </body>
    </html>
  );
}
