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
  "Auto Mobile",
  "Agriculture",
  "Casting Valve",
  "Kitchen Ware",
  "Bath Accessories",
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
    name: "Auto Mobile Components",
    image: [
      "/images/products/automobile-1.jpeg",
      "/images/products/automobile.jpg",
      "/images/products/automobile-2.jpg",
    ],
    category: "Auto Mobile",
  },
  {
    id: 3,
    name: "Agriculture Equipment Parts",
    image: [
      "/images/products/agriculture-1.jpeg",
      "/images/products/agriculture.jpg",
      "/images/products/agriculture-2.jpg",
    ],
    category: "Agriculture",
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
  },
  {
    id: 5,
    name: "Kitchen Ware",
    image: [
      "/images/products/kitchen-ware.jpg",
      "/images/products/kitchen-ware-2.jpg",
      "/images/products/kitchen-ware-3.jpeg",
      "/images/products/kitchen-ware-4.jpeg",
    ],
    category: "Kitchen Ware",
  },
  {
    id: 6,
    name: "Bath Accessories",
    image: [
      "/images/products/bath-accessories.jpg",
      "/images/products/bath-accessories-2.jpg",
      "/images/products/bath-accessories-3.jpg",
      "/images/products/bath-accessories-4.jpeg",
    ],
    category: "Bath Accessories",
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedProduct(null)} // Close when clicking the background
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
              <h3 className="text-xl md:text-2xl font-bold text-orange-600">
                {selectedProduct.name}
              </h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="h-10 w-10 rounded-full bg-gray-100 text-gray-600 text-2xl hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Image Slider Section */}
            <div className="bg-gray-50 flex-grow">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Zoom]}
                navigation
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 3500 }}
                zoom
                autoHeight={true} // Crucial: Shrinks the container for landscape images
                className="w-full"
              >
                {selectedProduct.image.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swiper-zoom-container flex items-center justify-center">
                      <Image
                        src={img}
                        alt={selectedProduct.name}
                        width={1200}
                        height={900}
                        // Responsive height limits to keep the modal inside the viewport
                        className="w-full h-auto max-h-[65vh] object-contain"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Optional Footer/Padding to balance the look */}
            <div className="h-4 bg-white" />
          </div>
        </div>
      )}
    </section>
  );
}
