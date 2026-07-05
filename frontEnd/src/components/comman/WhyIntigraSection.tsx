"use client";
import React from "react";

const WHY_ITEMS = [
  {
    icon: "⚡",
    title: "Automated Production Line",
    desc: "State-of-the-art conveyor system with 100% automated powder application ensures consistent film thickness across every component — eliminating human variance.",
    metric: "100%",
    metricLabel: "Automated",
    accent: "#ff6b2b",
  },
  {
    icon: "🌿",
    title: "Zero Waste Eco Process",
    desc: "Solvent-free powder formulations combined with closed-loop powder recovery systems achieve near-zero waste output — dramatically reducing environmental impact.",
    metric: "0%",
    metricLabel: "Solvents Used",
    accent: "#00d68f",
  },
  {
    icon: "🛡️",
    title: "7-Stage Pre-Treatment",
    desc: "Multi-tank phosphating and chromate conversion coating system creates a superior bond layer — proven to extend coating life by up to 300% vs. standard priming.",
    metric: "300%",
    metricLabel: "Longer Life",
    accent: "#00c8ff",
  },
  {
    icon: "🎯",
    title: "Precision Color Matching",
    desc: "Spectrophotometer-verified color matching across 6,000+ RAL and custom formulations — guaranteeing batch-to-batch consistency for multi-part assemblies.",
    metric: "6000+",
    metricLabel: "Color Options",
    accent: "#8b5cf6",
  },
  {
    icon: "⏱️",
    title: "Fast Turnaround",
    desc: "Streamlined production scheduling with real-time line monitoring enables 48-72 hour standard turnaround — even for high-volume custom orders.",
    metric: "48h",
    metricLabel: "Turnaround",
    accent: "#f5c842",
  },
  {
    icon: "🔬",
    title: "ISO-Compliant QC",
    desc: "Every batch undergoes adhesion cross-hatch, impact resistance, salt-spray corrosion, and gloss level testing against international ISO standards.",
    metric: "ISO",
    metricLabel: "Certified QC",
    accent: "#ff6b2b",
  },
];

export default function WhyIntigraSection() {
  return (
    <section
      id="why-intigra"
      className="py-16 relative overflow-hidden border-b border-slate-100"
      style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
    >
      {/* Background mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, rgba(30,58,138,0.03) 0%, transparent 60%),
                       radial-gradient(ellipse at 80% 50%, rgba(255,107,43,0.02) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 mb-20">
          <div className="reveal">
            <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">
              Competitive Edge
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1E3A8A] tracking-[2px] uppercase leading-tight mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                INTIGRA?
              </span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400" />
          </div>
          <div className="reveal flex items-center">
            <p className="text-slate-500 text-base leading-relaxed">
              We combine advanced automation, rigorous quality science, and deep
              industry expertise to deliver powder coating solutions that exceed
              performance benchmarks — consistently, at scale. Here is why
              leading manufacturers choose INTIGRA.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-slate-200">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 bg-white hover:bg-slate-50/50 transition-all duration-400 cursor-pointer overflow-hidden reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Animated top border */}
              <div
                className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                style={{ background: item.accent }}
              />

              {/* Metric badge */}
              <div
                className="font-display text-3xl mb-1 transition-all duration-300 group-hover:scale-110 inline-block"
                style={{ color: item.accent }}
              >
                {item.metric}
              </div>
              <div className="font-ui text-[9px] tracking-[3px] uppercase text-slate-500 mb-5">
                {item.metricLabel}
              </div>

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-ui font-semibold text-[#1E3A8A] text-sm tracking-wide">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
