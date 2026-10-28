import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

export function AnalyticsTags() {
  // GA4 loads on production builds only. Vercel preview/development deployments are skipped so test traffic stays
  // out of the property. Local `next build && next start` has no VERCEL_ENV, so it loads (for verification).
  const vercelEnv = process.env.VERCEL_ENV;
  const ga = vercelEnv === "preview" || vercelEnv === "development" ? undefined : GA_ID;
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const meta = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <>
      {gtm && <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window,document,'script','dataLayer','${gtm}');`}</Script>}
      {/* Inline stub first: defines window.gtag and queues js/config on dataLayer, so events fired before gtag.js
          arrives (generate_lead, whatsapp_click, ...) are kept and sent once it loads. */}
      {ga && <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}</Script>}
      {/* gtag.js (~180 KB) loads after window load, at browser idle. "afterInteractive" made Next add
          <link rel="preload" as="script"> for it in <head>, which competed with the CSS/JS needed for first paint
          and pushed lab LCP from ~2.3 s to 4.4-5.5 s on mobile. lazyOnload adds no preload. */}
      {ga && <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="lazyOnload" />}
      {meta && <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];}(window,document,'script');fbq('init','${meta}');fbq('track','PageView');`}</Script>}
      {linkedin && <Script id="linkedin-insight" strategy="afterInteractive">{`window._linkedin_partner_id='${linkedin}';window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}</Script>}
    </>
  );
}
