"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import BubbleBackground from "@/components/comman/BubbleBackground";

// Import Swiper styles if needed locally, but they are already imported globally in the app layout.

const INDUSTRIES = [
  {
    slug: "automotive",
    icon: "🚗",
    title: "Automotive",
    desc: "Chassis parts, wheel rims, engine covers, bumpers and structural automotive components demanding extreme durability and finish.",
    accent: "#ff6b2b",
  },
  {
    slug: "architecture",
    icon: "🏗️",
    title: "Architecture",
    desc: "Curtain walls, aluminium extrusions, window profiles, structural steelwork and façade cladding with premium weather resistance.",
    accent: "#00c8ff",
  },
  {
    slug: "furniture",
    icon: "🪑",
    title: "Furniture",
    desc: "Office furniture frames, garden sets, shelving systems and decorative ironwork with vibrant, chip-resistant finishes.",
    accent: "#00d68f",
  },
  {
    slug: "industrial-machinery",
    icon: "⚙️",
    title: "Industrial Machinery",
    desc: "Valves, flanges, compressor housings, pipe fittings and heavy equipment requiring chemical and abrasion resistance.",
    accent: "#f5c842",
  },
  {
    slug: "home-appliances",
    icon: "🏠",
    title: "Home Appliances",
    desc: "Refrigerator panels, washing machine cabinets, HVAC units and white goods with seamless, long-lasting factory finishes.",
    accent: "#8b5cf6",
  },
  {
    slug: "general-engineering",
    icon: "🔩",
    title: "General Engineering",
    desc: "Custom brackets, fasteners, conveyor parts and OEM components with tight tolerance coating for high-volume production.",
    accent: "#ff6b2b",
  },
];

export default function IndustriesSection() {
  const IndustryCard = ({ industry }: { industry: typeof INDUSTRIES[0] }) => (
    <Link
      href={`/industries/${industry.slug}`}
      className="industry-card group relative p-8 border border-slate-200/80 bg-white hover:border-orange-500/40 hover:-translate-y-2 shadow-[0_12px_30px_rgba(30,41,59,0.04)] hover:shadow-[0_20px_45px_rgba(30,41,59,0.08)] transition-all duration-500 rounded-3xl cursor-pointer overflow-hidden block text-left h-full"
    >
      {/* Corner Brackets for visual differentiation */}
      <div 
        className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-slate-300 transition-colors duration-300 z-10" 
        style={{ ["--tw-border-opacity" as any]: "1" } as React.CSSProperties}
      />
      <div 
        className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-slate-300 transition-colors duration-300 z-10" 
        style={{ ["--tw-border-opacity" as any]: "1" } as React.CSSProperties}
      />

      <div className="relative z-10">
        <div 
          className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-500 group-hover:scale-110"
        >
          {industry.icon}
        </div>
        <h3
          className="font-display text-2xl text-[#1E3A8A] group-hover:text-orange-500 tracking-[1.0px] uppercase mb-3 transition-colors duration-300"
        >
          {industry.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {industry.desc}
        </p>

        {/* Link arrow */}
        <div
          className="mt-6 flex items-center gap-2 text-xs tracking-[2px] uppercase font-bold transition-all duration-300 group-hover:translate-x-2"
          style={{ color: industry.accent }}
        >
          <span>Explore Verticals</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );

  return (
    <section
      id="industries"
      className="py-10 relative overflow-hidden border-b border-slate-100"
      style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
    >
      {/* Reusable Background bubbles canvas */}
      <BubbleBackground opacity={0.65} theme="light" />
      {/* Geometric grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,138,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500 opacity-[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400 opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 reveal">
          <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">
            Market Verticals
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] tracking-[2px] uppercase mb-4">
            Industries{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            Our automated coating line handles everything from precision
            automotive components to large architectural frameworks — delivering
            consistent quality across diverse market sectors.
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className="block sm:hidden pb-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="w-full !overflow-visible"
          >
            {INDUSTRIES.map((industry, i) => (
              <SwiperSlide key={i}>
                <IndustryCard industry={industry} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
