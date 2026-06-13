import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomLayout from "@/components/layout/layout";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string[];
  category: string;
  sku: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Hydrant Valve Premium Unit",
    image: [
      "/images/products/hydrant-valve.jpg",
      "/images/products/hydrant-valve-2.jpg",
    ],
    category: "Hydrant Valve",
    sku: "HV-104",
    features: [
      "Corrosion Resistant Coating",
      "High-Pressure Tolerance",
      "Industrial Standard Compliance",
    ],
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
    sku: "AM-892",
    features: [
      "Precision Forged Engineering",
      "High Tensile Strength Alloys",
      "Custom Fit Profiles",
    ],
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
    sku: "AG-501",
    features: [
      "Heavy Duty Field Resilience",
      "Wear-Resistant Micro Finish",
      "Optimized Core Geometry",
    ],
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
    features: [
      "Defect-Free Sand Casting",
      "Flawless Machine Threading",
      "Thermal Stress Tested",
    ],
  },
  {
    id: 5,
    name: "Premium Kitchen Ware",
    image: [
      "/images/products/kitchen-ware-3.jpeg",
      "/images/products/kitchen-ware.jpg",
      "/images/products/kitchen-ware-2.jpg",
      "/images/products/kitchen-ware-4.jpeg",
    ],
    category: "Kitchen Ware",
    sku: "KW-721",
    features: [
      "Food-Grade Safety Standards",
      "Ergonomic Balance Profiles",
      "Ultra Mirror-Polish Polish",
    ],
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
    features: [
      "Multi-Layer Chrome Plating",
      "Anti-Lime Scaling Surface",
      "Easy-Mount System Design",
    ],
  },
];

/* --- Main Gallery Catalog Index SEO Metadata --- */
export const metadata: Metadata = {
  title: "Industrial Powder Coating Product Catalog", // Results in: Industrial Powder Coating Product Catalog | INTIGRA Powder Coating Rajkot
  description:
    "Explore INTIGRA's full industrial application catalog gallery in Rajkot, Gujarat. Premium finishes for protective hydrant valves, automotive components, casting setups, and consumer kitchenware.",
  keywords: [
    "powder coating catalog rajkot",
    "industrial component finishing gujarat",
    "valve powder coating gallery",
    "automotive finishing variations",
    "metal coating application index",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Industrial Powder Coating Product Catalog | INTIGRA",
    description: "Explore our full industrial application catalog gallery in Rajkot, Gujarat. Precision finishes engineered for maximum structural performance.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/gallery`,
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <CustomLayout>
      <div className="bg-[#f8fafc] text-zinc-900 font-sans antialiased">
        
        <div className="bg-white border-b border-zinc-200">
          <PageHeader
            title="Range of Coating Products"
            description="Explore our specialized powder coating applications across multiple sectors. Engineered for high performance, safety compliance, and maximum durability."
          />
        </div>

        <section className="py-12 md:py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const categorySlug = encodeURIComponent(product.category.toLowerCase().replace(/\s+/g, "-"));
                const categoryUrl = `/gallery/${categorySlug}`;

                return (
                  <div
                    key={product.id}
                    className="bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Clickable Image Compartment - Links to Category Page */}
                    <Link href={categoryUrl} className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden border-b-4 border-orange-600 p-4 block">
                      <Image
                        src={product.image[0]} 
                        alt={`${product.name} - ${product.category}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        priority={product.id <= 3} // Performance boost: load above-the-fold images faster
                      />
                      
                      <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-medium tracking-wide uppercase">
                        {product.category}
                      </div>
                    </Link>

                    {/* Text Content Blocks */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase block mb-1">
                          SKU: {product.sku}
                        </span>
                        
                        {/* Clickable Product Title - Links to Category Page */}
                        <Link href={categoryUrl} className="block group/title">
                          <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-2 group-hover/title:text-orange-600 group-hover:text-orange-600 transition-colors duration-200">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Bulleted Core Specifications */}
                        <ul className="text-xs text-zinc-600 space-y-1 mt-3 list-disc pl-4">
                          {product.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Industrial Redirection Trigger */}
                      <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                        <Link
                          href={categoryUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-orange-600 hover:text-orange-700 transition-colors"
                        >
                          <span>View Category Images ({product.image.length})</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-zinc-200 text-center">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">
              Custom Powder Formulations & Volume Orders
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Our facilities are fully equipped to manage custom batch tolerances across automotive, industrial valves, structural agricultural components, and specialty goods.
            </p>
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-6 py-5 rounded shadow-sm transition-colors"
            >
              <Link href="/contact">Connect with Technical Team</Link>
            </Button>
          </div>
        </section>

      </div>
    </CustomLayout>
  );
}