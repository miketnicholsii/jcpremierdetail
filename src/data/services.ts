// JC Premier Detail - Complete Services & Vehicle Categories Data
// Phase 0-3: Locked Client Input + Service Architecture + Asset-Based Breakdown

// ============= VEHICLE CATEGORIES (Asset Types) =============
export interface VehicleCategory {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  challenges: string[];
  recommendedServices: string[];
  image?: string;
}

export const vehicleCategories: VehicleCategory[] = [
  {
    id: "cars-sedans",
    name: "Cars & Sedans",
    slug: "cars-sedans",
    shortDescription: "Daily drivers and performance vehicles",
    longDescription: "From daily commuters to high-performance sports cars, passenger vehicles require protection tailored to their use. Daily drivers face constant exposure to UV, road grime, and environmental contaminants. Performance cars demand flawless finishes that showcase their design while protecting against track debris and spirited driving conditions.",
    icon: "Car",
    challenges: [
      "Daily UV exposure causes paint oxidation",
      "Road salt and debris damage clear coat",
      "Frequent washing creates swirl marks",
      "Parking lot hazards and door dings",
    ],
    recommendedServices: ["ceramic-coating", "paint-correction", "interior-detailing", "window-tint"],
  },
  {
    id: "trucks-suvs",
    name: "Trucks & SUVs",
    slug: "trucks-suvs",
    shortDescription: "Work trucks, personal trucks, and family SUVs",
    longDescription: "Trucks and SUVs serve demanding roles—from job site workhorses to family transportation. Their larger surface areas, bed liners, and elevated ride heights create unique challenges. Whether you're hauling equipment or hauling kids, these vehicles need protection that matches their heavy-duty purpose.",
    icon: "Truck",
    challenges: [
      "Larger surface area requires more material",
      "Truck beds face extreme wear and chemical exposure",
      "Lifted vehicles collect more road debris",
      "Work use means harsher operating conditions",
    ],
    recommendedServices: ["ceramic-coating", "undercoating", "interior-detailing", "exterior-detailing"],
  },
  {
    id: "off-road",
    name: "Off-Road Vehicles",
    slug: "off-road",
    shortDescription: "Side-by-sides, 4x4 Jeeps, and off-road trucks",
    longDescription: "Off-road vehicles aren't scaled-up cars—they're purpose-built machines designed for abuse. Side-by-sides, 4x4 Jeeps, and off-road trucks face mud, water, rocks, and extreme environments that demand specialized protection. Standard automotive products and processes simply don't hold up to trail conditions.",
    icon: "Mountain",
    challenges: [
      "Constant mud, water, and debris exposure",
      "Undercarriage takes heavy impact and abrasion",
      "Chemical exposure from trail conditions",
      "Extended environmental exposure between washes",
    ],
    recommendedServices: ["undercoating", "ceramic-coating", "exterior-detailing"],
  },
  {
    id: "boats",
    name: "Boats",
    slug: "boats",
    shortDescription: "Marine vessels requiring specialized protection",
    longDescription: "Marine environments present the harshest conditions for any finish. Salt water, constant sun exposure, and oxidation attack gel coats and painted surfaces relentlessly. Marine ceramic coatings and specialized detailing protocols protect your investment from the unique demands of life on the water.",
    icon: "Anchor",
    challenges: [
      "Salt water corrosion and mineral deposits",
      "Constant UV exposure causes gel coat breakdown",
      "Water line staining and oxidation",
      "Multiple material types (gel coat, vinyl, metal, canvas)",
    ],
    recommendedServices: ["ceramic-coating", "exterior-detailing"],
  },
  {
    id: "rv-campers",
    name: "RVs & Campers",
    slug: "rv-campers",
    shortDescription: "Travel trailers, fifth wheels, motorhomes, camper vans, and pop-ups",
    longDescription: "RVs and campers—whether travel trailers, fifth wheels, motorhomes, camper vans, or pop-up campers—present unique challenges due to their size, material variety, and long-term exposure. These aren't just vehicles; they're mobile living spaces that face extended periods of sun, weather, and road conditions. Protection strategies must account for multiple surface types and large coverage areas.",
    icon: "Caravan",
    challenges: [
      "Massive surface areas require extended application time",
      "Multiple materials: fiberglass, aluminum, rubber, decals",
      "Extended stationary periods lead to oxidation",
      "Roof and seam areas face concentrated weathering",
    ],
    recommendedServices: ["ceramic-coating", "exterior-detailing", "interior-detailing"],
  },
  {
    id: "heavy-equipment",
    name: "Heavy Equipment & Machinery",
    slug: "heavy-equipment",
    shortDescription: "Construction equipment, commercial machinery, and industrial assets",
    longDescription: "Heavy equipment operates in conditions no passenger vehicle would survive. Construction machinery, commercial equipment, and industrial assets face constant exposure to chemicals, abrasives, and extreme wear. This is a separate category entirely—not automotive-adjacent, not RV-adjacent. Ceramic coating heavy equipment is specialized work we've recently expanded into, bringing real protection to real work machines.",
    icon: "HardHat",
    challenges: [
      "Industrial chemical and fuel exposure",
      "Heavy abrasion from work environments",
      "Extended outdoor storage and exposure",
      "Hydraulic fluid and grease contamination",
    ],
    recommendedServices: ["ceramic-coating", "undercoating", "exterior-detailing"],
  },
];

