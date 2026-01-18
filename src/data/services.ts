// JC Premier Detail - Services & Pricing Data

export interface PriceTier {
  small: number;
  medium: number;
  large: number;
  xl: number;
}

export interface ServicePackage {
  id: string;
  name: string;
  duration?: string;
  description: string;
  features: string[];
  prices: PriceTier;
  popular?: boolean;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  packages: ServicePackage[];
}

export const services: Service[] = [
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    slug: "ceramic-coating",
    shortDescription: "Long-lasting protection with a brilliant, hydrophobic finish.",
    longDescription: "Our professional-grade ceramic coatings bond at the molecular level to create an incredibly durable protective layer. This advanced nanotechnology shields your paint from UV rays, chemical stains, bird droppings, and environmental contaminants while providing an unmatched glossy finish.",
    icon: "Shield",
    benefits: [
      "Exceptional UV protection prevents fading",
      "Hydrophobic surface repels water and contaminants",
      "Easier cleaning and maintenance",
      "Enhanced gloss and depth of color",
      "Protection against chemical stains and etching",
      "Long-lasting durability (1-5+ years)",
    ],
    process: [
      "Thorough wash and decontamination",
      "Paint correction (if needed) to remove defects",
      "IPA wipe-down to prepare surface",
      "Careful application of ceramic coating",
      "Infrared curing for optimal bonding",
      "Final inspection and quality check",
    ],
    faqs: [
      { question: "How long does ceramic coating last?", answer: "Depending on the package, our ceramic coatings last from 12 months (Bronze) up to 5+ years (Platinum), with proper maintenance." },
      { question: "Can ceramic coating be applied to a new car?", answer: "Absolutely! New cars benefit greatly from ceramic coating as it protects the factory paint from day one." },
      { question: "Does ceramic coating prevent scratches?", answer: "While ceramic coating adds a protective layer, it's not scratch-proof. However, it does provide significant resistance to light scratches and swirl marks." },
    ],
    packages: [
      {
        id: "bronze",
        name: "Bronze",
        duration: "12-Month Protection",
        description: "Entry-level protection perfect for leased vehicles or budget-conscious owners.",
        features: ["1-year ceramic coating", "Light paint enhancement", "Hydrophobic protection", "UV protection"],
        prices: { small: 425, medium: 550, large: 700, xl: 850 },
      },
      {
        id: "silver",
        name: "Silver",
        duration: "2-Year Protection",
        description: "Enhanced protection with improved durability and gloss.",
        features: ["2-year ceramic coating", "Single-stage paint correction", "Enhanced hydrophobic effect", "Chemical resistance", "UV protection"],
        prices: { small: 825, medium: 950, large: 1100, xl: 1300 },
        popular: true,
      },
      {
        id: "gold",
        name: "Gold",
        duration: "5-Year Protection",
        description: "Premium protection for enthusiasts who demand the best.",
        features: ["5-year ceramic coating", "Two-stage paint correction", "Maximum hydrophobic effect", "Superior chemical resistance", "Enhanced UV protection", "Trim coating included"],
        prices: { small: 1100, medium: 1250, large: 1450, xl: 1700 },
      },
      {
        id: "platinum",
        name: "Platinum",
        duration: "5+ Year Protection",
        description: "The ultimate protection package with our most durable coating.",
        features: ["5+ year ceramic coating", "Full paint correction", "Maximum hardness (9H)", "Premium hydrophobic effect", "Complete chemical resistance", "Full trim and wheel coating", "Annual maintenance included"],
        prices: { small: 1200, medium: 1400, large: 1650, xl: 1900 },
      },
    ],
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    slug: "paint-correction",
    shortDescription: "Remove swirls, scratches, and imperfections to restore your paint.",
    longDescription: "Paint correction is the art of removing imperfections from your vehicle's clear coat through meticulous machine polishing. Our skilled technicians use advanced techniques to eliminate swirl marks, scratches, water spots, and oxidation, revealing the true brilliance of your paint.",
    icon: "Sparkles",
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
      { question: "How often should I get paint correction?", answer: "With proper care and protection (like ceramic coating), you may only need paint correction once or twice in your vehicle's lifetime." },
    ],
    packages: [
      {
        id: "standard",
        name: "Standard Correction",
        duration: "2-Step Process",
        description: "Our comprehensive two-stage correction removes up to 90% of defects.",
        features: ["Two-stage polishing", "90% defect removal", "Swirl mark elimination", "Scratch removal", "Water spot removal", "Final polish"],
        prices: { small: 500, medium: 600, large: 700, xl: 800 },
      },
    ],
  },
  {
    id: "paint-protection-film",
    name: "Paint Protection Film",
    slug: "paint-protection-film",
    shortDescription: "Invisible armor that shields against rock chips and road debris.",
    longDescription: "Paint Protection Film (PPF) is a virtually invisible urethane film that protects your vehicle's paint from rock chips, road debris, bug splatter, and minor abrasions. Our premium films feature self-healing technology that automatically repairs light scratches with heat.",
    icon: "Shield",
    benefits: [
      "Protection from rock chips and road debris",
      "Self-healing technology for light scratches",
      "Invisible protection maintains factory appearance",
      "UV resistant prevents yellowing",
      "Removable without damage to paint",
      "10-year manufacturer warranty",
    ],
    process: [
      "Surface preparation and cleaning",
      "Precise computer-cut patterns",
      "Expert installation by certified technicians",
      "Edge sealing and finishing",
      "Heat treatment for optimal adhesion",
      "Quality inspection",
    ],
    faqs: [
      { question: "Is PPF noticeable on the car?", answer: "High-quality PPF is virtually invisible when properly installed. It maintains your vehicle's original appearance." },
      { question: "How long does PPF last?", answer: "Our premium PPF comes with a 10-year warranty and can last even longer with proper care." },
      { question: "Can PPF be applied over ceramic coating?", answer: "For best results, PPF should be applied first, then ceramic coating can be applied over the film for additional protection." },
    ],
    packages: [
      {
        id: "partial",
        name: "Partial Front",
        description: "Essential protection for high-impact areas.",
        features: ["Full hood coverage", "Full front fenders", "Front bumper", "Side mirrors", "Door edges"],
        prices: { small: 1200, medium: 1400, large: 1600, xl: 1800 },
      },
      {
        id: "full-front",
        name: "Full Front",
        description: "Complete front-end protection for maximum coverage.",
        features: ["Full hood", "Full front fenders", "Full front bumper", "Headlights", "A-pillars", "Side mirrors", "Door edges", "Door cups"],
        prices: { small: 1800, medium: 2100, large: 2400, xl: 2700 },
        popular: true,
      },
      {
        id: "full-vehicle",
        name: "Full Vehicle",
        description: "Ultimate protection with complete vehicle coverage.",
        features: ["Complete exterior coverage", "All painted surfaces", "Rocker panels", "Rear bumper", "Full warranty coverage"],
        prices: { small: 4500, medium: 5500, large: 6500, xl: 7500 },
      },
    ],
  },
  {
    id: "interior-detailing",
    name: "Interior Detailing",
    slug: "interior-detailing",
    shortDescription: "Deep cleaning and conditioning for a pristine cabin.",
    longDescription: "Our interior detailing services restore your vehicle's cabin to showroom condition. From deep carpet extraction to leather conditioning, we meticulously clean and protect every surface to create a healthy, beautiful interior environment.",
    icon: "Armchair",
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
      { question: "Can you remove pet hair?", answer: "Yes! We have specialized tools and techniques specifically for removing stubborn pet hair from all surfaces." },
      { question: "Will you clean my leather seats?", answer: "Absolutely. We use pH-balanced leather cleaners and premium conditioners to clean and protect your leather." },
    ],
    packages: [
      {
        id: "silver",
        name: "Silver Interior",
        description: "Essential interior cleaning for regular maintenance.",
        features: ["Full vacuum", "Wipe-down of all surfaces", "Window cleaning", "Light stain removal", "Air freshener"],
        prices: { small: 45, medium: 60, large: 75, xl: 90 },
      },
      {
        id: "gold",
        name: "Gold Interior",
        description: "Deep cleaning for a thorough refresh.",
        features: ["Everything in Silver", "Deep carpet extraction", "Upholstery shampooing", "Leather cleaning & conditioning", "Detailed crevice cleaning", "UV protection applied"],
        prices: { small: 150, medium: 200, large: 250, xl: 300 },
        popular: true,
      },
      {
        id: "platinum",
        name: "Platinum Interior",
        description: "Complete restoration for neglected interiors.",
        features: ["Everything in Gold", "Steam cleaning", "Headliner cleaning", "Odor elimination treatment", "Complete sanitization", "Premium leather treatment", "Fabric protection applied"],
        prices: { small: 200, medium: 275, large: 350, xl: 400 },
      },
    ],
  },
  {
    id: "exterior-detailing",
    name: "Exterior Detailing",
    slug: "exterior-detailing",
    shortDescription: "Professional wash and protection for a stunning finish.",
    longDescription: "Our exterior detailing goes far beyond a regular car wash. We use premium products and proven techniques to safely clean, decontaminate, and protect your vehicle's exterior surfaces, leaving a brilliant shine that lasts.",
    icon: "Car",
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
      "Clay bar decontamination",
      "Paint sealant or wax application",
      "Tire dressing and trim restoration",
      "Glass cleaning and water repellent",
    ],
    faqs: [
      { question: "How is this different from a regular car wash?", answer: "We use pH-balanced products, proper techniques, and hand-dry with microfiber towels to prevent scratches and swirls that automatic washes cause." },
      { question: "Do you clean the engine bay?", answer: "Engine bay cleaning is available as an add-on service for an additional charge." },
      { question: "How long does the protection last?", answer: "Our Bronze wash provides 2-4 weeks protection, while Silver includes sealant protection lasting 3-6 months." },
    ],
    packages: [
      {
        id: "bronze",
        name: "Bronze Wash",
        description: "Premium hand wash with basic protection.",
        features: ["Hand wash", "Wheel cleaning", "Tire dressing", "Window cleaning", "Quick interior wipe"],
        prices: { small: 20, medium: 30, large: 40, xl: 50 },
      },
      {
        id: "silver",
        name: "Silver Wash",
        description: "Complete exterior care with lasting protection.",
        features: ["Everything in Bronze", "Clay bar treatment", "Paint sealant", "Trim restoration", "Engine bay rinse", "Door jamb cleaning"],
        prices: { small: 100, medium: 130, large: 160, xl: 200 },
        popular: true,
      },
    ],
  },
  {
    id: "maintenance-detailing",
    name: "Maintenance Detailing",
    slug: "maintenance-detailing",
    shortDescription: "Regular care to maintain your vehicle's premium condition.",
    longDescription: "Keep your ceramic-coated or recently detailed vehicle looking its best with our maintenance detailing services. Regular maintenance extends the life of protective coatings and ensures your vehicle always looks showroom-ready.",
    icon: "Wrench",
    benefits: [
      "Extends coating longevity",
      "Maintains hydrophobic properties",
      "Prevents contaminant buildup",
      "Preserves showroom appearance",
      "Cost-effective regular care",
      "Keeps your investment protected",
    ],
    process: [
      "pH-neutral foam wash",
      "Gentle hand washing",
      "Coating-safe decontamination",
      "Coating inspection and assessment",
      "Topper application if needed",
      "Final quality check",
    ],
    faqs: [
      { question: "How often should I get maintenance detailing?", answer: "For ceramic-coated vehicles, we recommend maintenance every 3-4 months. For non-coated vehicles, every 4-6 weeks." },
      { question: "Is this only for ceramic-coated vehicles?", answer: "No! While it's ideal for coated vehicles, any car benefits from professional maintenance detailing." },
      { question: "Can I wash my car between maintenance visits?", answer: "Yes, we'll provide guidance on proper washing techniques to use between appointments." },
    ],
    packages: [
      {
        id: "maintenance",
        name: "Maintenance Detail",
        description: "Professional care to maintain your vehicle's condition.",
        features: ["Coating-safe wash", "Decontamination as needed", "Coating inspection", "Topper application", "Interior quick clean", "Tire and trim dressing"],
        prices: { small: 75, medium: 100, large: 125, xl: 150 },
      },
    ],
  },
];

export const addOnServices = [
  { id: "pdr", name: "Paintless Dent Repair", description: "Remove minor dents without repainting", priceRange: "Starting at $75" },
  { id: "badge-removal", name: "Badge Removal", description: "Clean removal of emblems and badges", priceRange: "$25-50 per badge" },
  { id: "headlight-restoration", name: "Headlight Restoration", description: "Restore cloudy headlights to crystal clarity", priceRange: "$75-150" },
  { id: "engine-bay", name: "Engine Bay Cleaning", description: "Detailed cleaning and dressing of engine bay", priceRange: "$50-100" },
  { id: "wheel-coating", name: "Wheel Ceramic Coating", description: "Ceramic protection for wheels", priceRange: "$150-300" },
  { id: "glass-coating", name: "Glass Coating", description: "Hydrophobic coating for windshield and windows", priceRange: "$75-150" },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find((s) => s.id === id);
};