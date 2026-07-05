import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomLayout from "@/components/layout/layout";
import PageHeader from "@/components/page-header";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS_DATA } from "@/lib/staticData";

const getSlug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

type Props = {
  params: Promise<{ category: string }>;
};

/* --- Dynamic SEO Engine Integrated with root Layout Template --- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const currentProduct = PRODUCTS_DATA.find((p) => getSlug(p.category) === resolvedParams.category);

  if (!currentProduct) {
    return {
      title: "Category Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const canonicalPath = `/products/${getSlug(currentProduct.category)}`;

  return {
    title: currentProduct.seoTitle,
    description: currentProduct.seoDescription,
    keywords: currentProduct.seoKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${currentProduct.seoTitle} | INTIGRA`,
      description: currentProduct.seoDescription,
      url: `${siteUrl}${canonicalPath}`,
      type: "article",
      images: [
        {
          url: currentProduct.image[0],
          width: 800,
          height: 600,
          alt: currentProduct.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${currentProduct.seoTitle} | INTIGRA`,
      description: currentProduct.seoDescription,
      images: [currentProduct.image[0]],
    },
  };
}

export default async function CategoryGalleryPage({ params }: Props) {
  const resolvedParams = await params;
  const currentProduct = PRODUCTS_DATA.find((p) => getSlug(p.category) === resolvedParams.category);

  if (!currentProduct) {
    return (
      <CustomLayout>
        <div className="py-20 text-center bg-[#0d0d15] text-white">
          <h1 className="text-2xl font-bold">Category Not Found</h1>
          <Link href="/products" className="text-orange-400 mt-4 inline-block underline">
            Return to Gallery
          </Link>
        </div>
      </CustomLayout>
    );
  }

  return (
    <CustomLayout>
      <div className="bg-white min-h-screen text-zinc-900">
        
        {/* Category Header Area */}
        <div className="bg-white">
          <div className="container max-w-7xl mx-auto px-6 pt-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-500 hover:text-orange-500 transition-colors font-ui"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Categories
            </Link>
          </div>
          <PageHeader
            title={`${currentProduct.category} Catalog`}
            description={`Displaying all verified coating runs and component orientations for ${currentProduct.name} (SKU: ${currentProduct.sku}).`}
          />
        </div>

        {/* Gallery Image Grid */}
        <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
          <div className="container max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProduct.image.map((imgUrl, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-none p-5 flex flex-col justify-center items-center reveal"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative w-full aspect-[4/3] bg-slate-50/50 p-2 border border-slate-100 flex items-center justify-center">
                    <Image
                      src={imgUrl}
                      alt={`${currentProduct.name} configuration variant 0${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="mt-4 w-full text-left border-t border-slate-100 pt-3 text-[10px] font-mono tracking-wider text-zinc-400">
                    VISUAL INDEX // CONFIG_0{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Products CTA Banner */}
        <section className="py-16 relative overflow-hidden text-center" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
          <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E3A8A] tracking-[2px] uppercase mb-4">
              Need A Coating Inspection?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              We perform precise dry-film thickness measurements and cross-hatch adhesion tests on all batch runs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-[#1E3A8A] font-ui text-[12px] tracking-[2px] uppercase font-medium transition-all"
              >
                Back to Categories
              </Link>
              <Link
                href="/contact-us"
                className="px-8 py-3 bg-orange-600 text-white font-ui text-[12px] tracking-[2px] uppercase font-medium transition-all hover:bg-orange-700"
              >
                Request Inspection
              </Link>
            </div>
          </div>
        </section>

      </div>
    </CustomLayout>
  );
}