// ============= SIZE PRICING TIERS =============
export interface PriceTier {
  small: number;
  medium: number;
  large: number;
  xl: number;
  xxl?: number; // For RVs, heavy equipment
  boat?: number; // Marine-specific pricing
}

export interface ServicePackage {
  id: string;
  name: string;
  duration?: string;
  description: string;
  features: string[];
  prices: PriceTier;
  popular?: boolean;
  vehicleTypes?: string[]; // Which vehicle categories this applies to
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: "surface-protection" | "surface-correction" | "exterior-systems" | "interior-systems" | "glass-visibility";
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  packages: ServicePackage[];
  applicableVehicles: string[]; // Which vehicle categories this applies to
}

// ============= SERVICES (Organized by Functional Groups - Phase 2) =============
export const services: Service[] = [
  // === SURFACE PROTECTION ===
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    slug: "ceramic-coating",
    category: "surface-protection",
    shortDescription: "Long-lasting protection with a brilliant, hydrophobic finish for any asset.",
    longDescription: "Our professional-grade ceramic coatings bond at the molecular level to create an incredibly durable protective layer. This advanced nanotechnology shields surfaces from UV rays, chemical stains, and environmental contaminants. We apply ceramic coatings across all vehicle types—from daily drivers to heavy equipment—adapting our process and products to each asset's unique requirements.",
    icon: "Shield",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "boats", "rv-campers", "heavy-equipment"],
    benefits: [
      "Exceptional UV protection prevents fading",
      "Hydrophobic surface repels water and contaminants",
      "Easier cleaning and maintenance",
      "Enhanced gloss and depth of color",
      "Protection against chemical stains and etching",
      "Long-lasting durability (1-5+ years)",
    ],
    process: [
      "Thorough inspection and condition assessment",
      "Deep wash and full decontamination",
      "Paint correction (if needed) to remove defects",
      "IPA wipe-down to prepare surface",
      "Careful application of ceramic coating",
      "Infrared curing for optimal bonding",
      "Final inspection and quality check",
    ],
    faqs: [
      { question: "How long does ceramic coating last?", answer: "Depending on the package, our ceramic coatings last from 12 months (Bronze) up to 5+ years (Platinum), with proper maintenance." },
      { question: "Can ceramic coating be applied to boats and RVs?", answer: "Absolutely. We use marine-grade and specialty coatings designed for each surface type. Gel coat, fiberglass, and painted metal all require different approaches." },
      { question: "Do you coat heavy equipment?", answer: "Yes. We've recently expanded ceramic coating to heavy equipment and machinery. Industrial environments demand protection, and ceramic coatings reduce cleaning time and protect against chemical exposure." },
    ],
    packages: [
      {
        id: "bronze",
        name: "Bronze",
        duration: "12-Month Protection",
        description: "Entry-level protection perfect for leased vehicles or budget-conscious owners.",
        features: ["1-year ceramic coating", "Light paint enhancement", "Hydrophobic protection", "UV protection"],
        prices: { small: 425, medium: 550, large: 700, xl: 850, xxl: 1200, boat: 800 },
      },
      {
        id: "silver",
        name: "Silver",
        duration: "2-Year Protection",
        description: "Enhanced protection with improved durability and gloss.",
        features: ["2-year ceramic coating", "Single-stage paint correction", "Enhanced hydrophobic effect", "Chemical resistance", "UV protection"],
        prices: { small: 825, medium: 950, large: 1100, xl: 1300, xxl: 1800, boat: 1400 },
        popular: true,
      },
      {
        id: "gold",
        name: "Gold",
        duration: "5-Year Protection",
        description: "Premium protection for enthusiasts who demand the best.",
        features: ["5-year ceramic coating", "Two-stage paint correction", "Maximum hydrophobic effect", "Superior chemical resistance", "Enhanced UV protection", "Trim coating included"],
        prices: { small: 1100, medium: 1250, large: 1450, xl: 1700, xxl: 2400, boat: 2000 },
      },
      {
        id: "platinum",
        name: "Platinum",
        duration: "5+ Year Protection",
        description: "The ultimate protection package with our most durable coating.",
        features: ["5+ year ceramic coating", "Full paint correction", "Maximum hardness (9H)", "Premium hydrophobic effect", "Complete chemical resistance", "Full trim and wheel coating", "Annual maintenance included"],
        prices: { small: 1200, medium: 1400, large: 1650, xl: 1900, xxl: 3000, boat: 2500 },
      },
    ],
  },
  {
    id: "undercoating",
    name: "Undercoating",
    slug: "undercoating",
    category: "surface-protection",
    shortDescription: "Corrosion protection and abrasion resistance for undercarriage components.",
    longDescription: "Undercoating protects the areas you can't see but can't afford to neglect. Whether fighting road salt corrosion on a daily driver or protecting against mud, water, and rock impact on an off-road rig, professional undercoating extends vehicle life and prevents costly repairs. This isn't just spray-and-pray—we prep, clean, and apply with purpose.",
    icon: "ShieldCheck",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "heavy-equipment"],
    benefits: [
      "Prevents rust and corrosion from road salt",
      "Protects against rock chips and road debris",
      "Reduces road noise and vibration",
      "Extends vehicle and equipment lifespan",
      "Essential for off-road vehicles",
    ],
    process: [
      "Undercarriage inspection and assessment",
      "High-pressure cleaning to remove debris",
      "Rust treatment on existing corrosion",
      "Surface preparation and masking",
      "Professional undercoating application",
      "Final inspection and documentation",
    ],
    faqs: [
      { question: "How often should undercoating be reapplied?", answer: "For daily drivers, every 2-3 years. For off-road vehicles, annually or after heavy trail seasons." },
      { question: "Is undercoating necessary in South Carolina?", answer: "While we don't have heavy salt, humidity causes corrosion, and off-road use accelerates wear. Undercoating provides valuable protection regardless of climate." },
      { question: "Do you undercoat heavy equipment?", answer: "Yes. Industrial equipment benefits significantly from corrosion protection, especially equipment stored outdoors or used in wet/muddy conditions." },
    ],
    packages: [
      {
        id: "standard",
        name: "Standard Undercoating",
        description: "Complete undercarriage protection for daily drivers.",
        features: ["Full undercarriage cleaning", "Rust treatment", "Professional undercoating application", "Wheel wells included"],
        prices: { small: 250, medium: 350, large: 450, xl: 550, xxl: 800 },
      },
      {
        id: "offroad",
        name: "Off-Road Package",
        description: "Heavy-duty protection for trail-ready vehicles.",
        features: ["Everything in Standard", "Extra-thick application", "Skid plate coating", "Frame rail treatment", "Suspension component protection"],
        prices: { small: 400, medium: 500, large: 650, xl: 800, xxl: 1100 },
        popular: true,
      },
    ],
  },

  // === SURFACE CORRECTION ===
  {
    id: "paint-correction",
    name: "Paint Correction",
    slug: "paint-correction",
    category: "surface-correction",
    shortDescription: "Remove swirls, scratches, and imperfections to restore your paint.",
    longDescription: "Paint correction is the art of removing imperfections from your vehicle's clear coat through meticulous machine polishing. Our skilled technicians use advanced techniques to eliminate swirl marks, scratches, water spots, and oxidation. This is essential prep before any coating—you don't seal defects under protection.",
    icon: "Sparkles",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "boats", "rv-campers"],
    benefits: [
      "Removes 90%+ of swirl marks and scratches",
      "Restores original paint clarity and depth",
      "Increases vehicle resale value",
      "Prepares surface for coating application",
      "Corrects dealer-installed damage",
      "Removes water spots and oxidation",
    ],
    process: [
      "Paint thickness measurement",
      "Wash and full decontamination",
      "Clay bar treatment",
      "Defect assessment under proper lighting",
      "Multi-stage machine polishing",
      "Final refinement and inspection",
    ],
    faqs: [
      { question: "Will paint correction damage my clear coat?", answer: "When done properly by trained professionals, paint correction is safe. We measure paint thickness before and monitor throughout the process." },
      { question: "How long does paint correction take?", answer: "A full paint correction typically takes 8-12 hours depending on vehicle size and condition. We never rush the process." },
      { question: "Should paint correction be done before ceramic coating?", answer: "Yes. We always correct paint before coating—you want to seal perfection, not defects." },
    ],
    packages: [
      {
        id: "single-stage",
        name: "Single-Stage Correction",
        duration: "1-Step Process",
        description: "Light correction for minor swirls and enhance gloss.",
        features: ["One-stage polishing", "60-70% defect removal", "Light swirl removal", "Gloss enhancement"],
        prices: { small: 300, medium: 400, large: 500, xl: 600, xxl: 900, boat: 600 },
      },
      {
        id: "two-stage",
        name: "Two-Stage Correction",
        duration: "2-Step Process",
        description: "Comprehensive correction for moderate defects.",
        features: ["Two-stage polishing", "80-90% defect removal", "Swirl mark elimination", "Scratch removal", "Water spot removal", "Final polish"],
        prices: { small: 500, medium: 600, large: 750, xl: 900, xxl: 1400, boat: 1000 },
        popular: true,
      },
      {
        id: "full-correction",
        name: "Full Correction",
        duration: "3+ Step Process",
        description: "Maximum correction for heavily damaged or neglected paint.",
        features: ["Multi-stage polishing", "95%+ defect removal", "Deep scratch removal", "Heavy oxidation correction", "Wet sanding if needed", "Showroom finish"],
        prices: { small: 700, medium: 850, large: 1000, xl: 1200, xxl: 1800, boat: 1400 },
      },
    ],
  },

  // === EXTERIOR SYSTEMS ===
  {
    id: "exterior-detailing",
    name: "Exterior Detailing",
    slug: "exterior-detailing",
    category: "exterior-systems",
    shortDescription: "Professional wash and protection for a stunning finish.",
    longDescription: "Our exterior detailing goes far beyond a regular car wash. We use premium products and proven techniques to safely clean, decontaminate, and protect your vehicle's exterior surfaces. This applies to every asset type—from daily drivers to boats and RVs—with process adjustments for each.",
    icon: "Droplets",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "boats", "rv-campers", "heavy-equipment"],
    benefits: [
      "Safe, scratch-free washing technique",
      "Removes bonded contaminants",
      "Protects paint from elements",
      "Restores tire and trim appearance",
      "Cleans wheels and wheel wells",
      "Enhances overall vehicle appearance",
    ],
    process: [
      "Pre-rinse and foam cannon",
      "Two-bucket wash method",
      "Wheel and tire cleaning",
      "Clay bar decontamination (if needed)",
      "Paint sealant or wax application",
      "Tire dressing and trim restoration",
      "Glass cleaning and water repellent",
    ],
    faqs: [
      { question: "How is this different from a regular car wash?", answer: "We use pH-balanced products, proper techniques, and hand-dry with microfiber towels to prevent scratches and swirls that automatic washes cause." },
      { question: "Do you detail boats and RVs?", answer: "Yes. We adapt our process for each surface type—gel coat requires different products than automotive paint." },
      { question: "Can you detail heavy equipment?", answer: "Absolutely. We clean and protect equipment surfaces, making maintenance easier and extending equipment life." },
    ],
    packages: [
      {
        id: "bronze",
        name: "Bronze Wash",
        description: "Premium hand wash with basic protection.",
        features: ["Hand wash", "Wheel cleaning", "Tire dressing", "Window cleaning", "Quick interior wipe"],
        prices: { small: 35, medium: 50, large: 75, xl: 100, xxl: 200, boat: 150 },
      },
      {
        id: "silver",
        name: "Silver Detail",
        description: "Complete exterior care with lasting protection.",
        features: ["Everything in Bronze", "Clay bar treatment", "Paint sealant", "Trim restoration", "Engine bay rinse", "Door jamb cleaning"],
        prices: { small: 125, medium: 175, large: 225, xl: 300, xxl: 500, boat: 400 },
        popular: true,
      },
      {
        id: "gold",
        name: "Gold Detail",
        description: "Show-quality exterior with premium protection.",
        features: ["Everything in Silver", "Light paint enhancement", "Wheel coating", "Glass sealant", "Exhaust tip polishing", "Trim coating"],
        prices: { small: 225, medium: 300, large: 400, xl: 500, xxl: 800, boat: 650 },
      },
    ],
  },

  // === INTERIOR SYSTEMS ===
  {
    id: "interior-detailing",
    name: "Interior Detailing",
    slug: "interior-detailing",
    category: "interior-systems",
    shortDescription: "Deep cleaning and conditioning for a pristine cabin.",
    longDescription: "Our interior detailing services restore your vehicle's cabin to showroom condition. From deep carpet extraction to leather conditioning, we meticulously clean and protect every surface. This extends to RV interiors, boat cabins, and truck cabs—any enclosed space where you spend time.",
    icon: "Armchair",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "boats", "rv-campers"],
    benefits: [
      "Removes allergens and bacteria",
      "Eliminates odors at the source",
      "Protects and conditions leather",
      "Restores fabric and carpet",
      "Cleans hard-to-reach areas",
      "UV protection for dashboard and trim",
    ],
    process: [
      "Complete interior vacuum",
      "Carpet and upholstery extraction",
      "Leather cleaning and conditioning",
      "Dashboard and trim detailing",
      "Glass cleaning (interior)",
      "Air vent and crevice cleaning",
      "Final inspection and scent treatment",
    ],
    faqs: [
      { question: "How often should I detail my interior?", answer: "We recommend a full interior detail every 4-6 months, with regular maintenance cleaning in between." },
      { question: "Can you remove pet hair?", answer: "Yes. We have specialized tools and techniques specifically for removing stubborn pet hair from all surfaces." },
      { question: "Do you detail RV and boat interiors?", answer: "Yes. RV and boat interiors often have unique materials—we adjust our products and process accordingly." },
    ],
    packages: [
      {
        id: "silver",
        name: "Silver Interior",
        description: "Essential interior cleaning for regular maintenance.",
        features: ["Full vacuum", "Wipe-down of all surfaces", "Window cleaning", "Light stain removal", "Air freshener"],
        prices: { small: 75, medium: 100, large: 125, xl: 150, xxl: 300, boat: 200 },
      },
      {
        id: "gold",
        name: "Gold Interior",
        description: "Deep cleaning for a thorough refresh.",
        features: ["Everything in Silver", "Deep carpet extraction", "Upholstery shampooing", "Leather cleaning & conditioning", "Detailed crevice cleaning", "UV protection applied"],
        prices: { small: 175, medium: 225, large: 300, xl: 375, xxl: 600, boat: 450 },
        popular: true,
      },
      {
        id: "platinum",
        name: "Platinum Interior",
        description: "Complete restoration for neglected interiors.",
        features: ["Everything in Gold", "Steam cleaning", "Headliner cleaning", "Odor elimination treatment", "Complete sanitization", "Premium leather treatment", "Fabric protection applied"],
        prices: { small: 275, medium: 350, large: 450, xl: 550, xxl: 900, boat: 700 },
      },
    ],
  },

  // === GLASS & VISIBILITY ===
  {
    id: "window-tint",
    name: "Window Tint",
    slug: "window-tint",
    category: "glass-visibility",
    shortDescription: "Professional window tinting for heat rejection and privacy.",
    longDescription: "Window tint isn't just about looks—it's functional protection. Quality tint rejects heat, blocks UV rays, protects interior materials, and provides privacy. We use premium ceramic films that won't fade or bubble, installed with precision on any vehicle type.",
    icon: "Sun",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "boats", "rv-campers"],
    benefits: [
      "Blocks up to 99% of harmful UV rays",
      "Reduces interior heat significantly",
      "Protects interior from fading and cracking",
      "Increases privacy and security",
      "Reduces glare for safer driving",
      "Professional, bubble-free installation",
    ],
    process: [
      "Window cleaning and preparation",
      "Precise computer-cut film patterns",
      "Expert installation technique",
      "Edge sealing and inspection",
      "Final quality check",
    ],
    faqs: [
      { question: "What tint percentage is legal in South Carolina?", answer: "SC allows 27% on front side windows and any darkness on rear windows. We'll help you choose the right level." },
      { question: "Will window tint interfere with my electronics?", answer: "Our ceramic tints do not interfere with GPS, cell signals, or radio reception." },
      { question: "How long does tint last?", answer: "Our premium ceramic tints come with a lifetime warranty against fading, bubbling, and peeling." },
    ],
    packages: [
      {
        id: "basic",
        name: "Basic Tint",
        description: "Quality dyed film for budget-conscious customers.",
        features: ["Dyed window film", "5-year warranty", "All side windows", "Computer-cut patterns"],
        prices: { small: 150, medium: 200, large: 250, xl: 300 },
      },
      {
        id: "ceramic",
        name: "Ceramic Tint",
        description: "Premium ceramic film with superior heat rejection.",
        features: ["Ceramic window film", "Lifetime warranty", "70%+ heat rejection", "99% UV block", "Signal-friendly"],
        prices: { small: 300, medium: 400, large: 500, xl: 600, xxl: 900 },
        popular: true,
      },
      {
        id: "full-vehicle",
        name: "Full Vehicle Ceramic",
        description: "Complete coverage including windshield strip.",
        features: ["Everything in Ceramic", "Windshield strip", "Rear window", "Full coverage"],
        prices: { small: 400, medium: 500, large: 650, xl: 800, xxl: 1200 },
      },
    ],
  },

  // === PAINT PROTECTION FILM (PPF) ===
  {
    id: "paint-protection-film",
    name: "Paint Protection Film",
    slug: "paint-protection-film",
    category: "surface-protection",
    shortDescription: "Invisible armor that shields your paint from rock chips, scratches, and debris.",
    longDescription: "Paint Protection Film (PPF) is a virtually invisible urethane film that acts as a sacrificial barrier between your paint and the road. Unlike ceramic coatings that provide chemical protection, PPF delivers physical protection against rock chips, road debris, scratches, and minor impacts. Self-healing technology allows minor scratches to disappear with heat, keeping your vehicle looking flawless for years.",
    icon: "ShieldPlus",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "boats", "rv-campers"],
    benefits: [
      "Prevents rock chips and road debris damage",
      "Self-healing technology repairs minor scratches",
      "Virtually invisible when professionally installed",
      "Preserves original factory paint",
      "Maintains and increases resale value",
      "10-year warranty on premium films",
    ],
    process: [
      "Vehicle inspection and paint assessment",
      "Thorough wash and decontamination",
      "Paint correction if needed",
      "Computer-cut film patterns for precise fit",
      "Professional installation with slip solution",
      "Edge sealing and final inspection",
      "48-hour cure time before washing",
    ],
    faqs: [
      { question: "How long does PPF last?", answer: "Premium PPF lasts 7-10+ years with proper care. We use top-tier films that maintain clarity and protection throughout their lifespan." },
      { question: "Will PPF yellow over time?", answer: "Modern premium films are designed to resist yellowing. Our films come with manufacturer warranties against discoloration." },
      { question: "Can PPF be removed?", answer: "Yes. Quality PPF can be professionally removed without damaging the underlying paint, making it ideal for leased vehicles or future paint changes." },
      { question: "What's the difference between PPF and ceramic coating?", answer: "PPF provides physical protection against impacts and scratches. Ceramic coating provides chemical protection and hydrophobic properties. For maximum protection, we recommend both—PPF first, then ceramic coating on top." },
    ],
    packages: [
      {
        id: "partial-front",
        name: "Partial Front",
        description: "Essential impact zone protection for budget-conscious owners.",
        features: ["Partial hood (24\")", "Partial fenders", "Front bumper", "Headlights", "Mirror backs"],
        prices: { small: 1200, medium: 1400, large: 1600, xl: 1800, xxl: 2500, boat: 1800 },
      },
      {
        id: "full-front",
        name: "Full Front End",
        description: "Complete front-end protection for high-mileage drivers.",
        features: ["Full hood", "Full fenders", "Front bumper", "Headlights", "Mirror backs", "A-pillars", "Roofline strip"],
        prices: { small: 1800, medium: 2100, large: 2400, xl: 2800, xxl: 4000, boat: 3000 },
        popular: true,
      },
      {
        id: "track-pack",
        name: "Track Pack",
        description: "Extended protection for enthusiast drivers.",
        features: ["Everything in Full Front", "Rocker panels", "Rear wheel arches", "Door edges", "Door cups", "Trunk ledge"],
        prices: { small: 3200, medium: 3800, large: 4400, xl: 5000, xxl: 7000, boat: 5500 },
      },
      {
        id: "full-vehicle",
        name: "Full Vehicle Wrap",
        description: "Complete coverage for maximum protection.",
        features: ["All painted surfaces", "Computer-cut patterns", "Seamless installation", "Premium film", "10-year warranty"],
        prices: { small: 5500, medium: 6500, large: 7500, xl: 9000, xxl: 14000, boat: 10000 },
      },
    ],
  },

  // === MAINTENANCE DETAILING ===
  {
    id: "maintenance-detailing",
    name: "Maintenance Detailing",
    slug: "maintenance-detailing",
    category: "exterior-systems",
    shortDescription: "Regular maintenance to preserve your coating investment and keep your vehicle pristine.",
    longDescription: "Maintenance detailing is the key to maximizing the lifespan and performance of your ceramic coating, PPF, or regular protection. Our maintenance washes use coating-safe products and proper techniques to remove contaminants without degrading your protection. Regular maintenance isn't just cleaning—it's preserving your investment and keeping your vehicle looking showroom-fresh year after year.",
    icon: "RefreshCw",
    applicableVehicles: ["cars-sedans", "trucks-suvs", "off-road", "boats", "rv-campers", "heavy-equipment"],
    benefits: [
      "Extends ceramic coating lifespan significantly",
      "Maintains hydrophobic properties",
      "Prevents contaminant bonding",
      "Keeps vehicle looking freshly detailed",
      "Identifies issues before they become problems",
      "Protects your investment long-term",
    ],
    process: [
      "Foam pre-wash to loosen contaminants",
      "Gentle hand wash with pH-neutral soap",
      "Coating-safe decontamination if needed",
      "Coating inspection and performance check",
      "Spot treatment for water spots or stains",
      "Quick detail spray application",
      "Final inspection and recommendations",
    ],
    faqs: [
      { question: "How often should I get maintenance detailing?", answer: "For ceramic-coated vehicles, we recommend every 3-4 months. For vehicles without coatings, monthly or bi-monthly depending on use and exposure." },
      { question: "Can I wash my car between maintenance details?", answer: "Yes, but use touchless washes or proper two-bucket hand washing. Avoid automatic car washes with brushes that can damage coatings and paint." },
      { question: "What if I miss a maintenance appointment?", answer: "Your coating won't fail immediately, but regular maintenance ensures optimal performance. If you've gone too long, we may recommend a decontamination wash before resuming normal maintenance." },
      { question: "Do you offer maintenance plans?", answer: "Yes! We offer discounted maintenance packages when you bundle multiple services. Ask about our annual maintenance plans." },
    ],
    packages: [
      {
        id: "express",
        name: "Express Maintenance",
        description: "Quick refresh between full details.",
        features: ["Foam cannon pre-wash", "Hand wash", "Wheel cleaning", "Tire dressing", "Glass cleaning", "Quick interior wipe"],
        prices: { small: 50, medium: 65, large: 85, xl: 110, xxl: 175, boat: 125 },
      },
      {
        id: "standard",
        name: "Standard Maintenance",
        description: "Complete maintenance for coated vehicles.",
        features: ["Everything in Express", "Iron decontamination", "Coating inspection", "Detail spray application", "Interior vacuum", "Dashboard wipe"],
        prices: { small: 100, medium: 125, large: 165, xl: 200, xxl: 325, boat: 250 },
        popular: true,
      },
      {
        id: "premium",
        name: "Premium Maintenance",
        description: "Full refresh for the discerning owner.",
        features: ["Everything in Standard", "Clay bar treatment", "Coating booster application", "Full interior detail", "Engine bay rinse", "Door jamb cleaning"],
        prices: { small: 175, medium: 225, large: 285, xl: 350, xxl: 500, boat: 400 },
      },
    ],
  },
];

