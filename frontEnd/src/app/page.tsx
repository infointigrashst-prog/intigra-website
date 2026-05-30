"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import {
  ShieldCheck,
  Palette,
  CheckCircle,
  Zap,
  ArrowRight,
  Layers,
  Construction,
  Users,
  Leaf,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import CustomLayout from "@/components/layout/layout";
import ProductGallery from "@/components/comman/ProductGallery";
import Testimonials from "@/components/comman/Testimonials";
import VideoSection from "@/components/comman/videoShowcase";

const slides = [
  {
    id: 1,
    title: "Precision in Every Coat.",
    subtitle:
      "From automotive to architecture — flawless powder coating built for performance and style.",
    image: "/images/plant/automatic-powder-coating-plant-2.jpg",
  },
  {
    id: 2,
    title: "Durability Meets Design.",
    subtitle:
      "Advanced powder coating solutions that protect, enhance, and endure in every environment.",
    image: "/images/plant/automatic-powder-coating-plant-1.jpg",
  },
  {
    id: 3,
    title: "Engineered for Excellence.",
    subtitle:
      "INTIGRA’s state-of-the-art coating plant delivers premium finishes that last longer and look better.",
    image: "/images/plant/about.jpeg",
  },
  {
    id: 4,
    title: "Strength You Can See.",
    subtitle:
      "Every surface we coat tells a story of innovation, endurance, and precision engineering.",
    image: "/images/plant/automatic-powder-coating-plant-2.jpg",
  },
];

export default function PremiumHomePage() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <CustomLayout>
      {/* Hero Section */}
      {/* <section className="relative h-[70vh] md:h-[90vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

                <div className="relative z-10 text-center px-6 max-w-4xl animate-fadeIn">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button
                      asChild
                      className="bg-orange-600 hover:bg-orange-700 text-white shadow-xl"
                    >
                      <Link href="/services">Explore Services</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

      {/* Video Showcase Section */}
      <VideoSection />

      {/* Benefits */}
      <section className="py-8 bg-gradient-to-r from-orange-50 via-white to-yellow-50 relative">
        {/* Decorative background circles for industrial feel */}
        <div className="absolute -top-16 -left-16 w-50 h-[250px] bg-orange-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-50 h-[250px] bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Why Choose{" "}
            <span className="text-orange-600">
              INTIGRA Powder Coating Solutions
            </span>
            ?
          </h2>
          <h1 className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Experience complete surface protection and flawless finishes with
            INTIGRA — delivering high-performance, eco-friendly powder coating
            for industrial, commercial, and architectural applications.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
                title: "Durable & Corrosion-Resistant Coatings",
                desc: "Engineered for long-term protection against corrosion, abrasion, and extreme weather — ensuring surfaces stay stronger for longer.",
              },
              {
                icon: <Leaf className="w-8 h-8 text-orange-500" />,
                title: "Eco-Friendly Powder Technology",
                desc: "Sustainable, solvent-free powder coatings that reduce emissions and waste while maintaining superior quality and finish.",
              },
              {
                icon: <Palette className="w-8 h-8 text-orange-500" />,
                title: "Custom Colors & Finish Options",
                desc: "From smooth matte to metallic gloss, choose from a vast palette of colors and finishes tailored to your brand’s design needs.",
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-500" />,
                title: "Advanced Application & Quality Standards",
                desc: "Delivered through precision application systems and strict quality checks for consistent, flawless, and durable coating performance.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="text-center bg-gray-50 rounded-xl border-t-4 border-orange-500
                 px-6 py-7 hover:shadow-2xl hover:-translate-y-1
                 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">{item.icon}</div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductGallery />
      {/* Services */}
      <section className="py-12 bg-gray-50 relative">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent" />

        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Our{" "}
            <span className="text-orange-600">Powder Coating Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                img: "/images/plant/automatic-powder-coating-plant-1.jpg",
                title: "Custom Coating Solutions",
                desc: "Tailored powder coating for projects of any size or complexity with precise finish.",
              },
              {
                img: "/images/plant/automatic-powder-coating-plant-2.jpg",
                title: "Industrial & Architectural",
                desc: "High-performance coatings for metal structures, automotive parts, and architectural components.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-gray-900"
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-72 brightness-90 group-hover:brightness-75 transition-all"
                />
                {/* Powder spray overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-6 w-12 h-12 bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-6 right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                </div>
                <div className="absolute bottom-6 left-6 text-left text-white">
                  <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-200 mb-4">{s.desc}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />

      {/* CTA */}
      <section className="relative py-10 bg-orange-50 overflow-hidden">
        {/* Powder coating spray effect */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-orange-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        {/* Optional: smaller spray particles */}
        <div className="absolute top-10 left-20 w-12 h-12 bg-orange-300 rounded-full opacity-30 blur-xl animate-ping"></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 bg-yellow-300 rounded-full opacity-25 blur-xl animate-ping"></div>
        <div className="absolute top-32 right-10 w-8 h-8 bg-orange-200 rounded-full opacity-20 blur-xl animate-ping"></div>

        <div className="container mx-auto px-3 relative z-10 text-center">
          <div className="bg-gradient-to-r from-orange-100 via-amber-100 to-gray-100 p-12 rounded-3xl shadow-xl text-gray-900 max-w-3xl mx-auto border border-orange-200">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-orange-700">
              Get in Touch for Quotes, Samples & Project Support
            </h2>

            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-800">
              Ready to elevate your next project? Partner with{" "}
              <span className="font-bold text-orange-700">
                INTIGRA Coatings
              </span>{" "}
              — your trusted expert in{" "}
              <strong>durable, eco-friendly powder coating</strong> solutions.
              Request a free quote, explore finish samples, or consult our
              specialists for tailored coating recommendations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600 font-semibold shadow-md transition-transform hover:scale-105"
              >
                <Link href="/contact">Request Free Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold transition-transform hover:scale-105"
              >
                <Link href="/gallery">Explore Our Finishes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
