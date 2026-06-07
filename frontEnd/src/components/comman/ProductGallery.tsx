"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Zoom, Thumbs } from "swiper/modules";

// Import Swiper styles in your global CSS or here if configuration allows:
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/zoom";
// import "swiper/css/thumbs";

interface Product {
  id: number;
  name: string;
  image: string[];
  category: string;
  sku?: string;
  features?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Hydrant Valve Premium Unit",
    image: ["/images/products/hydrant-valve.jpg", "/images/products/hydrant-valve-2.jpg"],
    category: "Hydrant Valve",
    sku: "HV-104",
    features: ["Corrosion Resistant Coating", "High-Pressure Tolerance", "Industrial Standard Compliance"],
  },
  {
    id: 2,
    name: "Auto Mobile Components",
    image: ["/images/products/automobile-1.jpeg", "/images/products/automobile.jpg", "/images/products/automobile-2.jpg"],
    category: "Auto Mobile",
    sku: "AM-892",
    features: ["Precision Forged Engineering", "High Tensile Strength Alloys", "Custom Fit Profiles"],
  },
  {
    id: 3,
    name: "Agriculture Equipment Parts",
    image: ["/images/products/agriculture-1.jpeg", "/images/products/agriculture.jpg", "/images/products/agriculture-2.jpg"],
    category: "Agriculture",
    sku: "AG-501",
    features: ["Heavy Duty Field Resilience", "Wear-Resistant Micro Finish", "Optimized Core Geometry"],
  },
  {
    id: 4,
    name: "Casting Valve Parts",
    image: [
      "/images/products/Valve_Casting_Parts2-madrec.jpg",
      "/images/products/Valve_Casting_Parts3-madrec.jpg",
      "/images/products/Valve_Casting_Parts4-madrec.jpeg",
      "/images/products/Valve_Casting_Parts5-madrec.jpeg",
    ],
    category: "Casting Valve",
    sku: "CV-330",
    features: ["Defect-Free Sand Casting", "Flawless Machine Threading", "Thermal Stress Tested"],
  },
  {
    id: 5,
    name: "Premium Kitchen Ware",
    image: [
      "/images/products/kitchen-ware.jpg",
      "/images/products/kitchen-ware-2.jpg",
      "/images/products/kitchen-ware-3.jpeg",
      "/images/products/kitchen-ware-4.jpeg",
    ],
    category: "Kitchen Ware",
    sku: "KW-721",
    features: ["Food-Grade Safety Standards", "Ergonomic Balance Profiles", "Ultra Mirror-Polish Polish"],
  },
  {
    id: 6,
    name: "Luxury Bath Accessories",
    image: [
      "/images/products/bath-accessories.jpg",
      "/images/products/bath-accessories-2.jpg",
      "/images/products/bath-accessories-3.jpg",
      "/images/products/bath-accessories-4.jpeg",
    ],
    category: "Bath Accessories",
    sku: "BA-012",
    features: ["Multi-Layer Chrome Plating", "Anti-Lime Scaling Surface", "Easy-Mount System Design"],
  },
];

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Reusable Product Card Component to avoid code duplication between Grid and Swiper views
  const ProductCard = ({ product }: { product: Product }) => (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full text-left"
    >
      {/* Product Card Image Container - Adjusted to h-48 on mobile and h-64 on tablet up */}
      <div className="relative w-full h-48 sm:h-64 bg-slate-50 p-4 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={product.image[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 text-[11px] uppercase font-extrabold tracking-wider bg-white/90 text-slate-800 px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-sm z-10">
          {product.category}
        </span>

        {/* View Overlay Action */}
        <div className="absolute bottom-4 right-4 bg-orange-600 text-white p-3 rounded-2xl shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
      </div>

      {/* Product Card Info */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white border-t border-slate-50">
        {product.sku && <span className="text-xs text-slate-400 font-mono mb-1">{product.sku}</span>}
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1 mb-2">
          {product.name}
        </h3>
        <div className="w-8 h-1 bg-orange-500 rounded transition-all duration-300 group-hover:w-16 mb-4" />
        
        {/* Micro Preview of Features */}
        {product.features && (
          <ul className="space-y-1.5 mt-auto">
            {product.features.slice(0, 2).map((feat, i) => (
              <li key={i} className="text-xs text-slate-500 flex items-center gap-1.5 line-clamp-1">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <section className="relative py-12 sm:py-20 bg-gradient-to-b from-slate-50 via-gray-100 to-slate-200 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-orange-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-orange-100 rounded-full inline-block mb-3">
            Industrial Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Product Range</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Explore high-precision manufacturing components across multiple sectors built to international specifications.
          </p>
        </div>

        {/* 1. MOBILE VIEW: Horizontal Touch Slider Container (Visible only below 'sm' breakpoint) */}
        <div className="block sm:hidden pb-10">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            pagination={{ clickable: true }}
            className="w-full !overflow-visible"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-full">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 2. TABLET & DESKTOP VIEW: Universal Adaptive Product Grid (Hidden on mobile) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Premium Split Layout Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 md:p-6"
          onClick={() => {
            setSelectedProduct(null);
            setThumbsSwiper(null);
          }}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger Button */}
            <button
              onClick={() => {
                setSelectedProduct(null);
                setThumbsSwiper(null);
              }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 h-10 w-10 rounded-full bg-slate-900/10 text-slate-800 text-xl font-bold hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center backdrop-blur-sm"
            >
              ×
            </button>

            {/* Left Column: Presentation Area */}
            <div className="w-full md:w-1/2 bg-slate-50 flex flex-col p-4 md:p-6 border-r border-slate-100 justify-center">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Zoom, Thumbs]}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={selectedProduct.image.length > 1}
                autoplay={{ delay: 1000, disableOnInteraction: true }}
                zoom={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                autoHeight={true}
                className="w-full rounded-2xl overflow-hidden group shadow-sm bg-white"
              >
                {selectedProduct.image.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swiper-zoom-container flex items-center justify-center p-2">
                      <Image
                        src={img}
                        alt={`${selectedProduct.name} View ${idx + 1}`}
                        width={1000}
                        height={750}
                        className="w-full h-auto max-h-[35vh] md:max-h-[50vh] object-contain rounded-xl"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Dynamic Thumbnail Swiper */}
              {selectedProduct.image.length > 1 && (
                <div className="mt-4 hidden sm:block">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="thumbs-swiper"
                  >
                    {selectedProduct.image.map((img, idx) => (
                      <SwiperSlide key={idx} className="cursor-pointer opacity-40 transition-opacity duration-300 [&.swiper-slide-thumb-active]:opacity-100">
                        <div className="relative aspect-[4/3] border-2 border-transparent [&.swiper-slide-thumb-active]:border-orange-500 rounded-lg overflow-hidden bg-white shadow-sm">
                          <Image src={img} alt="thumbnail" fill className="object-cover" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            {/* Right Column: Technical Details */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-white">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 px-2.5 py-1 bg-orange-50 rounded-md">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.sku && (
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                      SKU: {selectedProduct.sku}
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  {selectedProduct.name}
                </h3>
                
                <div className="h-0.5 bg-slate-100 w-full mb-6" />

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Product Technical Features
                </h4>
                
                {selectedProduct.features ? (
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500 leading-relaxed">
                    High-durability engineering product crafted according to industrial guidelines. Ideal for systems requiring meticulous structural accuracy.
                  </p>
                )}
              </div>

              {/* Action Area */}
              <div className="mt-6 md:mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-grow text-center bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-md shadow-orange-600/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  Request Technical Quotation
                </a>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setThumbsSwiper(null);
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3.5 px-6 rounded-2xl transition-colors duration-300"
                >
                  Back to Range
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}