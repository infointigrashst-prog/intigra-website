"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Zoom,
  EffectFade,
} from "swiper/modules";

interface Product {
  id: number;
  name: string;
  image: string[];
  category: string;
}

const categories = [
  "All Cases",
  "Hydrant Valve",
  "Forging",
  "Boiler Parts",
  "Valve Casting Parts",
];

const products: Product[] = [
  {
    id: 1,
    name: "Hydrant Valve",
    image: [
      "/images/products/hydrant-valve.jpg",
      "/images/products/hydrant-valve-2.jpg",
    ],
    category: "Hydrant Valve",
  },
  {
    id: 2,
    name: "Forging",
    image: [
      "/images/products/Flanges-madrec.jpg",
      "/images/products/Flanges2-madrec.jpg",
    ],
    category: "Forging",
  },
  {
    id: 3,
    name: "Boiler Casting Parts",
    image: ["/images/products/Boiler_Parts2-madrec.jpg"],
    category: "Boiler Parts",
  },
  {
    id: 4,
    name: "Valve Casting Parts",
    image: [
      "/images/products/Valve_Casting_Parts2-madrec.jpg",
      "/images/products/Valve_Casting_Parts3-madrec.jpg",
    ],
    category: "Valve Casting Parts",
  },
];

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Cases");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "All Cases"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative py-5 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Our <span className="text-orange-600">Product Range</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-6 py-2.5 text-base font-semibold rounded-full transition-all duration-300 overflow-hidden group
            ${
              selectedCategory === cat
                ? "text-orange-600 border border-orange-500 shadow-lg bg-white/90"
                : "text-gray-700 bg-white/80 border border-gray-300 hover:text-orange-500 hover:border-orange-500"
            }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white/70 rounded-t-lg animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Product Grid (Desktop) */}
        <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-400 transition">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Product Slider */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            loop
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation
            className="pb-10"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-base font-semibold text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                  bg-white/60 backdrop-blur-md"
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute -top-4 -right-4 z-50
                   h-10 w-10 rounded-full
                   bg-white text-gray-800 text-2xl font-bold
                   shadow-lg hover:bg-orange-500 hover:text-white transition"
            >
              ×
            </button>

            {/* Image Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Zoom]}
              navigation
              loop
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500 }}
              zoom
              className="w-full rounded-2xl"
            >
              {selectedProduct.image.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="swiper-zoom-container flex items-center justify-center">
                    <Image
                      src={img}
                      alt={selectedProduct.name}
                      width={800}
                      height={600}
                      className="object-contain max-h-[75vh] rounded-2xl"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Product Name */}
            <h3 className="mt-5 text-center text-xl md:text-2xl font-semibold text-orange-600">
              {selectedProduct.name}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
