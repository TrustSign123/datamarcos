import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppCTA } from "@/components/Integrations";
import { AnalyticsTags } from "@/components/AnalyticsTags";
import { LeadModal } from "@/components/lead/LeadModal";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.url),
  // No site-wide canonical here: each page sets its own self-referencing canonical (lib/seo.ts).
  // A layout-level canonical is inherited by every page that lacks one and pointed them all at "/".
  openGraph: { title: site.title, description: site.description, siteName: site.name, type: "website", images: [{ url: "/og/datamarcos-home.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og/datamarcos-home.jpg"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsTags />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
        <LeadModal />
      </body>
    </html>
  );
}
