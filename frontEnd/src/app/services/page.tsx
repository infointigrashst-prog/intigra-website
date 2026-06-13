import Testimonials from "@/components/comman/Testimonials";
import CustomLayout from "@/components/layout/layout";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Layers,
  SprayCan,
  CheckSquare,
  Settings,
  Bike,
  Fence,
  Aperture,
  PaintBucket,
  ShieldCheck,
  Palette,
  CheckCircle,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Industrial Powder Coating Services | INTIGRA Rajkot",
  description:
    "Discover INTIGRA's high-performance powder coating solutions in Gujarat. Precision electrostatic application, meticulous 7-tank surface preparation, and custom texturing for automotive, industrial machinery, and architectural metal.",
  keywords: [
    "industrial powder coating services",
    "surface preparation sandblasting rajkot",
    "electrostatic powder application",
    "epoxy polyester hybrid coating",
    "metal finishing plant gujarat",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Expert Powder Coating & Surface Finishing Services | INTIGRA",
    description:
      "From high-durability epoxy formulations to weather-resistant exterior polyesters, discover INTIGRA's automated coating capabilities.",
    url: `${siteUrl}/services`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-services.png`,
        width: 1200,
        height: 630,
        alt: "Overview of INTIGRA Powder Coating Production Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTIGRA Powder Coating Services: Quality & Engineering Precision",
    description:
      "Specialized protective coating options engineered for high-heat tolerances, chemical resistance, and heavy-duty outdoor exposure.",
    images: [`${siteUrl}/images/og-services.png`],
  },
};

const servicesList = [
  {
    icon: <SprayCan className="h-10 w-10 text-orange-600" />,
    title: "Surface Preparation & Cleaning",
    description:
      "Ensuring optimum adhesion and rust prevention through precise sandblasting and chemical cleaning methods.",
    details: [
      "Abrasive blasting for rust/paint removal",
      "Multi-stage chemical pre-treatment",
      "Clean, profile-ready surface preparation",
    ],
    image: "/images/plant/automatic-powder-coating-plant-2.jpg",
    dataAiHint: "surface preparation and cleaning",
  },
  {
    icon: <Layers className="h-10 w-10 text-orange-600" />,
    title: "Powder Application",
    description:
      "Uniform finish using electrostatic spray technology for precise, durable coating layers.",
    details: [
      "Advanced electrostatic application booths",
      "Consistent film thickness and coverage",
      "Controlled environment for quality output",
    ],
    image: "/images/plant/automatic-powder-coating-plant-1.jpg",
    dataAiHint: "powder coating application",
  },
  {
    icon: <CheckSquare className="h-10 w-10 text-orange-600" />,
    title: "Curing Process",
    description:
      "High-temperature curing to bond powder to the surface for long-lasting performance and strength.",
    details: [
      "Automatic temperature-controlled ovens",
      "Uniform curing for all components",
      "Ensures strong, chip-resistant finish",
    ],
    image: "/images/plant/about.jpeg",
    dataAiHint: "curing process coating strength",
  },
  {
    icon: <PaintBucket className="h-10 w-10 text-orange-600" />,
    title: "Color & Texture Finishing",
    description:
      "Choose from matt, gloss, semi-gloss, metallic, or custom finishes — tailored to your project aesthetics.",
    details: [
      "RAL, Pantone & custom colors",
      "Gloss, matt, texture & metallic finishes",
      "Special effect & bespoke options",
    ],
    image: "/images/plant/automatic-powder-coating-plant-1.jpg",
    dataAiHint: "color texture and finish options",
  },
];

const applications = [
  { icon: <Bike className="h-8 w-8 text-accent" />, name: "Automotive Parts" },
  {
    icon: <Settings className="h-8 w-8 text-accent" />,
    name: "Industrial Equipment",
  },
  {
    icon: <Fence className="h-8 w-8 text-accent" />,
    name: "Architectural Elements",
  },
  {
    icon: <Aperture className="h-8 w-8 text-accent" />,
    name: "Consumer Products",
  },
];

export default function ServicesPage() {
  return (
    <CustomLayout>
      <div>
        <PageHeader
          title="Our Powder Coating Services"
          description="INTIGRA offers a comprehensive range of powder coating services designed to meet diverse needs with precision and quality."
        />

        <section className="py-16 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
          {/* Decorative Soft Backgrounds */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="container max-w-screen-xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Industrial Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {servicesList.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] flex flex-col border-t-4 border-orange-500 rounded-2xl bg-white"
                  data-ai-hint={service.dataAiHint}
                >
                  <div className="relative w-full h-60 md:h-56 bg-zinc-100">
                    <Image
                      src={service.image}
                      alt={`${service.title} line setup by INTIGRA Coatings`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>

                  <CardHeader className="px-6 pt-6">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 mt-auto">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckSquare className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-50 via-white to-yellow-50 border-y border-zinc-100">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 text-center mb-4">
              Types of Coatings We Offer
            </h2>
            <p className="text-zinc-600 text-center max-w-xl mx-auto mb-12 text-sm">
              Tailored powder formulations cross-checked for precise mil thickness, environmental endurance, and structural integrity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Epoxy Coatings",
                  desc: "Provides exceptional chemical resistance and durability for indoor components. Excellent adhesion and surface hardness built for industrial machinery and heavy-duty tools.",
                },
                {
                  title: "Polyester Finishes",
                  desc: "Perfect for outdoor applications with high UV resistance and color retention. Maintains an ultra-durable finish on architectural frameworks and exterior panels.",
                },
                {
                  title: "Hybrid (Epoxy-Polyester)",
                  desc: "Combines the structural toughness of epoxy with the overbake color stability of polyester. A flexible choice for household appliances and general indoor enclosures.",
                },
                {
                  title: "Hammertone & Textures",
                  desc: "Creates a decorative textured profile that effectively masks underlying casting flaws. Offers a sophisticated, rugged look for electrical boxes and custom enclosures.",
                },
                {
                  title: "High-Heat Formulations",
                  desc: "Specifically engineered to withstand extreme thermal fluctuations without peeling. Ideal for exhaust system configurations, manifolds, and processing equipment.",
                },
              ].map((coating) => (
                <Card
                  key={coating.title}
                  className="bg-white shadow-md border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-zinc-900">
                      {coating.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      {coating.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-50">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
              Common Applications
            </h2>
            <p className="text-md text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Powder coating is a versatile, high-endurance solution suitable for major processing sectors:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {applications.map((app) => (
                <div
                  key={app.name}
                  className="flex flex-col items-center text-center p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-xl border-t-4 border-orange-500"
                >
                  <div className="mb-4">{app.icon}</div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {app.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-zinc-50 border-t border-zinc-200">
          <div className="container max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-orange-600">INTIGRA Coatings</span>?
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Partner with an eco-conscious, high-capacity batch facility engineered to deliver elite-tier impact resistance, zero VOC emissions, and premium uniformity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
                  title: "Corrosion & Weather Shielding",
                  desc: "Engineered layers shield substrates against moisture crystallization and rust creepage across highly humid settings.",
                },
                {
                  icon: <Zap className="w-8 h-8 text-orange-500" />,
                  title: "Extended Component Lifespan",
                  desc: "Advanced therapeutic thermal cross-linking ensures a highly flexible finish that minimizes impact splitting.",
                },
                {
                  icon: <Palette className="w-8 h-8 text-orange-500" />,
                  title: "Flawless Coating Uniformity",
                  desc: "Maintains tightly managed powder dispersion patterns preventing unwanted corner-builds or localized runs.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
                  title: "Eco-Conscious Low-Waste Line",
                  desc: "Sustainable, solvent-free oversight allowing complete reclamation and reduction of operational carbon footprints.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="text-center rounded-xl border-t-4 border-orange-500 px-6 py-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-md font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </CustomLayout>
  );
}