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
      className="group relative bg-[#13131c]/60 backdrop-blur-xl border border-white/5 hover:border-orange-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 cursor-pointer flex flex-col h-full text-left shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)]"
    >
      {/* Dynamic Animated Gradient Corner Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-400 opacity-[0.03] group-hover:opacity-[0.08] blur-xl transition-opacity duration-500" />

      {/* Floating Bubbles inside the card background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-2 h-2 rounded-full bg-orange-400/30 top-1/4 left-1/3 animate-bounce" style={{ animationDelay: "0.2s", animationDuration: "3s" }} />
        <div className="absolute w-3.5 h-3.5 rounded-full bg-cyan-400/25 bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "4s" }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-yellow-400/30 top-2/3 left-12 animate-pulse" style={{ animationDelay: "1s", animationDuration: "5s" }} />
      </div>

      {/* Image Compartment with dynamic shadow lifts */}
      <div className="relative w-full h-64 bg-gradient-to-b from-white/[0.02] to-transparent p-6 flex items-center justify-center overflow-hidden border-b border-white/5 z-10">
        <div className="relative w-full h-full transform transition-all duration-700 ease-out group-hover:scale-108 group-hover:-translate-y-2.5 filter group-hover:drop-shadow-[0_20px_25px_rgba(249,115,22,0.3)]">
          <Image
            src={product.image[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Compartment */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-white/[0.005] z-10 relative">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-mono tracking-[2.5px] uppercase text-orange-400 font-bold border border-orange-500/20 px-2.5 py-0.5 bg-orange-500/5 rounded-full">
              {product.category}
            </span>
            {product.sku && (
              <span className="text-[9px] font-mono text-zinc-500 border border-white/5 bg-white/5 px-2 py-0.5 rounded-full">
                {product.sku}
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl text-white uppercase tracking-[0.5px] group-hover:text-orange-400 transition-colors duration-300 mb-3">
            {product.name}
          </h3>

          {/* Animated Slide-Up Specs (Expands on Hover) */}
          <div className="max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
            <div className="pb-4 border-t border-white/5 mt-3 pt-3">
              <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-wider">Specifications</div>
              {product.features && (
                <ul className="space-y-1.5">
                  {product.features.slice(0, 3).map((feat, i) => (
                    <li
                      key={i}
                      className="text-xs text-zinc-400 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* View Details CTA Button Bar */}
        <div className="flex justify-between items-center text-xs tracking-[1.5px] uppercase font-bold text-orange-400 border-t border-white/5 pt-4 mt-2">
          <span>Explore Finish Specs</span>
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-orange-500 text-orange-400 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-5 overflow-hidden border-b border-white/5" style={{ background: "#0a0a0f" }}>
      {/* Geometric blueprints grid overlay */}
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

      {/* Decorative ambient soft glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-orange-500 opacity-[0.03] blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500 opacity-[0.02] blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 reveal">
          <div className="font-ui text-[11px] tracking-[6px] uppercase text-orange-500 mb-4">
            Industrial Portfolio
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-[2px] uppercase mb-4">
            Engineered{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
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
        <div className="mb-10 text-center reveal">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui text-[13px] tracking-[2px] uppercase font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/20"
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
