import Image from "next/image";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye, ShieldCheck, Zap, Clock } from "lucide-react";
import type { Metadata } from "next";
import CustomLayout from "@/components/layout/layout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

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
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About INTIGRA | Industrial Powder Coating Experts",
    description:
      "Explore our advanced powder coating plant facilities, dedicated technical team, and rigorous quality control workflows built to protect your assets.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: `${siteUrl}/images/plant/about.jpeg`, // Replaced placeholder with your actual plant image path
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
    images: [`${siteUrl}/images/plant/about.jpeg`],
  },
};

const strengths = [
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Modern Powder Coating Facility",
    description:
      "Equipped with advanced coating lines and precision machinery for superior, consistent finishes every time.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Skilled Technical Team",
    description:
      "Our experienced professionals bring expertise and attention to detail to every project, ensuring quality and reliability.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
    title: "Strong Quality Checks & Process Control",
    description:
      "Each stage undergoes rigorous quality checks for coating thickness, adhesion, and surface finish to meet high standards.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: "Fast Turnaround & Consistent Results",
    description:
      "We deliver projects on time without compromising finish quality — reliable results, every single batch.",
  },
];

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
          className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden"
          aria-label="INTIGRA Overview"
        >
          {/* Decorative Circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gray-300 opacity-15 rounded-full blur-3xl animate-pulse"></div>

          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-xl font-bold text-orange-600 mb-4 uppercase tracking-wider">
                  Premium Powder Coating in Rajkot, Gujarat
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  <span className="font-semibold text-orange-600">
                    INTIGRA Coatings
                  </span>{" "}
                  specializes in delivering high-quality powder coating services
                  designed to enhance
                  <strong> durability, performance, and aesthetics</strong>.
                  Based in <strong>Rajkot, Gujarat</strong>, we bring precision
                  finishing and integrated coating solutions to industries such
                  as automotive, fabrication, furniture, electronics, and
                  architecture.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Backed by <strong>state-of-the-art technology</strong> and an
                  expert technical team, INTIGRA ensures every project meets the
                  highest industrial standards — providing long-lasting
                  protection, flawless finishes, and environmentally responsible
                  processes.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/plant/about.jpeg"
                  alt="INTIGRA automated powder coating plant and conveyor machinery in Rajkot, Gujarat"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section
          className="py-16 bg-gray-50 relative border-y border-gray-200"
          aria-labelledby="mission-vision-title"
        >
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2
              id="mission-vision-title"
              className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight"
            >
              Our Mission & Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Mission Card */}
              <Card className="shadow-xl bg-white hover:shadow-2xl border-l-4 border-orange-500 rounded-xl transition-all hover:-translate-y-1">
                <CardHeader className="items-center justify-center text-center pb-2">
                  <Target className="h-14 w-14 text-orange-500 mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-base leading-relaxed">
                    To provide{" "}
                    <strong>reliable, long-lasting coating solutions</strong>{" "}
                    that protect, strengthen, and enhance every surface. INTIGRA
                    is committed to delivering{" "}
                    <strong>
                      durable, sustainable, and high-performance powder coating
                      services
                    </strong>{" "}
                    that blend structural beauty with engineered precision.
                  </p>
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="shadow-xl bg-white hover:shadow-2xl border-l-4 border-orange-500 rounded-xl transition-all hover:-translate-y-1">
                <CardHeader className="items-center justify-center text-center pb-2">
                  <Eye className="h-14 w-14 text-orange-500 mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-base leading-relaxed">
                    To become a{" "}
                    <strong>global leader in powder coating innovation</strong>{" "}
                    — offering premium-quality, eco-friendly, and
                    performance-driven coating solutions that redefine{" "}
                    <strong>surface protection and design excellence</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section 
          className="py-16 bg-gradient-to-b from-white via-orange-50 to-white relative"
          aria-labelledby="strengths-title"
        >
          <div className="container max-w-screen-xl mx-auto px-6">
            <h2 
              id="strengths-title"
              className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight"
            >
              Our Industrial Strengths
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="text-center shadow-md hover:shadow-2xl border-t-4 border-orange-500 rounded-2xl transition-all hover:-translate-y-1 bg-white flex flex-col items-center p-4"
                >
                  <CardHeader className="flex justify-center pb-2">
                    <div className="p-4 bg-orange-100 rounded-full mb-2">
                      {strength.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow items-center">
                    {/* FIXED: Removed invalid nested <h2> tag from CardTitle structure */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-auto">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </CustomLayout>
  );
}