import type { Metadata } from "next";
import { Inter, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import WhatsappButton from "@/components/comman/Whatsapp";
import { Analytics } from '@vercel/analytics/next';
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import MockupEffects from "@/components/comman/MockupEffects";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas-neue" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P87H7LGT"; // Fallback to INTIGRA GTM tag ID

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Powder Coating in Rajkot, Gujarat | INTIGRA Coatings",
    template: "%s | INTIGRA Powder Coating Rajkot",
  },
  description:
    "INTIGRA Coatings offers the best powder coating services in Rajkot, Gujarat. Durable, corrosion-resistant, eco-friendly finishes for industrial and automotive applications.",
  keywords: [
    "INTIGRA powder coating",
    "powder coating",
    "metal finishing",
    "custom colors",
    "industrial coatings",
    "automotive coating",
    "INTIGRA",
    "powder coating in Rajkot",
    "powder coating Rajkot Gujarat",
    "best powder coating plant in Rajkot",
    "industrial powder coating Rajkot",
    "metal powder coating Rajkot",
    "powder coating services in Rajkot",
    "custom powder coating Rajkot",
    "powder coating manufacturer Rajkot",
    "automotive powder coating Rajkot",
    "INTIGRA powder coating Rajkot",
    "Intigra Coatings Rajkot",
    "powder coating near me Rajkot",
    "powder coating Gujarat",
    "industrial coating services Gujarat",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "INTIGRA Powder Coating Rajkot",
    title: "Best Powder Coating in Rajkot, Gujarat | INTIGRA Coatings",
    description:
      "Top-rated powder coating plant in Rajkot providing high-quality industrial, automotive, and custom metal coating solutions.",
    images: [
      {
        url: "https://www.intigracoatings.com/images/header_logo.png",
        width: 1200,
        height: 630,
        alt: "INTIGRA Powder Coating Plant in Rajkot",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Powder Coating in Rajkot | INTIGRA Coatings",
    description:
      "Looking for reliable powder coating in Rajkot? INTIGRA delivers durable, premium-finish industrial coatings.",
    images: "https://www.intigracoatings.com/images/header_logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <LocalBusinessJsonLd />
        {/* Google Tag Manager - Script Tag */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MockupEffects />
        <Analytics/>
        <div className="flex flex-col min-h-screen">{children}</div>
        <WhatsappButton />
        <ScrollToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
