import Image from "next/image";
import PageHeader from "@/components/page-header";
import { Users, Target, Eye, ShieldCheck, Zap, Clock } from "lucide-react";
import type { Metadata } from "next";
import CustomLayout from "@/components/layout/layout";
import { STRENGTHS_DATA, COMPANY_DETAILS } from "@/lib/staticData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_DETAILS.siteUrl;

/* --- Production-Grade SEO Metadata --- */
export const metadata: Metadata = {
  title: "About INTIGRA | Premium Powder Coating Plant in Rajkot, Gujarat",
  description:
    "Discover the story behind INTIGRA, India's leading automated powder coating facility. Learn about our advanced metal finishing technology, core values, and mission to deliver high-durability surface protection.",
  keywords: [
    "about intigra coatings",
    "powder coating factory rajkot",
    "automated metal finishing gujarat",
    "industrial surface treatment company",
    "durable electrostatic powder coating",
  ],
  alternates: {
    canonical: `${siteUrl}/about-us`,
  },
  openGraph: {
    title: "About INTIGRA | Industrial Powder Coating Experts",
    description:
      "Explore our advanced powder coating plant facilities, dedicated technical team, and rigorous quality control workflows built to protect your assets.",
    url: `${siteUrl}/about-us`,
    type: "profile",
    images: [
      {
        url: `${siteUrl}/images/plant/plant_4.jpeg`, // Replaced placeholder with your actual plant image path
        width: 1200,
        height: 630,
        alt: "Inside the INTIGRA Automated Powder Coating Plant Facilities",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About INTIGRA | Modern Surface Finishing Plants",
    description:
      "Meet the team delivering eco-friendly, corrosion-resistant, and impact-tolerant industrial powder coatings.",
    images: [`${siteUrl}/images/plant/plant_4.jpeg`],
  },
};

const lucideIconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="h-8 w-8 text-orange-500" />,
  Users: <Users className="h-8 w-8 text-orange-500" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8 text-orange-500" />,
  Clock: <Clock className="h-8 w-8 text-orange-500" />,
};

const strengths = STRENGTHS_DATA.map((item) => ({
  ...item,
  icon: lucideIconMap[item.icon],
}));

export default function AboutPage() {
  return (
    <CustomLayout>
      <div>
        <PageHeader
          title="About INTIGRA Powder Coating"
          description="Learn about INTIGRA — Rajkot’s trusted name in premium powder coating solutions built for durability, precision, and performance."
        />

        {/* Introduction Section */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F0FDF4 0%, #ecfdf5 60%, #d1fae5 100%)" }}
          aria-label="INTIGRA Overview"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-200 opacity-15 rounded-full blur-3xl animate-pulse"></div>

          <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">Our Story</div>
                <h2 className="font-display text-4xl sm:text-5xl text-[#1E3A8A] tracking-[2px] uppercase leading-tight mb-6">
                  Premium Powder Coating in{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Rajkot</span>
                </h2>
                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  <strong className="text-orange-600">INTIGRA Coatings</strong>{" "}
                  specializes in delivering high-quality powder coating services designed to enhance
                  <strong> durability, performance, and aesthetics</strong>.
                  Based in <strong>Rajkot, Gujarat</strong>, we bring precision finishing and integrated coating solutions to industries including automotive, fabrication, furniture, electronics, and architecture.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Backed by <strong>state-of-the-art technology</strong> and an expert technical team, INTIGRA ensures every project meets the highest industrial standards — providing long-lasting protection, flawless finishes, and environmentally responsible processes.
                </p>
              </div>

              <div className="relative reveal" style={{ transitionDelay: "150ms" }}>
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-orange-500" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-orange-500" />
                <div className="overflow-hidden">
                  <Image
                    src="/images/plant/plant_4.jpeg"
                    alt="INTIGRA automated powder coating plant and conveyor machinery in Rajkot, Gujarat"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section
          className="py-20 relative border-y border-slate-100"
          style={{ background: "#0d0d15" }}
          aria-labelledby="mission-vision-title"
        >
          <div className="container max-w-screen-xl mx-auto px-6">
            <h2
              id="mission-vision-title"
              className="font-display text-4xl sm:text-5xl text-white tracking-[2px] uppercase text-center mb-12 reveal"
            >
              Our Mission &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Vision</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="group p-8 border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-400 reveal">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500" style={{ position: "relative" }} />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-orange-500/30 flex items-center justify-center">
                    <Target className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-display text-2xl text-white tracking-[1px] uppercase">Our Mission</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  To provide{" "}
                  <span className="text-white font-medium">reliable, long-lasting coating solutions</span>{" "}
                  that protect, strengthen, and enhance every surface. INTIGRA is committed to delivering{" "}
                  <span className="text-white font-medium">durable, sustainable, and high-performance powder coating services</span>{" "}
                  that blend structural beauty with engineered precision.
                </p>
              </div>

              {/* Vision Card */}
              <div className="group p-8 border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-400 reveal" style={{ transitionDelay: "100ms" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="font-display text-2xl text-white tracking-[1px] uppercase">Our Vision</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  To become a{" "}
                  <span className="text-white font-medium">global leader in powder coating innovation</span>{" "}
                  — offering premium-quality, eco-friendly, and performance-driven coating solutions that redefine{" "}
                  <span className="text-white font-medium">surface protection and design excellence</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section 
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F0FDF4, #ecfdf5)" }}
          aria-labelledby="strengths-title"
        >
          <div className="container max-w-screen-xl mx-auto px-6">
            <h2 
              id="strengths-title"
              className="font-display text-4xl sm:text-5xl text-[#1E3A8A] tracking-[2px] uppercase text-center mb-12 reveal"
            >
              Our Industrial{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Strengths</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="group text-center p-6 border border-slate-200 hover:border-orange-500/40 bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 reveal"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="inline-flex p-4 bg-orange-50 rounded-full mb-4 group-hover:bg-orange-100 transition-colors">
                    {strength.icon}
                  </div>
                  <h3 className="font-display text-lg text-[#1E3A8A] tracking-[0.5px] uppercase mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {strength.description}
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