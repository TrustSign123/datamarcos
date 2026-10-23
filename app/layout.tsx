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
  alternates: { canonical: "/" },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name, type: "website", images: [{ url: "/og/datamarcos-home.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og/datamarcos-home.jpg"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: site.name,
    url: site.url,
    description: site.description
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
