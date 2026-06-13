"use client";

import Image from "next/image";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CustomLayout from "@/components/layout/layout";
import { ArrowUpRight } from "lucide-react";

// Assuming these images are sourced correctly. The user can reference image_0.png, but for Next.js, they would be paths from the public directory.
const projects = [
  {
    id: 1,
    title: "Hydrant Valve Coating",
    category: "Hydrant Valve",
    description: "High-performance powder coating for hydrant valves, providing superior corrosion resistance and long-lasting durability.",
    imageUrl: "/images/products/hydrant-valve.jpg", // Replace with actual paths, maybe referencing the files like '/images/products/image_0.png' if that was organized that way.
    dataAiHint: "hydrant valve"
  },
  {
    id: 2,
    title: "Automobile Components",
    category: "Auto Mobile",
    description: "Premium powder-coated automotive parts with excellent finish, scratch resistance, and weather protection.",
    imageUrl: "/images/products/automobile-1.jpeg", // Replace with '/images/products/image_0.png' etc
    dataAiHint: "automobile parts"
  },
  {
    id: 3,
    title: "Agriculture Equipment",
    category: "Agriculture",
    description: "Durable coatings for agricultural machinery and equipment designed to withstand harsh outdoor environments.",
    imageUrl: "/images/products/agriculture-1.jpeg", // Replace with '/images/products/image_0.png' etc
    dataAiHint: "agriculture equipment"
  },
  {
    id: 4,
    title: "Casting Valve Components",
    category: "Casting Valve",
    description: "Precision powder coating solutions for casting valve parts ensuring corrosion protection and aesthetic appeal.",
    imageUrl: "/images/products/Valve_Casting_Parts2-madrec.jpg", // Replace with '/images/products/image_0.png' etc
    dataAiHint: "casting valve"
  },
  {
    id: 5,
    title: "Kitchen Ware Collection",
    category: "Kitchen Ware",
    description: "Elegant and food-safe powder-coated kitchenware with smooth finishes and excellent wear resistance.",
    imageUrl: "/images/products/kitchen-ware.jpg", // Replace with '/images/products/image_0.png' etc
    dataAiHint: "kitchen utensils"
  },
  {
    id: 6,
    title: "Bath Accessories",
    category: "Bath Accessories",
    description: "Stylish powder-coated bathroom accessories featuring moisture resistance and long-lasting finish quality.",
    imageUrl: "/images/products/bath-accessories.jpg", // Replace with '/images/products/image_0.png' etc
    dataAiHint: "bath accessories"
  }
];

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
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden border-b-4 border-orange-600 p-4"> {/* Added p-4 here for whitespace around contained images */}
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} - ${project.category}`}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105" // Changed 'object-cover' to 'object-contain'
                      data-ai-hint={project.dataAiHint}
                    />
                    
                    <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-medium tracking-wide uppercase">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-100">
                      <Link
                        href={`/contact?project_inquiry=${encodeURIComponent(project.title)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        <span>View Technical Specs</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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