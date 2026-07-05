import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CustomLayout from "@/components/layout/layout";
import { INDUSTRIES_DATA, COMPANY_DETAILS } from "@/lib/staticData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug);
  if (!industry) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_DETAILS.siteUrl;

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    keywords: industry.seoKeywords,
    alternates: {
      canonical: `${siteUrl}/industries/${slug}`,
    },
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      url: `${siteUrl}/industries/${slug}`,
      type: "website",
      siteName: "INTIGRA Coatings",
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug);
  if (!industry) {
    notFound();
  }

  return (
    <CustomLayout>
      {/* Dynamic Industry Hero Section */}
      <section 
        className="relative py-10 md:py-32 overflow-hidden border-b border-slate-100"
        style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
      >
        {/* Geometric Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30,58,138,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30,58,138,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Dynamic Glow Orb */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
          style={{ backgroundColor: industry.accent }}
        />

        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          {/* Eyebrow */}
          <div 
            className="font-ui text-[11px] tracking-[6px] uppercase mb-4"
            style={{ color: industry.accent }}
          >
            Industrial Solutions · {industry.title}
          </div>
          {/* Main Title */}
          <h1 className="font-display text-[#1E3A8A] text-5xl sm:text-7xl md:text-8xl tracking-[2px] uppercase mb-6">
            {industry.title}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Coatings
            </span>
          </h1>
          {/* Short Description */}
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-[700px] mx-auto leading-relaxed font-light">
            {industry.desc}
          </p>
        </div>
      </section>

      {/* Detail Content Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#0d0d15" }}>
        {/* Subtle glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-orange-500 opacity-[0.03] blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Details & Benefits */}
            <div className="lg:col-span-7 reveal">
              <h2 className="font-display text-3xl sm:text-4xl text-white tracking-[1px] uppercase mb-6">
                Premium Finishing for {industry.title} Applications
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {industry.detailedDesc}
              </p>

              {/* Benefits Checklist */}
              <h3 className="font-ui font-bold text-orange-500 text-sm uppercase tracking-wider mb-4">
                Key Performance Advantages
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {industry.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white"
                      style={{ backgroundColor: industry.accent }}
                    >
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Specific Engineering Applications */}
              <h3 className="font-ui font-bold text-orange-500 text-sm uppercase tracking-wider mb-4">
                Primary Applications Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {industry.applications.map((app, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-white/5 border border-white/10 text-zinc-300 text-xs tracking-wide uppercase font-medium hover:border-orange-500 transition-colors"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Specifications Table */}
            <div className="lg:col-span-5 reveal" style={{ transitionDelay: "150ms" }}>
              <div className="border border-white/8 bg-white/[0.02] p-6 md:p-8 relative">
                {/* Decorative Accent Strip */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: industry.accent }}
                />

                <h3 className="font-display text-2xl text-white tracking-[1px] uppercase mb-6">
                  Technical Specifications
                </h3>

                <div className="divide-y divide-white/5">
                  {industry.specifications.map((spec, idx) => (
                    <div key={idx} className="py-4 flex justify-between gap-4">
                      <span className="text-xs text-zinc-400 font-ui uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm text-white font-semibold text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact-us"
                    className="w-full inline-block text-center py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui text-[12px] tracking-[2px] uppercase font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-md"
                    style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
                  >
                    Request Sample / Quote
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home CTA Section */}
      <section 
        className="py-10 relative overflow-hidden text-center border-t border-slate-100"
        style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
      >
        <div className="max-w-[800px] mx-auto px-6 relative z-10 reveal">
          <h2 className="font-display text-3xl sm:text-4xl text-[#1E3A8A] tracking-[2px] uppercase mb-6">
            Looking for Custom Finishes?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 max-w-[500px] mx-auto">
            We offer fully bespoke powder formulations and curing parameters tailored to your exact manufacturing requirements.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-[#1E3A8A] font-ui text-[12px] tracking-[2px] uppercase font-medium transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-orange-600 text-white font-ui text-[12px] tracking-[2px] uppercase font-medium transition-all hover:bg-orange-700"
            >
              Our Coating Services
            </Link>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
