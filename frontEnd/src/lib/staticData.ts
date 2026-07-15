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
  siteUrl: "https://www.intigracoatings.com",
  telephone: "+918128228778",
  telephoneFormatted: "+91 81282 28778",
  alternateTelephone: "+917984528778",
  alternateTelephoneFormatted: "+91 79845 28778",
  email: "info.intigra.shst@gmail.com",
  alternateEmail: "info@shreehariyogi.com",
  address: {
    streetAddress: "Aanand liner gate, Dhwani Industrial area 5",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360024",
    addressCountry: "IN",
    formatted: "Aanand liner gate, Dhwani Industrial area 5, Shree Hari Surface Technology, Veraval (Shapar), Rajkot-360024",
  },
  geo: {
    latitude: 22.1691199,
    longitude: 70.8048364,
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.964458162869!2d70.80483645311745!3d22.1691199272777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958356a0e8a57ef%3A0x9524add0ba5f6cb6!2sIntigra%20Coatings!5e0!3m2!1sen!2sin!4v1765630632650!5m2!1sen!2sin",
  businessHours: "Mon - Sun: 8:30 AM - 7:00 PM (Closed on Wednesday)",
  businessHoursShort: "Mon - Sun: 8:30 AM - 7:00 PM (Wed Closed)",
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
    image: "/images/plant/plant_1.jpeg",
    // image: "/images/plant/automatic-powder-coating-plant-2.jpg",
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
    image: "/images/plant/plant_2.jpeg",
    // image: "/images/plant/automatic-powder-coating-plant-1.jpg",
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
    image: "/images/plant/plant_4.jpeg",
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
    image: "/images/plant/plant_3.jpeg",
    // image: "/images/plant/automatic-powder-coating-plant-1.jpg",
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
  {
    title: "Super Durable Polyesters",
    desc: "Specially formulated for extreme exterior exposures, meeting Qualicoat Class 2 specifications. Ideal for critical architectural profiles requiring 10+ years of weatherability.",
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

export interface IndustryItem {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  accent: string;
  detailedDesc: string;
  benefits: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "automotive",
    icon: "🚗",
    title: "Automotive",
    desc: "Chassis parts, wheel rims, engine covers, bumpers and structural automotive components demanding extreme durability and finish.",
    accent: "#ff6b2b",
    detailedDesc: "Our automotive coating line is engineered to meet strict OEM specifications. From high-tensile structural underbody parts requiring superior stone-chip resistance to exterior panels demanding UV-stable gloss retention, we provide multi-stage pre-treated coatings built to survive harsh road conditions.",
    benefits: [
      "Extreme stone-chip protection",
      "1000+ hours salt-spray resistance",
      "High heat-cycle stability",
      "Underbody corrosion protection"
    ],
    specifications: [
      { label: "Coating Thickness", value: "60 - 90 Microns" },
      { label: "Salt Spray Resistance", value: "1000 Hours (ASTM B117)" },
      { label: "Impact Adhesion", value: "Direct/Reverse > 80 in-lbs" },
      { label: "Curing Temperature", value: "200°C Peak Metal Temp" }
    ],
    applications: [
      "Chassis assemblies",
      "Alloy wheel rims",
      "Suspension arms",
      "Engine covers & brackets",
      "Bumper bars"
    ],
    seoTitle: "Automotive Powder Coating Services Rajkot | INTIGRA",
    seoDescription: "High-durability OEM-spec automotive powder coating in Shapar Rajkot. Salt-spray resistant finishes for chassis, alloy rims, suspension components, and brackets.",
    seoKeywords: [
      "automotive powder coating rajkot",
      "car suspension coating",
      "rim powder coating shapar",
      "rustproof auto parts gujarat"
    ]
  },
  {
    slug: "architecture",
    icon: "🏗️",
    title: "Architecture",
    desc: "Curtain walls, aluminium extrusions, window profiles, structural steelwork and façade cladding with premium weather resistance.",
    accent: "#00c8ff",
    detailedDesc: "Architectural steel and aluminium profiles require long-term protection against UV degradation, humidity, and weather cycles. INTIGRA utilizes high-performance Qualicoat-compliant polyester and PVDF powders that guarantee color and gloss retention for years, keeping structures beautiful and protected.",
    benefits: [
      "Super-durable UV protection",
      "Excellent chalking resistance",
      "Qualicoat performance standards",
      "Vibrant color integrity"
    ],
    specifications: [
      { label: "Coating Thickness", value: "70 - 100 Microns" },
      { label: "UV Resistance", value: "Excellent (Qualicoat Class 2 compatible)" },
      { label: "Cross-Cut Adhesion", value: "Excellent (Class 5B)" },
      { label: "Gloss Level", value: "Matt (10-20%) to High Gloss (>85%)" }
    ],
    applications: [
      "Curtain walls & cladding",
      "Window profiles & extrusions",
      "Fencing & structural gates",
      "Pergolas & outdoor louvers",
      "Façade framework"
    ],
    seoTitle: "Architectural Powder Coating Shapar Rajkot | INTIGRA",
    seoDescription: "Qualicoat-class architectural powder coating services in Rajkot Gujarat. Durable polyester finishes for curtain walls, aluminium windows, and façade frameworks.",
    seoKeywords: [
      "architectural powder coating rajkot",
      "aluminium extrusion coating gujarat",
      "facade metal finish shapar",
      "UV resistant metal coating"
    ]
  },
  {
    slug: "furniture",
    icon: "🪑",
    title: "Furniture",
    desc: "Office furniture frames, garden sets, shelving systems and decorative ironwork with vibrant, chip-resistant finishes.",
    accent: "#00d68f",
    detailedDesc: "Commercial and residential furniture requires a balance of aesthetic appeal and everyday wear resistance. Our furniture coating processes deliver exceptionally smooth finishes, texturing profiles, and rich color depths that protect office chairs, structural shelving, and garden patio furniture from scratches and moisture.",
    benefits: [
      "Exceptional scratch resistance",
      "Hammertone & texture options",
      "Eco-friendly food-contact safety",
      "Seamless paint uniformity"
    ],
    specifications: [
      { label: "Coating Thickness", value: "50 - 70 Microns" },
      { label: "Scratch Resistance", value: "Pencil Hardness > 2H" },
      { label: "Flexibility", value: "Conical Mandrel < 3mm" },
      { label: "Surface Finishes", value: "Matt, Gloss, Structure, Hammertone" }
    ],
    applications: [
      "Office desk frameworks",
      "Outdoor garden furniture",
      "Supermarket shelving displays",
      "Wrought iron tables",
      "Metal cabinets & lockers"
    ],
    seoTitle: "Furniture Metal Coating Services Rajkot | INTIGRA",
    seoDescription: "Premium metal furniture powder coating in Rajkot. Smooth, hammertone, and scratch-resistant finishes for office, garden, and commercial shelving frameworks.",
    seoKeywords: [
      "furniture powder coating rajkot",
      "metal chair paint finish",
      "shelving powder coat shapar",
      "scratch proof office furniture coat"
    ]
  },
  {
    slug: "industrial-machinery",
    icon: "⚙️",
    title: "Industrial Machinery",
    desc: "Valves, flanges, compressor housings, pipe fittings and heavy equipment requiring chemical and abrasion resistance.",
    accent: "#f5c842",
    detailedDesc: "Industrial valves, castings, and pipeline components operate in highly corrosive chemical, fluid, and high-pressure environments. We use heavy-duty epoxy and hybrid powders that form an impenetrable barrier against acids, oils, solvents, and physical impact, ensuring long operational lifetimes.",
    benefits: [
      "Heavy-duty chemical resistance",
      "Thick barrier corrosion protection",
      "Anti-scaling internal coating",
      "Abrasion resistant barrier"
    ],
    specifications: [
      { label: "Coating Thickness", value: "100 - 250 Microns" },
      { label: "Chemical Resistance", value: "Acids, Alkalis, Hydrocarbons, Oils" },
      { label: "Dielectric Strength", value: "Excellent (Electrical barrier)" },
      { label: "Impact Resistance", value: "Direct > 120 in-lbs" }
    ],
    applications: [
      "Valve bodies & castings",
      "Pipe flanges & couplings",
      "Compressor housing modules",
      "Pump casings",
      "Pneumatic cylinders"
    ],
    seoTitle: "Industrial Valve & Machinery Powder Coating Rajkot | INTIGRA",
    seoDescription: "Corrosion-resistant heavy epoxy powder coating for industrial castings, valve bodies, and machinery parts in Shapar Rajkot. High chemical and impact resistance.",
    seoKeywords: [
      "industrial valve coating rajkot",
      "casting parts powder coating gujarat",
      "chemical resistant epoxy shapar",
      "flange protective finishes"
    ]
  },
  {
    slug: "home-appliances",
    icon: "🏠",
    title: "Home Appliances",
    desc: "Refrigerator panels, washing machine cabinets, HVAC units and white goods with seamless, long-lasting factory finishes.",
    accent: "#8b5cf6",
    detailedDesc: "Household appliances require beautiful, easy-to-clean surfaces that stand up to heat, detergents, and physical impacts. Our specialized appliance coating line utilizes high-quality hybrid epoxy-polyester coatings that prevent yellowing, offer excellent stain resistance, and ensure a flawless mirror-like finish.",
    benefits: [
      "Stain & detergent resistance",
      "Anti-yellowing thermal defense",
      "Ultra-smooth gloss consistency",
      "Easy-to-clean hygienic seal"
    ],
    specifications: [
      { label: "Coating Thickness", value: "55 - 75 Microns" },
      { label: "Gloss Level", value: "Semi-Gloss (50-70%) to Mirror Gloss (>90%)" },
      { label: "Detergent Resistance", value: "500 hrs in 5% solution" },
      { label: "Yellowing Resistance", value: "Excellent overbake color stability" }
    ],
    applications: [
      "Refrigerator front panels",
      "Washing machine cabinets",
      "Air conditioner outdoor units",
      "Microwave oven housings",
      "Water heater covers"
    ],
    seoTitle: "Appliance & White Goods Powder Coating Rajkot | INTIGRA",
    seoDescription: "Hygienic, chemical-resistant powder coating for home appliances and HVAC units in Rajkot. Mirror-smooth finishes with color overbake stability.",
    seoKeywords: [
      "home appliance powder coating rajkot",
      "HVAC cabinet coating shapar",
      "refrigerator metal paint gujarat",
      "white goods surface finish"
    ]
  },
  {
    slug: "general-engineering",
    icon: "🔩",
    title: "General Engineering",
    desc: "Custom brackets, fasteners, conveyor parts and OEM components with tight tolerance coating for high-volume production.",
    accent: "#ff6b2b",
    detailedDesc: "Our high-capacity automated conveyor line is perfectly suited to handle custom brackets, fasteners, stamping assemblies, and OEM parts. We offer rapid turnarounds and high-volume consistency with tight coating tolerances to ensure assemblies fit together perfectly after coating.",
    benefits: [
      "Tight coating tolerance control",
      "High volume production capability",
      "Rapid standard turnaround",
      "Batch-to-batch color matching"
    ],
    specifications: [
      { label: "Coating Thickness", value: "45 - 65 Microns" },
      { label: "Batch Consistency", value: "Delta E < 0.5 (Spectrophotometer)" },
      { label: "Curing Cycle", value: "Optimized high-speed convection line" },
      { label: "Adhesion Rating", value: "5B (ASTM D3359)" }
    ],
    applications: [
      "Custom bracket assemblies",
      "Fastener hooks & plates",
      "Conveyor belt frameworks",
      "Stamped sheet metal parts",
      "OEM bracket interfaces"
    ],
    seoTitle: "OEM & General Engineering Powder Coating Rajkot | INTIGRA",
    seoDescription: "High-volume OEM metal finishing and powder coating services in Rajkot Shapar. Precision coating tolerances for custom brackets, stampings, and fasteners.",
    seoKeywords: [
      "general engineering powder coating rajkot",
      "OEM metal finishing shapar",
      "conveyor parts coating gujarat",
      "fastener powder coat rajkot"
    ]
  }
];

