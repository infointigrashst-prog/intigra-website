import Image from "next/image";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye, ShieldCheck, Zap, Clock } from "lucide-react";
import type { Metadata } from "next";
import CustomLayout from "@/components/layout/layout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "About INTIGRA - Our Story, Mission, and Values",
  description:
    "Learn about INTIGRA's history, our mission to deliver quality powder coating, and the core values that drive our commitment to excellence and customer satisfaction.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About INTIGRA - Our Story, Mission, and Values",
    description:
      "Discover INTIGRA: Our journey, dedication to quality powder coating, and commitment to innovation and client success.",
    url: "/about",
    images: [
      {
        url: "https://placehold.co/1200x630.png", // Placeholder, replace with actual URL
        width: 1200,
        height: 630,
        alt: "About INTIGRA Team and Values",
        type: "image/png",
      },
    ],
  },
  twitter: {
    title: "About INTIGRA - Our Story, Mission, and Values",
    description:
      "Meet the team behind INTIGRA and learn about our unwavering commitment to quality and innovation in powder coating.",
    images: ["https://placehold.co/1200x630.png"], // Placeholder, replace with actual URL
  },
};

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "woman portrait",
    bio: "With over 20 years in the industry, Jane leads INTIGRA with a passion for innovation and customer satisfaction.",
  },
  {
    name: "John Smith",
    role: "Head of Operations",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait",
    bio: "John ensures every project meets our high standards of quality and efficiency, leveraging cutting-edge technology.",
  },
];

const values = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Quality Craftsmanship",
    description:
      "We are committed to delivering flawless finishes that stand the test of time, using only the best materials and techniques.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We work closely with you to understand your needs and exceed your expectations.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description:
      "We continuously explore new technologies and methods to provide cutting-edge powder coating solutions.",
  },
];

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

        <section
          className="py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden"
          aria-labelledby="about-intigra"
        >
          {/* Decorative Circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gray-300 opacity-15 rounded-full blur-3xl animate-pulse"></div>

          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-xl font-semibold text-orange-600 mb-4">
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

              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/plant/about.jpeg"
                  alt="INTIGRA powder coating plant and equipment in Rajkot, Gujarat"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-11 bg-gray-50 relative"
          aria-labelledby="mission-vision"
        >
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2
              id="mission-vision"
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
            >
              Our Mission & Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Mission Card */}
              <Card className="shadow-xl hover:shadow-2xl border-l-4 border-orange-500 rounded-xl transition-transform hover:-translate-y-2 hover:scale-105">
                <CardHeader className="items-center justify-center text-center">
                  <Target className="h-14 w-14 text-orange-500 mb-4" />
                  <CardTitle>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Our Mission
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-gray-700 text-base leading-relaxed text-center">
                    To provide{" "}
                    <strong>reliable, long-lasting coating solutions </strong>
                    that protect, strengthen, and enhance every surface. INTIGRA
                    is committed to delivering{" "}
                    <strong>
                      durable, sustainable, and high-performance powder coating
                      services
                    </strong>{" "}
                    that blend beauty with precision.
                  </h3>
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="shadow-xl hover:shadow-2xl border-l-4 border-orange-500 rounded-xl transition-transform hover:-translate-y-2 hover:scale-105">
                <CardHeader className="items-center justify-center text-center">
                  <Eye className="h-14 w-14 text-orange-500 mb-4" />
                  <CardTitle>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Our Vision
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-gray-700 text-base leading-relaxed text-center">
                    To become a{" "}
                    <strong>global leader in powder coating innovation</strong>{" "}
                    — offering premium-quality, eco-friendly, and
                    performance-driven coating solutions that redefine{" "}
                    <strong>surface protection and design excellence</strong>.
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white via-orange-50 to-white relative">
          <div className="container max-w-screen-xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Strengths
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="text-center shadow-md hover:shadow-2xl border-t-4 border-orange-500 rounded-2xl transition-transform hover:-translate-y-2 hover:scale-105 bg-white"
                >
                  <CardHeader className="flex justify-center">
                    <div className="p-5 bg-orange-100 rounded-full mb-4">
                      {strength.icon}
                    </div>
                  </CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                    <h2>{strength.title}</h2>
                  </CardTitle>
                  <CardContent>
                    <h3 className="text-gray-700 leading-relaxed">
                      {strength.description}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-10 bg-gray-50 relative">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl md:text-5xl font-bold font-headline text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
              {teamMembers.map((member) => (
                <Card
                  key={member.name}
                  className="overflow-hidden shadow-xl hover:shadow-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left border-l-4 border-orange-500 rounded-xl transition-transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="w-36 h-36 sm:w-44 sm:h-full flex-shrink-0 rounded-full overflow-hidden border-4 border-orange-50 shadow-md">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      width={176}
                      height={176}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-orange-500 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
      </div>
    </CustomLayout>
  );
}
