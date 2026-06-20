import React from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://intigracoatings.vercel.app";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#local-business`,
    "name": "INTIGRA Coatings",
    "alternateName": [
      "INTIGRA Powder Coating",
      "Shree Hari Yogi Surface Technology",
      "INTIGRA Coatings Rajkot"
    ],
    "description": "INTIGRA Coatings offers the best powder coating services in Rajkot, Gujarat. Durable, corrosion-resistant, eco-friendly finishes for industrial and automotive applications.",
    "image": `${siteUrl}/images/header_logo.png`,
    "url": siteUrl,
    "telephone": "+918128228778",
    "email": "info.intigra.shst@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 2, Veraval Shapar",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360024",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.1691199,
      "longitude": 70.8048364
    },
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.964458162869!2d70.80483645311745!3d22.1691199272777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958356a0e8a57ef%3A0x9524add0ba5f6cb6!2sIntigra%20Coatings!5e0!3m2!1sen!2sin!4v1765630632650!5m2!1sen!2sin",
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
    "sameAs": [
      "https://www.facebook.com/share/1JGgtxVfMZ/",
      "https://www.instagram.com/intigra_coatings?igsh=dmw4OHk2dThvcTB5"
    ]
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
    "name": "INTIGRA Powder Coating Services",
    "description": "High-performance industrial, automotive, and architectural powder coating services in Rajkot, Gujarat.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Surface Preparation & Cleaning",
          "description": "Ensuring optimum adhesion and rust prevention through precise sandblasting and multi-stage chemical pre-treatment cleaning methods.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#local-business`
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Gujarat"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Electrostatic Powder Application",
          "description": "Uniform coating finish using electrostatic spray technology in advanced booths for consistent film thickness and coverage.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#local-business`
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Gujarat"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Thermal Curing Process",
          "description": "High-temperature curing in automatic temperature-controlled ovens to bond powder to the surface for long-lasting, chip-resistant finishes.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#local-business`
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Gujarat"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Color & Texture Finishing",
          "description": "Bespoke RAL and Pantone color matching in gloss, matt, metallic, and hammertone textured finishes.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#local-business`
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Gujarat"
          }
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

export function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes INTIGRA Coatings the best powder coating choice in Rajkot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "INTIGRA Coatings operates an advanced, automated powder coating plant in Rajkot, Gujarat. We provide durable, corrosion-resistant, and eco-friendly finishes for automotive, industrial, and architectural parts with exceptional precision."
        }
      },
      {
        "@type": "Question",
        "name": "What is the exact location of the INTIGRA coating facility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The INTIGRA Coatings facility is located at Plot 2, Veraval Shapar, Rajkot, Gujarat, 360024, India. This location provides convenient logistical access for engineering and manufacturing hubs."
        }
      },
      {
        "@type": "Question",
        "name": "How can I request a quote or process samples at INTIGRA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a free quote or schedule sample processing by contacting our team via phone at +91 81282 28778, emailing info.intigra.shst@gmail.com, or submitting the contact form on our website."
        }
      },
      {
        "@type": "Question",
        "name": "What types of materials and products does INTIGRA coat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "INTIGRA coats a wide range of industrial valves, engineering castings, flanges, boiler parts, automotive components, commercial hardware, and architectural metal structures."
        }
      },
      {
        "@type": "Question",
        "name": "What finishes and colors are available at INTIGRA?",
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
