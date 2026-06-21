import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Palette, Zap, ArrowRight, Leaf } from "lucide-react";
import CustomLayout from "@/components/layout/layout";
import ProductGallery from "@/components/comman/ProductGallery";
import Testimonials from "@/components/comman/Testimonials";
import VideoSection from "@/components/comman/videoShowcase";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { HOME_BENEFITS_DATA } from "@/lib/staticData";

const lucideIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-orange-500" />,
  Leaf: <Leaf className="w-8 h-8 text-orange-500" />,
  Palette: <Palette className="w-8 h-8 text-orange-500" />,
  Zap: <Zap className="w-8 h-8 text-orange-500" />,
};

const homeBenefits = HOME_BENEFITS_DATA.map(item => ({
  ...item,
  icon: lucideIconMap[item.icon]
}));

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

/* --- Production-Grade Search Engine Optimization Metadata --- */
export const metadata: Metadata = {
  title: "Premium Industrial Powder Coating Services in Rajkot | INTIGRA",
  description:
    "Partner with INTIGRA, India's leading automated powder coating plant in Rajkot, Gujarat. Specializing in highly durable, eco-friendly surface finishing for automotive parts, industrial valves, castings, and architectural frameworks.",
  keywords: [
    "powder coating plant rajkot",
    "industrial surface finishing gujarat",
    "electrostatic powder coating india",
    "corrosion resistant metal coating",
    "automotive component powder coaters",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Automated Powder Coating Plant & Metal Finishing | INTIGRA",
    description:
      "Experience premium electrostatic powder finishes, exceptional impact tolerances, and eco-friendly surface preparation built to survive challenging global environments.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-home.png`,
        width: 1200,
        height: 630,
        alt: "INTIGRA Automated Powder Coating Plant Facilities",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTIGRA Powder Coating Solutions | Flawless Metal Finishes",
    description:
      "High-performance chemical and abrasion-resistant coating treatments for agricultural equipment, commercial hardware, and structural profiles.",
    images: [`${siteUrl}/images/og-home.png`],
  },
};

export default function PremiumHomePage() {
  return (
    <CustomLayout>
      <FAQJsonLd />
      {/* Video Showcase Section acting as Interactive High-Performance Hero asset */}
      <VideoSection />

      {/* FIXED: Core SEO Header Section establishing the target H1 keyword baseline */}
      <header className="bg-zinc-900 text-white py-12 md:py-16 text-center relative overflow-hidden border-b border-orange-600/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
            Automated <span className="text-orange-500">Powder Coating Plant</span> & Industrial Finishing
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            INTIGRA delivers premium electrostatic surface treatments and high-durability 
            protective finishes for engineering castings, automotive parts, and structural components in Rajkot, Gujarat.
          </p>
        </div>
      </header>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-orange-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Decorative background configurations for industrial styling */}
        <div className="absolute -top-16 -left-16 w-64 h-[250px] bg-orange-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-[250px] bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why Choose <span className="text-orange-600">INTIGRA Powder Coating Solutions</span>?
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Experience complete surface protection and flawless finishes with INTIGRA — delivering high-performance, eco-friendly powder coating for industrial, commercial, and architectural applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {homeBenefits.map((item, i) => (
              <Card
                key={i}
                className="text-center bg-white rounded-xl border-t-4 border-orange-500 px-6 py-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="mb-4 p-3 bg-orange-50 rounded-full">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Product Filtering Module */}
      <ProductGallery />

      {/* Services Portfolio */}
      <section className="py-16 bg-zinc-50 relative border-y border-zinc-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900 tracking-tight">
            Our <span className="text-orange-600">Powder Coating Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                img: "/images/plant/automatic-powder-coating-plant-1.jpg",
                title: "Custom Coating Solutions",
                desc: "Tailored powder coating for projects of any size or complexity with precise thickness finishes.",
              },
              {
                img: "/images/plant/automatic-powder-coating-plant-2.jpg",
                title: "Industrial & Architectural Batching",
                desc: "High-performance treatments specialized for casting parts, automotive profiles, structural valves, and metal components.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all bg-zinc-950 flex flex-col"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={s.img}
                    alt={`${s.title} production capabilities at INTIGRA`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover brightness-90 group-hover:brightness-75 transition-all duration-500"
                  />
                </div>
                {/* Visual Depth Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-left text-white z-10">
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-200 mb-4 leading-relaxed max-w-md">{s.desc}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Review Feed */}
      <Testimonials />

      {/* Industrial Conversion CTA Segment */}
      <section className="relative py-16 bg-orange-50 overflow-hidden border-t border-orange-100">
        <div className="absolute top-10 left-20 w-12 h-12 bg-orange-300 rounded-full opacity-20 blur-xl animate-ping"></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 bg-yellow-300 rounded-full opacity-15 blur-xl animate-ping"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="bg-gradient-to-r from-orange-100 via-amber-100 to-zinc-100 p-10 md:p-14 rounded-3xl shadow-xl text-gray-900 max-w-4xl mx-auto border border-orange-200">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 text-orange-800 tracking-tight">
              Get in Touch for Quotes, Samples & Project Support
            </h2>

            <p className="text-sm sm:text-base mb-8 leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Ready to elevate your next production run? Partner with <span className="font-bold text-orange-700">INTIGRA Coatings</span> — your trusted structural partner in <strong>durable, protective, and eco-friendly powder coating</strong> solutions. Request a free target estimation, analyze sample profiles, or consult our specialized engineers.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 text-white hover:bg-orange-700 font-semibold shadow-md transition-transform hover:scale-105 rounded-md text-sm px-6"
              >
                <Link href="/contact-us">Request Free Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-700 hover:bg-orange-100/50 font-semibold transition-transform hover:scale-105 rounded-md text-sm px-6"
              >
                <Link href="/products">Explore Our Finishes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}