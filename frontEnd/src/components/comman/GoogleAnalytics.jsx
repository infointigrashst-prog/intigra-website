import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Tag Manager (GTM) Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLBB5XGP');
        `}
      </Script>

      {/* Google Analytics 4 (GA4) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MNNFTMG138" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MNNFTMG138', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Optional: Google Ads Conversion (Uncomment if needed)
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-XXXXXXXXX');
        `}
      </Script>
      */}

      {/* GTM NoScript Fallback for <body> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLBB5XGP"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export default GoogleAnalytics;
