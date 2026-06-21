import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomLayout from "@/components/layout/layout";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS_DATA } from "@/lib/staticData";


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
    canonical: "/products",
  },
  openGraph: {
    title: "Industrial Powder Coating Product Catalog | INTIGRA",
    description: "Explore our full industrial application catalog gallery in Rajkot, Gujarat. Precision finishes engineered for maximum structural performance.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/products`,
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
              {PRODUCTS_DATA.map((product) => {
                const categorySlug = encodeURIComponent(product.category.toLowerCase().replace(/\s+/g, "-"));
                const categoryUrl = `/products/${categorySlug}`;

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
              <Link href="/contact-us">Connect with Technical Team</Link>
            </Button>
          </div>
        </section>

      </div>
    </CustomLayout>
  );
}