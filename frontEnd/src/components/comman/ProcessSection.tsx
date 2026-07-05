"use client";
import React from "react";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Surface Preparation",
    desc: "Comprehensive 7-tank phosphating & degreasing process removes all contaminants, rust, and mill scale — creating a chemically-clean, profiled surface for maximum adhesion.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Powder Application",
    desc: "Electrostatic spray guns charge powder particles, ensuring full 360° wrap-around coverage including recesses, corners, and complex geometries with uniform film build.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Thermal Curing",
    desc: "Industrial convection ovens precisely hold 180–200°C for 15-20 minutes, fully cross-linking the polymer matrix to create a thermoset coating with maximum mechanical properties.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Quality Inspection",
    desc: "Dry-film thickness measured per ISO 2178, adhesion tested per ISO 2409, and visual inspection under controlled lighting — every batch certified before dispatch.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-10 relative overflow-hidden border-b border-white/5"
      style={{ background: "#0d0d15" }}
    >
      {/* Decorative diagonal blueprints lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff,
            #ffffff 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      {/* Decorative ambient soft glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-orange-500 opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500 opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">
            Our Methodology
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-[2px] uppercase mb-4">
            The INTIGRA{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            A rigorously controlled, four-stage coating methodology that
            guarantees consistent quality and long-term surface performance
            across every production batch.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-orange-500/30 via-orange-500/60 to-orange-500/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Step circle */}
                <div className="relative mb-8">
                  <div
                    className="w-[104px] h-[104px] rounded-full border-2 border-white/10 bg-white/[0.02] shadow-lg flex items-center justify-center relative z-10 transition-all duration-500 group-hover:border-orange-500 group-hover:shadow-orange-500/20 group-hover:shadow-xl"
                  >
                    <div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    />
                    <div className="text-orange-500 relative z-10">{step.icon}</div>
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <span className="font-display text-white text-xs tracking-wider">{step.num}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-white tracking-[1px] uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Mobile connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden mt-8 w-[2px] h-8 bg-gradient-to-b from-orange-500/60 to-transparent mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
