"use client";
import React from "react";
import Link from "next/link";

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
  return (
    <section
      id="industries"
      className="py-16 relative overflow-hidden border-b border-slate-100"
      style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
    >
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
        <div className="text-center mb-16 reveal">
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

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <Link
              key={i}
              href={`/industries/${industry.slug}`}
              className="industry-card group relative p-8 border border-slate-200 bg-white hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-none cursor-pointer overflow-hidden block reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover animated background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${industry.accent}10, transparent)`,
                }}
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: industry.accent }}
              />

              <div className="relative z-10">
                <div
                  className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 inline-block"
                >
                  {industry.icon}
                </div>
                <h3
                  className="font-display text-2xl text-[#1E3A8A] tracking-[1px] uppercase mb-3 transition-colors duration-300"
                  style={{ "--accent": industry.accent } as React.CSSProperties}
                >
                  {industry.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                  {industry.desc}
                </p>

                {/* Arrow indicator */}
                <div
                  className="mt-6 flex items-center gap-2 text-xs tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  style={{ color: industry.accent }}
                >
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
