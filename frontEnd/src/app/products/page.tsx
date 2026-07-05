import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomLayout from "@/components/layout/layout";
import PageHeader from "@/components/page-header";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS_DATA } from "@/lib/staticData";

/* --- Main Gallery Catalog Index SEO Metadata --- */
export const metadata: Metadata = {
  title: "Industrial Powder Coating Product Catalog",
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
      <div className="bg-white text-zinc-900 font-sans antialiased">
        
        <PageHeader
          title="Range of Coating Products"
          description="Explore our specialized powder coating applications across multiple sectors. Engineered for high performance, safety compliance, and maximum durability."
        />

        {/* Gallery Grid Section */}
        <section className="py-10 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
          <div className="container max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS_DATA.map((product, i) => {
                const categorySlug = encodeURIComponent(product.category.toLowerCase().replace(/\s+/g, "-"));
                const categoryUrl = `/products/${categorySlug}`;

                return (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200 hover:border-orange-500/40 rounded-none overflow-hidden transition-all duration-300 flex flex-col justify-between group reveal"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-500" />

                    {/* Image Container */}
                    <Link href={categoryUrl} className="relative w-full aspect-[4/3] bg-slate-50/50 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100 block">
                      <Image
                        src={product.image[0]} 
                        alt={`${product.name} - ${product.category}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={product.id <= 3}
                      />
                      
                      <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-none text-xs font-ui tracking-wide uppercase">
                        {product.category}
                      </div>
                    </Link>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow justify-between text-left">
                      <div>
                        <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase block mb-1">
                          SKU: {product.sku}
                        </span>
                        
                        <Link href={categoryUrl} className="block group/title">
                          <h3 className="font-display text-2xl text-[#1E3A8A] group-hover/title:text-orange-500 group-hover:text-orange-500 transition-colors duration-200 tracking-[0.5px] uppercase mb-3">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Bulleted Core Specifications */}
                        <ul className="text-xs text-slate-500 space-y-1.5 mt-3 mb-6 pl-4 list-disc">
                          {product.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Trigger */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={categoryUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-orange-500 hover:text-orange-600 transition-colors"
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

        {/* Custom Order Callout Section */}
        <section className="py-10 relative overflow-hidden text-center" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
          <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E3A8A] tracking-[2px] uppercase mb-4">
              Custom Powder Formulations & Volume Orders
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Our facilities are fully equipped to manage custom batch tolerances across automotive, industrial valves, structural agricultural components, and specialty goods.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui text-[12px] tracking-[2px] uppercase font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/25"
              style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
            >
              Connect with Technical Team
            </Link>
          </div>
        </section>

      </div>
    </CustomLayout>
  );
}