// ============= ADD-ON SERVICES =============
export const addOnServices = [
  { id: "engine-bay", name: "Engine Bay Cleaning", description: "Detailed cleaning and dressing of engine bay", priceRange: "$50-150" },
  { id: "headlight-restoration", name: "Headlight Restoration", description: "Restore cloudy headlights to crystal clarity", priceRange: "$75-150" },
  { id: "wheel-coating", name: "Wheel Ceramic Coating", description: "Ceramic protection for wheels", priceRange: "$150-300" },
  { id: "glass-coating", name: "Glass Coating", description: "Hydrophobic coating for windshield and windows", priceRange: "$75-150" },
  { id: "odor-elimination", name: "Odor Elimination", description: "Professional ozone treatment for stubborn odors", priceRange: "$75-150" },
  { id: "pet-hair-removal", name: "Pet Hair Removal", description: "Specialized pet hair extraction service", priceRange: "$50-100" },
];

// ============= HELPER FUNCTIONS =============
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find((s) => s.id === id);
};

export const getServicesByCategory = (category: Service["category"]): Service[] => {
  return services.filter((s) => s.category === category);
};

export const getServicesForVehicle = (vehicleCategoryId: string): Service[] => {
  return services.filter((s) => s.applicableVehicles.includes(vehicleCategoryId));
};

export const getVehicleCategoryById = (id: string): VehicleCategory | undefined => {
  return vehicleCategories.find((v) => v.id === id);
};

export const getVehicleCategoryBySlug = (slug: string): VehicleCategory | undefined => {
  return vehicleCategories.find((v) => v.slug === slug);
};

// Service category labels
export const serviceCategoryLabels: Record<Service["category"], string> = {
  "surface-protection": "Surface Protection",
  "surface-correction": "Surface Correction",
  "exterior-systems": "Exterior Systems",
  "interior-systems": "Interior Systems",
  "glass-visibility": "Glass & Visibility",
};
