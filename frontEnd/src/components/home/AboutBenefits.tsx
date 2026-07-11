"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ShieldCheck, Palette, Zap, Leaf } from "lucide-react";
import { HOME_BENEFITS_DATA } from "@/lib/staticData";

const lucideIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-orange-500" />,
  Leaf: <Leaf className="w-8 h-8 text-orange-500" />,
  Palette: <Palette className="w-8 h-8 text-orange-500" />,
  Zap: <Zap className="w-8 h-8 text-orange-500" />,
};

const benefitsList = HOME_BENEFITS_DATA.map((item) => ({
  ...item,
  icon: lucideIconMap[item.icon],
}));

export default function AboutBenefits() {
  return (
    <>
      {/* Mobile View: Swiper Slider */}
      <div className="block sm:hidden mt-10 pb-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          className="w-full !overflow-visible"
        >
          {benefitsList.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="text-center p-6 border border-slate-200 bg-white hover:border-orange-500/40 rounded-none h-full flex flex-col justify-center items-center">
                <div className="mb-4 p-3 bg-orange-50 rounded-full inline-flex">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-[#1E3A8A] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View: Grid */}
      <div className="hidden sm:grid mt-10 grid-cols-2 md:grid-cols-4 gap-6">
        {benefitsList.map((item, i) => (
          <div
            key={i}
            className="text-center p-6 border border-slate-200 hover:border-orange-500/40 bg-white/80 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="mb-4 p-3 bg-orange-50 rounded-full inline-flex">
              {item.icon}
            </div>
            <h3 className="text-sm font-bold text-[#1E3A8A] mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
