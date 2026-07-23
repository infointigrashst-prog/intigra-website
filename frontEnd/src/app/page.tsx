import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CustomLayout from "@/components/layout/layout";
import ProductGallery from "@/components/comman/ProductGallery";
import Testimonials from "@/components/comman/Testimonials";
import VideoSection from "@/components/comman/videoShowcase";
import { FAQJsonLd } from "@/components/seo/json-ld";
import IndustriesSection from "@/components/comman/IndustriesSection";
import ProcessSection from "@/components/comman/ProcessSection";
import WhyIntigraSection from "@/components/comman/WhyIntigraSection";
import ContactCTASection from "@/components/comman/ContactCTASection";
import StatsBar from "@/components/home/StatsBar";
import BubbleBackground from "@/components/comman/BubbleBackground";
import AboutBenefits from "@/components/home/AboutBenefits";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.intigracoatings.com";

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

      {/* ===== 1. MOBILE HERO SECTION (Visible on mobile only) ===== */}
      <section id="hero-mobile" className="block md:hidden relative flex flex-col overflow-hidden bg-zinc-950 h-fit pt-[80px]">
        <div className="relative w-full aspect-video z-20">
          <VideoSection />
        </div>
      </section>

      {/* ===== 2. DESKTOP HERO SECTION (Visible on desktop/big screens only) ===== */}
      <section id="hero-desktop" className="hidden md:flex relative flex-col overflow-hidden bg-zinc-950 pt-[92px] w-full aspect-video h-auto">
        <div className="absolute inset-0 z-20">
          <VideoSection />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <StatsBar />

      {/* ===== ABOUT STRIP ===== */}
      <section className="py-10 relative overflow-hidden border-b border-white/5" style={{ background: "#0d0d15" }}>
        {/* Reusable Background bubbles canvas */}
        <BubbleBackground opacity={0.6} theme="dark" />
        {/* Subtle glow orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-orange-500 opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500 opacity-[0.02] blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="reveal">
              <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">
                About INTIGRA
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-white tracking-[2px] uppercase leading-tight mb-6">
                Precision Coating.{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  Engineered
                </span>{" "}
                Excellence.
              </h1>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                INTIGRA is Rajkot&apos;s premier automated powder coating plant, built around a fully conveyor-driven production line that delivers exceptional consistency and throughput. Our advanced automated facility handles everything from precision automotive parts to large architectural steel components.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Backed by a rigorous 9-stage phosphating pre-treatment system, precision electrostatic application, and thermally-optimised curing ovens — every component that leaves our plant carries a finish designed to last decades.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-orange-500 font-ui text-sm tracking-[2px] uppercase font-semibold border-b border-orange-500/30 pb-1 hover:border-orange-500 transition-all duration-300"
              >
                Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Plant Image */}
            <div className="reveal">
              <div className="relative group overflow-hidden border border-white/5 shadow-2xl">
                <Image
                  src="/images/plant/plant_4.jpeg"
                  alt="INTIGRA automated powder coating conveyor plant in Rajkot, Gujarat"
                  width={600}
                  height={420}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 px-5 py-3">
                  <div className="font-ui text-[11px] text-orange-500 tracking-[3px] uppercase font-bold">Rajkot, Gujarat</div>
                </div>
              </div>
            </div>
          </div>

          {/* About benefits mobile slider & desktop grid wrapper */}
          <AboutBenefits />
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <IndustriesSection />

      {/* ===== PRODUCTS GALLERY ===== */}
      <section id="products">
        <ProductGallery />
      </section>

      {/* ===== WHY INTIGRA ===== */}
      <WhyIntigraSection />

      {/* ===== PROCESS ===== */}
      <ProcessSection />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CONTACT CTA ===== */}
      <ContactCTASection />
    </CustomLayout>
  );
}