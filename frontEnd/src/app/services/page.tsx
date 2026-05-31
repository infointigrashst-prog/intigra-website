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
  title: "Powder Coating Services by INTIGRA",
  description:
    "Explore INTIGRA's comprehensive powder coating services, including precision application, custom color matching, specialty coatings, and thorough surface preparation for diverse applications.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Expert Powder Coating Services | INTIGRA",
    description:
      "From custom colors to industrial-grade protection, discover INTIGRA's full range of powder coating services.",
    url: "/services",
    images: [
      {
        url: "https://placehold.co/1200x630.png", // Placeholder, replace with actual URL
        width: 1200,
        height: 630,
        alt: "Overview of INTIGRA Powder Coating Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    title: "INTIGRA Powder Coating Services: Quality & Precision",
    description:
      "Learn about our specialized powder coating solutions for automotive, industrial, and architectural needs.",
    images: ["https://placehold.co/1200x630.png"], // Placeholder, replace with actual URL
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

        <section className="py-8 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
          {/* Decorative Soft Backgrounds */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="container max-w-screen-xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {servicesList.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] flex flex-col border-t-4 border-orange-500 rounded-2xl bg-white"
                  data-ai-hint={service.dataAiHint}
                >
                  <div className="relative w-full h-60 md:h-56">
                    <Image
                      src={service.image}
                      alt={`${service.title} by INTIGRA Coatings`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={service.dataAiHint}
                    />
                  </div>

                  <CardHeader className="px-6 pt-4">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        <h2>{service.title}</h2>
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-3 flex flex-col flex-grow">
                    <h3 className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckSquare className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-gradient-to-r from-orange-50 via-white to-yellow-50">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">
              Types of Coatings We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Epoxy",
                  desc: "Provides exceptional chemical resistance and durability for indoor parts. Excellent adhesion and hardness for industrial machinery and heavy-duty tools.",
                },
                {
                  title: "Polyester",
                  desc: "Perfect for outdoor applications with high UV resistance and color retention. Maintains a long-lasting finish on architectural elements and garden furniture.",
                },
                {
                  title: "Hybrid (Epoxy-Polyester)",
                  desc: "Combines the toughness of epoxy with the overbake resistance of polyester. A versatile choice for household appliances and general indoor metal products.",
                },
                {
                  title: "Hammertone",
                  desc: "Creates a unique decorative textured finish that effectively hides surface flaws. Offers a sophisticated, rugged look for electrical boxes and metal cabinets.",
                },
                {
                  title: "Heat-Resistant Developed",
                  desc: "Specifically engineered to withstand extreme temperatures without peeling or fading. Ideal for exhaust systems, grills, and high-heat industrial equipment.",
                },
              ].map((coating) => (
                <Card
                  key={coating.title}
                  className="bg-white shadow-lg border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-xl"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary">
                      {coating.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {coating.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-gray-50">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-900 text-center mb-2">
              Common Applications
            </h2>
            <h3 className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
              Powder coating is a versatile solution suitable for many
              industries and products:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {applications.map((app) => (
                <div
                  key={app.name}
                  className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 rounded-xl border-t-4 border-orange-500"
                >
                  {app.icon}
                  <p className="mt-4 text-md font-medium text-primary">
                    {app.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />

        <section className="py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100">
          <div className="container max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-gray-900 mb-6">
              Why Choose{" "}
              <span className="text-orange-600">Intigra Coatings</span>?
            </h2>
            <h3 className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
              Choose <strong>Intigra Coatings</strong> for premium,
              eco-friendly, and high-performance powder coating solutions that
              deliver durability, protection, and style — built to last.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
                  title: "Corrosion & Weather Protection",
                  desc: "Our coatings shield against rust, moisture, and UV damage — ideal for outdoor and industrial environments.",
                },
                {
                  icon: <Zap className="w-10 h-10 text-orange-500" />,
                  title: "Long Life Coating Performance",
                  desc: "Advanced formulations ensure a long-lasting, chip-resistant surface that maintains color and strength.",
                },
                {
                  icon: <Palette className="w-10 h-10 text-orange-500" />,
                  title: "Smooth & Consistent Finish",
                  desc: "Achieve flawless texture and uniform coverage with our precision-controlled application process.",
                },
                {
                  icon: <CheckCircle className="w-10 h-10 text-orange-500" />,
                  title: "Eco-Friendly & Low-Waste Process",
                  desc: "Sustainable, solvent-free coating technology minimizing waste and environmental impact.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="text-center rounded-xl border-t-4 border-orange-500
                 px-6 py-6 bg-white
                 shadow-md hover:shadow-xl
                 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed">
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
