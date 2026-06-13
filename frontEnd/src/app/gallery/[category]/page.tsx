import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomLayout from "@/components/layout/layout";
import PageHeader from "@/components/page-header";
import { ArrowLeft } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string[];
  category: string;
  sku: string;
  features: string[];
  seoTitle: string; // Keep this clean for the layout template injection
  seoDescription: string;
  seoKeywords: string[];
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
    seoTitle: "Industrial Hydrant Valve Powder Coating Services",
    seoDescription: "High-performance protective powder coatings for hydrant valves in Rajkot. Superior rust resistance, impact protection, and ASTM standard certified finish variations.",
    seoKeywords: ["hydrant valve coating rajkot", "fire protection valve finish", "industrial anti corrosion coating", "powder coated valves gujarat"],
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
    seoTitle: "Premium Automotive Component Powder Coating",
    seoDescription: "High-durability powder coating finish options for automotive components and custom forged structures. High impact and scratch resistance variants in Gujarat.",
    seoKeywords: ["automotive powder coating rajkot", "car chassis finish", "high tensile alloy coating", "scratch resistant auto parts"],
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
    seoTitle: "Heavy-Duty Agriculture Equipment Coatings",
    seoDescription: "Engineered industrial protective coatings for agricultural machinery parts. Weatherproof surface seals optimized for severe outdoor field usage across Rajkot.",
    seoKeywords: ["agricultural machinery coating", "heavy duty field equipment paint rajkot", "weatherproof tractor coating", "wear resistant micro finish"],
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
    seoTitle: "Precision Casting Valve Protective Finishes",
    seoDescription: "Custom precision layer solutions for intricate casted valve bodies. Total thermal defense, anti-scaling seals, and thread-safe industrial applications.",
    seoKeywords: ["casting valve finish rajkot", "sand casting protection", "thermal stress tested coating", "chemical resistant valve surface"],
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
    seoTitle: "Food-Safe Powder Coated Kitchenware Products",
    seoDescription: "FDA-compliant high thermal threshold powder coating for consumer hardware, appliances, utensils, and stainless items setup solutions in Gujarat.",
    seoKeywords: ["food grade safe coating rajkot", "kitchenware powder coat", "appliance safe surface finish", "heat resistant utensil coat"],
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
    seoTitle: "Moisture-Barrier Bathroom Accessory Coating",
    seoDescription: "Hydrophobic multi-layer protective coating layouts for premium bathroom components. Zero oxidation performance in high humidity locations.",
    seoKeywords: ["bathroom accessory powder coat", "moisture barrier surface treatment rajkot", "anti lime scaling chrome alternative", "rustproof plumbing components"],
  },
];

const getSlug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

type Props = {
  params: Promise<{ category: string }>;
};

/* --- Dynamic SEO Engine Integrated with root Layout Template --- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const currentProduct = products.find((p) => getSlug(p.category) === resolvedParams.category);

  if (!currentProduct) {
    return {
      title: "Category Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const canonicalPath = `/gallery/${getSlug(currentProduct.category)}`;

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
  const currentProduct = products.find((p) => getSlug(p.category) === resolvedParams.category);

  if (!currentProduct) {
    return (
      <CustomLayout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold">Category Not Found</h1>
          <Link href="/gallery" className="text-orange-600 mt-4 inline-block underline">
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
              href="/gallery"
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