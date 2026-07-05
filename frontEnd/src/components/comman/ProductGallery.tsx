"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import Link from "next/link";
import { Product, PRODUCTS_DATA as products } from "@/lib/staticData";

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Reusable Product Card Component
  const ProductCard = ({ product }: { product: Product }) => (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group relative bg-[#13131c]/60 backdrop-blur-xl border border-white/5 hover:border-orange-500/30 rounded-none overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full text-left"
    >
      {/* Premium Backlight Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 opacity-0 group-hover:opacity-[0.04] blur-2xl transition-opacity duration-700 pointer-events-none" />

      {/* Dynamic top animated border accent */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 group-hover:w-full transition-all duration-500 z-20" />

      {/* Image compartment with diagonal tech accents */}
      <div className="relative w-full h-60 bg-gradient-to-br from-white/[0.02] to-transparent p-8 flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-16 h-[1px] bg-white/10 transform rotate-45 translate-x-6 translate-y-2" />
        <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-white/10 transform rotate-45 -translate-x-6 -translate-y-2" />

        <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-108 group-hover:-rotate-1">
          <Image
            src={product.image[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* View Action Overlay */}
        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 shadow-2xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10" style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>

      {/* Info compartment */}
      <div className="p-6 flex flex-col flex-grow justify-between relative bg-white/[0.005]">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[9px] font-mono tracking-[2px] uppercase text-orange-400 font-semibold border border-orange-500/20 px-2.5 py-0.5 bg-orange-500/5">
              {product.category}
            </span>
            {product.sku && (
              <span className="text-[9px] font-mono text-zinc-500 border border-white/5 bg-white/5 px-2 py-0.5">
                {product.sku}
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl text-white uppercase tracking-[0.5px] group-hover:text-orange-400 transition-colors duration-300 mb-4">
            {product.name}
          </h3>

          {/* Technical Spec Matrix Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6 border-y border-white/5 py-4 font-mono text-[10px]">
            <div>
              <div className="text-zinc-500">FINISH STATUS</div>
              <div className="text-emerald-400 font-bold">100% INSPECTED</div>
            </div>
            <div>
              <div className="text-zinc-500">COMPLIANCE</div>
              <div className="text-orange-400 font-bold">ISO ALIGNED</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs tracking-[1.5px] uppercase font-semibold text-orange-400 border-t border-white/5 pt-4">
          <span>View Specifications</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-1.5 transition-transform duration-300">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-10 overflow-hidden border-b border-white/5" style={{ background: "#0a0a0f" }}>
      {/* Advanced blueprints crosshairs CAD grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0),
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 100px 100px, 100px 100px",
        }}
      />

      {/* Deep decorative ambient soft glow orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-orange-500 opacity-[0.04] blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-cyan-500 opacity-[0.03] blur-[110px] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 reveal">
          <div className="font-ui text-[11px] tracking-[8px] uppercase text-orange-500 mb-5">
            Industrial Portfolio
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-[2px] uppercase mb-6 leading-none">
            Engineered{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
          <p className="text-zinc-400 text-sm md:text-base max-w-[620px] mx-auto leading-relaxed">
            Discover our high-precision coating finishes applied to hydrant valves, agricultural machinery, and automotive chassis components.
          </p>
        </div>

        {/* Swiper on mobile, Grid on desktop */}
        <div className="block sm:hidden pb-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="w-full !overflow-visible"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Button to All Products */}
        <div className="mt-10 text-center reveal">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-12 py-4.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-ui text-[13px] tracking-[2.5px] uppercase font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:shadow-[0_0_45px_rgba(249,115,22,0.35)]"
            style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
          >
            <span>View All Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Premium Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 md:p-6"
          onClick={() => {
            setSelectedProduct(null);
            setThumbsSwiper(null);
          }}
        >
          <div
            className="relative w-full max-w-5xl bg-white border border-slate-200 shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProduct(null);
                setThumbsSwiper(null);
              }}
              className="absolute top-4 right-4 z-50 h-10 w-10 border border-slate-200 text-slate-800 text-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all flex items-center justify-center"
            >
              ×
            </button>

            {/* Presentation Column */}
            <div className="w-full md:w-1/2 bg-slate-50/50 flex flex-col p-6 justify-center border-b md:border-b-0 md:border-r border-slate-200">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Thumbs]}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={selectedProduct.image.length > 1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                thumbs={{
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                className="w-full bg-white border border-slate-200 shadow-sm"
              >
                {selectedProduct.image.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex items-center justify-center p-4">
                      <Image
                        src={img}
                        alt={`${selectedProduct.name} View ${idx + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto max-h-[30vh] md:max-h-[45vh] object-contain"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Details Column */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-ui tracking-[2px] uppercase text-orange-500 font-semibold bg-orange-50 px-2.5 py-1">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.sku && (
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-50 px-2 py-1 border border-zinc-100">
                      SKU: {selectedProduct.sku}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-[#1E3A8A] uppercase tracking-[1px] mb-6">
                  {selectedProduct.name}
                </h3>
                <div className="h-[2px] bg-slate-100 w-full mb-6" />

                <h4 className="text-[10px] font-ui tracking-[2px] uppercase text-slate-400 font-bold mb-4">
                  Technical Specifications
                </h4>

                <ul className="space-y-3">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact-us"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-grow text-center bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui text-[12px] tracking-[2px] uppercase font-semibold py-4 hover:scale-[1.02] transition-all"
                  style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
                >
                  Request Quote
                </Link>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-ui text-[12px] tracking-[2px] uppercase font-medium transition-colors"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
