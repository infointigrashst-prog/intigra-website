"use client";
import React from "react";
import Link from "next/link";

export default function ContactCTASection() {
  return (
    <section
      id="contact"
      className="py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
    >
      {/* Subtle blurred glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-orange-500 opacity-[0.03] blur-[120px]" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-orange-500/20" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-orange-500/20" />

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10 reveal">
        {/* Eyebrow */}
        <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-6">
          Start Your Project
        </div>

        {/* Heading */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#1E3A8A] tracking-[2px] uppercase leading-tight mb-8">
          Ready to{" "}
          <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 bg-clip-text text-transparent">
            Elevate
          </span>{" "}
          Your Finish?
        </h2>

        {/* Sub-text */}
        <p className="text-slate-600 text-base md:text-lg max-w-[600px] mx-auto leading-relaxed mb-12">
          Request a free quote, send us your drawings, or speak to our coating
          engineers. We respond within 24 hours for all inquiries.
        </p>

        {/* Contact info pills */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="tel:+918128228778"
            className="flex items-center gap-3 px-6 py-3 border border-slate-200 hover:border-orange-500/40 text-slate-600 hover:text-[#1E3A8A] text-sm font-ui tracking-wide transition-all duration-300 bg-white"
          >
            <span className="text-orange-500">📞</span>
            +91 81282 28778
          </a>
          <a
            href="mailto:info.intigra.shst@gmail.com"
            className="flex items-center gap-3 px-6 py-3 border border-slate-200 hover:border-orange-500/40 text-slate-600 hover:text-[#1E3A8A] text-sm font-ui tracking-wide transition-all duration-300 bg-white"
          >
            <span className="text-orange-500">✉️</span>
            info.intigra.shst@gmail.com
          </a>
          <span className="flex items-center gap-3 px-6 py-3 border border-slate-200 text-slate-500 text-sm font-ui tracking-wide bg-white">
            <span className="text-orange-500">📍</span>
            Rajkot, Gujarat, India
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-us"
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui text-[13px] tracking-[2px] uppercase font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/25"
            style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
          >
            Request Free Quote
          </Link>
          <Link
            href="/services"
            className="px-10 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-[#1E3A8A] font-ui text-[13px] tracking-[2px] uppercase font-medium hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
