export interface Product {
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

export interface Review {
  author_name: string;
  date: string;
  rating: number;
  text: string;
  initial: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  dataAiHint: string;
}

export interface CoatingType {
  title: string;
  desc: string;
}

export interface StrengthItem {
  icon: string;
  title: string;
  description: string;
}

export interface ApplicationItem {
  icon: string;
  name: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  desc: string;
}

export interface CompanyDetails {
  name: string;
  alternateNames: string[];
  description: string;
  logoUrl: string;
  siteUrl: string;
  telephone: string;
  telephoneFormatted: string;
  alternateTelephone: string;
  alternateTelephoneFormatted: string;
  email: string;
  alternateEmail: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    formatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  mapEmbedUrl: string;
  businessHours: string;
  businessHoursShort: string;
  sameAs: string[];
}

export const COMPANY_DETAILS: CompanyDetails = {
  name: "INTIGRA Coatings",
  alternateNames: [
    "INTIGRA Powder Coating",
    "Shree Hari Yogi Surface Technology",
    "INTIGRA Coatings Rajkot",
  ],
  description:
    "INTIGRA Coatings offers the best powder coating services in Rajkot, Gujarat. Durable, corrosion-resistant, eco-friendly finishes for industrial and automotive applications.",
  logoUrl: "/images/header_logo.png",
  siteUrl: "https://intigracoatings.vercel.app",
  telephone: "+918128228778",
  telephoneFormatted: "+91 81282 28778",
  alternateTelephone: "+917984528778",
  alternateTelephoneFormatted: "+91 79845 28778",
  email: "info.intigra.shst@gmail.com",
  alternateEmail: "info@shreehariyogi.com",
  address: {
    streetAddress: "Plot 2, Veraval Shapar",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360024",
    addressCountry: "IN",
    formatted: "Plot 2, Veraval Shapar, Rajkot, Gujarat, India - 360024",
  },
  geo: {
    latitude: 22.1691199,
    longitude: 70.8048364,
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.964458162869!2d70.80483645311745!3d22.1691199272777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958356a0e8a57ef%3A0x9524add0ba5f6cb6!2sIntigra%20Coatings!5e0!3m2!1sen!2sin!4v1765630632650!5m2!1sen!2sin",
  businessHours: "Thursday - Thursday: 8:30 AM - 7 PM",
  businessHoursShort: "Thu - Thu: 8:30 AM - 7:00 PM",
  sameAs: [
    "https://www.facebook.com/share/1JGgtxVfMZ/",
    "https://www.instagram.com/intigra_coatings?igsh=dmw4OHk2dThvcTB5",
  ],
};

export const PRODUCTS_DATA: Product[] = [
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
    seoDescription:
      "High-performance protective powder coatings for hydrant valves in Rajkot. Superior rust resistance, impact protection, and ASTM standard certified finish variations.",
    seoKeywords: [
      "hydrant valve coating rajkot",
      "fire protection valve finish",
      "industrial anti corrosion coating",
      "powder coated valves gujarat",
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
    seoTitle: "Premium Automotive Component Powder Coating",
    seoDescription:
      "High-durability powder coating finish options for automotive components and custom forged structures. High impact and scratch resistance variants in Gujarat.",
    seoKeywords: [
      "automotive powder coating rajkot",
      "car chassis finish",
      "high tensile alloy coating",
      "scratch resistant auto parts",
    ],
  },
  {
    id: 3,
    name: "Agriculture Equipment Parts",
    image: [
      "/images/products/agriculture-1.jpeg",
      "/images/products/agriculture.jpg",
      "/images/products/agriculture-2.jpg",
      "/images/products/Valve_Casting_Parts5-madrec.jpeg"
    ],
    category: "Agriculture",
    sku: "AG-501",
    features: [
      "Heavy Duty Field Resilience",
      "Wear-Resistant Micro Finish",
      "Optimized Core Geometry",
    ],
    seoTitle: "Heavy-Duty Agriculture Equipment Coatings",
    seoDescription:
      "Engineered industrial protective coatings for agricultural machinery parts. Weatherproof surface seals optimized for severe outdoor field usage across Rajkot.",
    seoKeywords: [
      "agricultural machinery coating",
      "heavy duty field equipment paint rajkot",
      "weatherproof tractor coating",
      "wear resistant micro finish",
    ],
  },
  {
    id: 4,
    name: "Casting Valve Parts",
    image: [
      "/images/products/Valve_Casting_Parts2-madrec.jpg",
      "/images/products/Valve_Casting_Parts3-madrec.jpg",
      "/images/products/Valve_Casting_Parts4-madrec.jpeg",
    ],
    category: "Casting Valve",
    sku: "CV-330",
    features: [
      "Defect-Free Sand Casting",
      "Flawless Machine Threading",
      "Thermal Stress Tested",
    ],
    seoTitle: "Precision Casting Valve Protective Finishes",
    seoDescription:
      "Custom precision layer solutions for intricate casted valve bodies. Total thermal defense, anti-scaling seals, and thread-safe industrial applications.",
    seoKeywords: [
      "casting valve finish rajkot",
      "sand casting protection",
      "thermal stress tested coating",
      "chemical resistant valve surface",
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
    seoTitle: "Food-Safe Powder Coated Kitchenware Products",
    seoDescription:
      "FDA-compliant high thermal threshold powder coating for consumer hardware, appliances, utensils, and stainless items setup solutions in Gujarat.",
    seoKeywords: [
      "food grade safe coating rajkot",
      "kitchenware powder coat",
      "appliance safe surface finish",
      "heat resistant utensil coat",
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
    seoTitle: "Moisture-Barrier Bathroom Accessory Coating",
    seoDescription:
      "Hydrophobic multi-layer protective coating layouts for premium bathroom components. Zero oxidation performance in high humidity locations.",
    seoKeywords: [
      "bathroom accessory powder coat",
      "moisture barrier surface treatment rajkot",
      "anti lime scaling chrome alternative",
      "rustproof plumbing components",
    ],
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    author_name: "Smit Butani",
    date: "a day ago",
    rating: 5,
    text: "One of the best powder coating plants in Rajkot, offering great quality with smooth, long-lasting finishes. Professional team, reliable service, and timely delivery—highly recommended.",
    initial: "S",
  },
  {
    author_name: "Bhut Shreyas",
    date: "a day ago",
    rating: 5,
    text: "Active 9 tank process which gives anti-corrosion property , Dust controlled plant , aesthetic look finish, accuracy in every inch!",
    initial: "B",
  },
  {
    author_name: "Ronak Ghadiya",
    date: "a day ago",
    rating: 5,
    text: "Excellent powder coating quality with perfect paint uniformity and strong adhesion on castings.",
    initial: "R",
  },
  {
    author_name: "Smit Patel",
    date: "5 days ago",
    rating: 5,
    text: "Good quality in work are maintained Good nature of owner and staff Best finished work are provided for all the coating",
    initial: "S",
  },
  {
    author_name: "Svetal Dholariya",
    date: "a day ago",
    rating: 5,
    text: "Very professional metal coating services in Shapar area. The quality control is outstanding.",
    initial: "S",
  },
  {
    author_name: "Dagu Sakariya",
    date: "3 months ago",
    rating: 5,
    text: "Highly durable electrostatic finishes. They did an excellent job on our batch of valves.",
    initial: "D",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    icon: "SprayCan",
    title: "Surface Preparation & Cleaning",
    description:
      "Ensuring optimum adhesion and rust prevention through precise sandblasting and chemical cleaning methods.",
    details: [
      "Abrasive blasting for rust/paint removal",
      "Multi-stage chemical pre-treatment",
      "Clean, profile-ready surface preparation",
    ],
    image: "/images/plant/automatic-powder-coating-plant-2.jpg",
    dataAiHint: "surface preparation and cleaning",
  },
  {
    icon: "Layers",
    title: "Powder Application",
    description:
      "Uniform finish using electrostatic spray technology for precise, durable coating layers.",
    details: [
      "Advanced electrostatic application booths",
      "Consistent film thickness and coverage",
      "Controlled environment for quality output",
    ],
    image: "/images/plant/automatic-powder-coating-plant-1.jpg",
    dataAiHint: "powder coating application",
  },
  {
    icon: "CheckSquare",
    title: "Curing Process",
    description:
      "High-temperature curing to bond powder to the surface for long-lasting performance and strength.",
    details: [
      "Automatic temperature-controlled ovens",
      "Uniform curing for all components",
      "Ensures strong, chip-resistant finish",
    ],
    image: "/images/plant/about.jpeg",
    dataAiHint: "curing process coating strength",
  },
  {
    icon: "PaintBucket",
    title: "Color & Texture Finishing",
    description:
      "Choose from matt, gloss, semi-gloss, metallic, or custom finishes — tailored to your project aesthetics.",
    details: [
      "RAL, Pantone & custom colors",
      "Gloss, matt, texture & metallic finishes",
      "Special effect & bespoke options",
    ],
    image: "/images/plant/automatic-powder-coating-plant-1.jpg",
    dataAiHint: "color texture and finish options",
  },
];

export const COATING_TYPES_DATA: CoatingType[] = [
  {
    title: "Epoxy Coatings",
    desc: "Provides exceptional chemical resistance and durability for indoor components. Excellent adhesion and surface hardness built for industrial machinery and heavy-duty tools.",
  },
  {
    title: "Polyester Finishes",
    desc: "Perfect for outdoor applications with high UV resistance and color retention. Maintains an ultra-durable finish on architectural frameworks and exterior panels.",
  },
  {
    title: "Hybrid (Epoxy-Polyester)",
    desc: "Combines the structural toughness of epoxy with the overbake color stability of polyester. A flexible choice for household appliances and general indoor enclosures.",
  },
  {
    title: "Hammertone & Textures",
    desc: "Creates a decorative textured profile that effectively masks underlying casting flaws. Offers a sophisticated, rugged look for electrical boxes and custom enclosures.",
  },
  {
    title: "High-Heat Formulations",
    desc: "Specifically engineered to withstand extreme thermal fluctuations without peeling. Ideal for exhaust system configurations, manifolds, and processing equipment.",
  },
];

export const APPLICATIONS_DATA: ApplicationItem[] = [
  { icon: "Bike", name: "Automotive Parts" },
  { icon: "Settings", name: "Industrial Equipment" },
  { icon: "Fence", name: "Architectural Elements" },
  { icon: "Aperture", name: "Consumer Products" },
];

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    icon: "Zap",
    title: "Modern Powder Coating Facility",
    description:
      "Equipped with advanced coating lines and precision machinery for superior, consistent finishes every time.",
  },
  {
    icon: "Users",
    title: "Skilled Technical Team",
    description:
      "Our experienced professionals bring expertise and attention to detail to every project, ensuring quality and reliability.",
  },
  {
    icon: "ShieldCheck",
    title: "Strong Quality Checks & Process Control",
    description:
      "Each stage undergoes rigorous quality checks for coating thickness, adhesion, and surface finish to meet high standards.",
  },
  {
    icon: "Clock",
    title: "Fast Turnaround & Consistent Results",
    description:
      "We deliver projects on time without compromising finish quality — reliable results, every single batch.",
  },
];

export const HOME_BENEFITS_DATA: BenefitItem[] = [
  {
    icon: "ShieldCheck",
    title: "Durable & Corrosion-Resistant Coatings",
    desc: "Engineered for long-term protection against corrosion, abrasion, and extreme weather — ensuring surfaces stay stronger for longer.",
  },
  {
    icon: "Leaf",
    title: "Eco-Friendly Powder Technology",
    desc: "Sustainable, solvent-free powder coatings that reduce emissions and waste while maintaining superior quality and finish.",
  },
  {
    icon: "Palette",
    title: "Custom Colors & Finish Options",
    desc: "From smooth matte to metallic gloss, choose from a vast palette of colors and finishes tailored to your brand’s design needs.",
  },
  {
    icon: "Zap",
    title: "Advanced Application & Quality Standards",
    desc: "Delivered through precision application systems and strict quality checks for consistent, flawless, and durable coating performance.",
  },
];

export const SERVICES_BENEFITS_DATA: BenefitItem[] = [
  {
    icon: "ShieldCheck",
    title: "Corrosion & Weather Shielding",
    desc: "Engineered layers shield substrates against moisture crystallization and rust creepage across highly humid settings.",
  },
  {
    icon: "Zap",
    title: "Extended Component Lifespan",
    desc: "Advanced therapeutic thermal cross-linking ensures a highly flexible finish that minimizes impact splitting.",
  },
  {
    icon: "Palette",
    title: "Flawless Coating Uniformity",
    desc: "Maintains tightly managed powder dispersion patterns preventing unwanted corner-builds or localized runs.",
  },
  {
    icon: "CheckCircle",
    title: "Eco-Conscious Low-Waste Line",
    desc: "Sustainable, solvent-free oversight allowing complete reclamation and reduction of operational carbon footprints.",
  },
];
