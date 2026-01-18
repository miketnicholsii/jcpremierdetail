// JC Premier Detail - Business Information

export const businessInfo = {
  name: "JC Premier Detail",
  tagline: "Professional Detailing & Paint Correction",
  phone: "864-542-3617",
  phoneFormatted: "(864) 542-3617",
  email: "info@jcpremierdetail.com",
  address: {
    street: "6689 Pottery Rd",
    city: "Spartanburg",
    state: "SC",
    zip: "29303",
    full: "6689 Pottery Rd, Spartanburg, SC 29303",
  },
  hours: {
    weekdays: "8:00 AM – 5:00 PM",
    saturday: "By Appointment",
    sunday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/jcpremierdetail",
    instagram: "https://instagram.com/jcpremierdetail",
    google: "https://g.page/jcpremierdetail",
  },
};

export const serviceAreas = [
  {
    id: "spartanburg",
    name: "Spartanburg",
    state: "SC",
    slug: "spartanburg-sc",
    isPrimary: true,
    description: "Our home base and primary service location in the heart of the Upstate.",
    climate: "Hot, humid summers require extra protection against UV damage and oxidation.",
  },
  {
    id: "greenville",
    name: "Greenville",
    state: "SC",
    slug: "greenville-sc",
    isPrimary: false,
    description: "Serving Greenville's discerning car enthusiasts with premium detailing services.",
    climate: "Year-round humidity and pollen make regular maintenance essential.",
  },
  {
    id: "greer",
    name: "Greer",
    state: "SC",
    slug: "greer-sc",
    isPrimary: false,
    description: "Convenient location between Spartanburg and Greenville for BMW and luxury car owners.",
    climate: "Near I-85 traffic means more road grime and contaminants on your vehicle.",
  },
  {
    id: "boiling-springs",
    name: "Boiling Springs",
    state: "SC",
    slug: "boiling-springs-sc",
    isPrimary: false,
    description: "Proudly serving the Boiling Springs community with professional detailing.",
    climate: "Rural roads and seasonal pollen require protective coatings.",
  },
];

export const vehicleSizes = [
  { id: "small", name: "Small", description: "Compact cars, coupes (e.g., Honda Civic, BMW 3 Series)" },
  { id: "medium", name: "Medium", description: "Sedans, small SUVs (e.g., Toyota Camry, Honda CR-V)" },
  { id: "large", name: "Large", description: "Full-size SUVs, trucks (e.g., Ford F-150, Tahoe)" },
  { id: "xl", name: "XL", description: "Extended trucks, large SUVs (e.g., Ford F-250, Suburban)" },
];

export const getPhoneLink = () => `tel:${businessInfo.phone.replace(/-/g, "")}`;
export const getEmailLink = () => `mailto:${businessInfo.email}`;
export const getDirectionsLink = () => 
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address.full)}`;