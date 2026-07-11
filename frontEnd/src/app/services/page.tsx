import Testimonials from "@/components/comman/Testimonials";
import CustomLayout from "@/components/layout/layout";
import { ServicesJsonLd } from "@/components/seo/json-ld";
import PageHeader from "@/components/page-header";
import BubbleBackground from "@/components/comman/BubbleBackground";
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
import {
  SERVICES_DATA,
  COATING_TYPES_DATA,
  APPLICATIONS_DATA,
  SERVICES_BENEFITS_DATA,
  COMPANY_DETAILS
} from "@/lib/staticData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_DETAILS.siteUrl;

export const metadata: Metadata = {
  title: "Industrial Powder Coating Services | INTIGRA Rajkot",
  description:
    "Discover INTIGRA's high-performance powder coating solutions in Gujarat. Precision electrostatic application, meticulous 9-tank hot process surface preparation, and custom texturing for automotive, industrial machinery, and architectural metal.",
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

const lucideIconMap: Record<string, React.ReactNode> = {
  SprayCan: <SprayCan className="h-10 w-10 text-orange-600" />,
  Layers: <Layers className="h-10 w-10 text-orange-600" />,
  CheckSquare: <CheckSquare className="h-10 w-10 text-orange-600" />,
  PaintBucket: <PaintBucket className="h-10 w-10 text-orange-600" />,
  Bike: <Bike className="h-8 w-8 text-accent" />,
  Settings: <Settings className="h-8 w-8 text-accent" />,
  Fence: <Fence className="h-8 w-8 text-accent" />,
  Aperture: <Aperture className="h-8 w-8 text-accent" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-orange-500" />,
  Zap: <Zap className="w-8 h-8 text-orange-500" />,
  Palette: <Palette className="w-8 h-8 text-orange-500" />,
  CheckCircle: <CheckCircle className="w-8 h-8 text-orange-500" />
};

const servicesList = SERVICES_DATA.map(item => ({
  ...item,
  icon: lucideIconMap[item.icon]
}));

const applications = APPLICATIONS_DATA.map(item => ({
  ...item,
  icon: lucideIconMap[item.icon]
}));

const benefitsList = SERVICES_BENEFITS_DATA.map(item => ({
  ...item,
  icon: lucideIconMap[item.icon]
}));

export default function ServicesPage() {
  return (
    <CustomLayout>
      <ServicesJsonLd />
      <div>
        <PageHeader
          title="Our Powder Coating Services"
          description="INTIGRA offers a comprehensive range of powder coating services designed to meet diverse needs with precision and quality."
        />

        <section 
          className="py-10 relative overflow-hidden border-b border-slate-100"
          style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
        >
          {/* Reusable Background bubbles canvas */}
          <BubbleBackground opacity={0.65} theme="light" />
          {/* Decorative Soft Backgrounds */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-16 reveal">
              <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">
                What We Do
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] tracking-[2px] uppercase mb-4">
                Our Industrial{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <div className="w-16 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-slate-200/80 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full text-left shadow-[0_10px_30px_rgba(30,41,59,0.03)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-ai-hint={service.dataAiHint}
                >
                  <div className="relative w-full aspect-video bg-slate-50 overflow-hidden border-b border-slate-100">
                    <Image
                      src={service.image}
                      alt={`${service.title} line setup by INTIGRA Coatings`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="p-2.5 bg-orange-50 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          {service.icon}
                        </div>
                        <h3 className="font-display text-2xl text-[#1E3A8A] tracking-[0.5px] uppercase group-hover:text-orange-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-5">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 mt-2 mr-3" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 relative overflow-hidden reveal" style={{ background: "#0d0d15" }}>
          {/* Reusable Background bubbles canvas */}
          <BubbleBackground opacity={0.6} theme="dark" />
          {/* Subtle glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-orange-500 opacity-[0.03] blur-[100px] pointer-events-none" />

          <div className="container max-w-screen-xl mx-auto px-6 relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-[2px] uppercase text-center mb-4">
              Types of Coatings We Offer
            </h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
              Tailored powder formulations cross-checked for precise mil thickness, environmental endurance, and structural integrity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COATING_TYPES_DATA.map((coating, i) => (
                <div
                  key={coating.title}
                  className="group relative bg-white/[0.02] border border-white/8 hover:bg-white/[0.04] transition-all duration-300 p-6 rounded-none reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500" />
                  
                  <h3 className="font-display text-2xl text-orange-500 tracking-[0.5px] uppercase mb-3">
                    {coating.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {coating.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 relative overflow-hidden reveal" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
          {/* Reusable Background bubbles canvas */}
          <BubbleBackground opacity={0.65} theme="light" />
          <div className="container max-w-screen-xl mx-auto px-6 relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl text-[#1E3A8A] tracking-[2px] uppercase text-center mb-4">
              Common Applications
            </h2>
            <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
              Powder coating is a versatile, high-endurance solution suitable for major processing sectors:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <div
                  key={app.name}
                  className="flex flex-col items-center text-center p-6 bg-white border border-slate-200 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-none reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mb-4">{app.icon}</div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-zinc-900">
                    {app.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="py-10 relative overflow-hidden reveal" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
          {/* Reusable Background bubbles canvas */}
          <BubbleBackground opacity={0.65} theme="light" />
          <div className="container max-w-screen-xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl sm:text-5xl text-[#1E3A8A] tracking-[2px] uppercase mb-4">
              Why Choose <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">INTIGRA Coatings</span>?
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
              Partner with an eco-conscious, high-capacity batch facility engineered to deliver elite-tier impact resistance, zero VOC emissions, and premium uniformity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {benefitsList.map((item, i) => (
                <div
                  key={i}
                  className="group text-center p-6 border border-slate-200 hover:border-orange-500/40 bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-none reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-lg text-[#1E3A8A] tracking-[0.5px] uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </CustomLayout>
  );
}