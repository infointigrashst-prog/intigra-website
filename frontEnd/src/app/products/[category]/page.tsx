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
    title: currentProduct.seoTitle, // This hooks into "%s | INTIGRA Powder Coating Rajkot" cleanly
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
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold">Category Not Found</h1>
          <Link href="/products" className="text-orange-600 mt-4 inline-block underline">
            Return to Gallery
          </Link>
        </div>
      </CustomLayout>
    );
  }

  return (
    <CustomLayout>
      <div className="bg-[#f8fafc] min-h-screen text-zinc-900">
        <div className="bg-white border-b border-zinc-200">
          <div className="container max-w-7xl mx-auto px-4 pt-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Categories
            </Link>
          </div>
          <PageHeader
            title={`${currentProduct.category} Catalog`}
            description={`Displaying all verified coating runs and component orientations for ${currentProduct.name} (SKU: ${currentProduct.sku}).`}
          />
        </div>

        {/* Uncropped Grid Layer showing all sub-images */}
        <section className="py-12 md:py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProduct.image.map((imgUrl, index) => (
                <div
                  key={index}
                  className="bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col justify-center items-center"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={imgUrl}
                      alt={`${currentProduct.name} configuration variant 0${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 w-full text-left border-t border-zinc-100 pt-3 text-xs font-mono text-zinc-400">
                    VISUAL INDEX // CONFIG_0{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </CustomLayout>
  );
}