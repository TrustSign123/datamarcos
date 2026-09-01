import Script from "next/script";

export function AnalyticsTags() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const meta = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <>
      {gtm && <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window,document,'script','dataLayer','${gtm}');`}</Script>}
      {ga && <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />}
      {ga && <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}</Script>}
      {meta && <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];}(window,document,'script');fbq('init','${meta}');fbq('track','PageView');`}</Script>}
      {linkedin && <Script id="linkedin-insight" strategy="afterInteractive">{`window._linkedin_partner_id='${linkedin}';window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}</Script>}
    </>
  );
}
