"use client";

import Image from "next/image";
import PageHeader from "@/components/page-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import CustomLayout from "@/components/layout/layout";

const projects = [
  {
    id: 1,
    title: "Hydrant Valve Coating",
    category: "Hydrant Valve",
    description:
      "High-performance powder coating for hydrant valves, providing superior corrosion resistance and long-lasting durability.",
    imageUrl: "/images/products/hydrant-valve.jpg",
    dataAiHint: "hydrant valve",
  },
  {
    id: 2,
    title: "Automobile Components",
    category: "Auto Mobile",
    description:
      "Premium powder-coated automotive parts with excellent finish, scratch resistance, and weather protection.",
    imageUrl: "/images/products/automobile-1.jpeg",
    dataAiHint: "automobile parts",
  },
  {
    id: 3,
    title: "Agriculture Equipment",
    category: "Agriculture",
    description:
      "Durable coatings for agricultural machinery and equipment designed to withstand harsh outdoor environments.",
    imageUrl: "/images/products/agriculture-1.jpeg",
    dataAiHint: "agriculture equipment",
  },
  {
    id: 4,
    title: "Casting Valve Components",
    category: "Casting Valve",
    description:
      "Precision powder coating solutions for casting valve parts ensuring corrosion protection and aesthetic appeal.",
    imageUrl: "/images/products/Valve_Casting_Parts2-madrec.jpg",
    dataAiHint: "casting valve",
  },
  {
    id: 5,
    title: "Kitchen Ware Collection",
    category: "Kitchen Ware",
    description:
      "Elegant and food-safe powder-coated kitchenware with smooth finishes and excellent wear resistance.",
    imageUrl: "/images/products/kitchen-ware.jpg",
    dataAiHint: "kitchen utensils",
  },
  {
    id: 6,
    title: "Bath Accessories",
    category: "Bath Accessories",
    description:
      "Stylish powder-coated bathroom accessories featuring moisture resistance and long-lasting finish quality.",
    imageUrl: "/images/products/bath-accessories.jpg",
    dataAiHint: "bath accessories",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <CustomLayout>
      <PageHeader
        title="Our Project Gallery"
        description="Explore a selection of our finest powder coating work. See the quality, versatility, and stunning finishes we deliver for various applications."
      />

      {/* Category Filter */}
      <section className="py-6 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100">
        <div className="container max-w-screen-xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${
                  selectedCategory === cat
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-800 hover:bg-orange-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-5 md:py-16 bg-gray-50">
        <div className="container max-w-screen-xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} - ${project.category} powder coating project`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                  />
                  <span className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {project.category}
                  </span>
                </div>
                <CardHeader className="px-4 pt-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-1">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4 text-gray-700 text-sm">
                  {project.description}
                </CardContent>
                <CardFooter className="px-4 pb-4">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    <Link
                      href={`/contact?project_inquiry=${encodeURIComponent(project.title)}`}
                    >
                      Inquire About Similar Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 md:py-16 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 text-center">
        <div className="container max-w-screen-xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
            Let's discuss how INTIGRA can bring your vision to life with our
            expert powder coating services.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </CustomLayout>
  );
}
