import React from "react";
import { COMPANY_DETAILS, SERVICES_DATA } from "@/lib/staticData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_DETAILS.siteUrl;

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#local-business`,
    "name": COMPANY_DETAILS.name,
    "alternateName": COMPANY_DETAILS.alternateNames,
    "description": COMPANY_DETAILS.description,
    "image": `${siteUrl}${COMPANY_DETAILS.logoUrl}`,
    "url": siteUrl,
    "telephone": COMPANY_DETAILS.telephone,
    "email": COMPANY_DETAILS.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_DETAILS.address.streetAddress,
      "addressLocality": COMPANY_DETAILS.address.addressLocality,
      "addressRegion": COMPANY_DETAILS.address.addressRegion,
      "postalCode": COMPANY_DETAILS.address.postalCode,
      "addressCountry": COMPANY_DETAILS.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": COMPANY_DETAILS.geo.latitude,
      "longitude": COMPANY_DETAILS.geo.longitude
    },
    "hasMap": COMPANY_DETAILS.mapEmbedUrl,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": COMPANY_DETAILS.sameAs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServicesJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${COMPANY_DETAILS.name} Powder Coating Services`,
    "description": `High-performance industrial, automotive, and architectural powder coating services in ${COMPANY_DETAILS.address.addressLocality}, ${COMPANY_DETAILS.address.addressRegion}.`,
    "itemListElement": SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#local-business`
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": COMPANY_DETAILS.address.addressRegion
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What makes ${COMPANY_DETAILS.name} the best powder coating choice in ${COMPANY_DETAILS.address.addressLocality}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${COMPANY_DETAILS.name} operates an advanced, automated powder coating plant in ${COMPANY_DETAILS.address.addressLocality}, ${COMPANY_DETAILS.address.addressRegion}. We provide durable, corrosion-resistant, and eco-friendly finishes for automotive, industrial, and architectural parts with exceptional precision.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the exact location of the ${COMPANY_DETAILS.name} coating facility?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The ${COMPANY_DETAILS.name} coating facility is located at ${COMPANY_DETAILS.address.formatted}. This location provides convenient logistical access for engineering and manufacturing hubs.`
        }
      },
      {
        "@type": "Question",
        "name": `How can I request a quote or process samples at ${COMPANY_DETAILS.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can request a free quote or schedule sample processing by contacting our team via phone at ${COMPANY_DETAILS.telephoneFormatted}, emailing ${COMPANY_DETAILS.email}, or submitting the contact form on our website.`
        }
      },
      {
        "@type": "Question",
        "name": `What types of materials and products does ${COMPANY_DETAILS.name} coat?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${COMPANY_DETAILS.name} coats a wide range of industrial valves, engineering castings, flanges, boiler parts, automotive components, commercial hardware, and architectural metal structures.`
        }
      },
      {
        "@type": "Question",
        "name": `What finishes and colors are available at ${COMPANY_DETAILS.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a vast palette of custom colors and textures, ranging from smooth matte to high-gloss metallic finishes, engineered for superior impact and weather tolerance."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
