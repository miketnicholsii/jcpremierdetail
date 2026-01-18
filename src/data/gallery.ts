// JC Premier Detail - Gallery Data (Placeholder Images)

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  serviceType: string;
  serviceId: string;
  city: string;
  cityId: string;
  vehicleType: string;
  beforeImage: string;
  afterImage: string;
  featured?: boolean;
}

// Using placeholder images - replace with real photos later
const placeholderBefore = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop&auto=format";
const placeholderAfter = "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop&auto=format";

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "BMW M4 Ceramic Coating",
    description: "Full Gold package ceramic coating with 2-stage paint correction. This BMW M4 now has a stunning mirror finish with 5 years of protection.",
    serviceType: "Ceramic Coating",
    serviceId: "ceramic-coating",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Sports Car",
    beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop&auto=format",
    featured: true,
  },
  {
    id: "2",
    title: "Tesla Model S Paint Correction",
    description: "Heavy swirl marks and scratches removed with our 2-step paint correction process, revealing the true depth of this Pearl White paint.",
    serviceType: "Paint Correction",
    serviceId: "paint-correction",
    city: "Greenville",
    cityId: "greenville",
    vehicleType: "Sedan",
    beforeImage: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop&auto=format",
    featured: true,
  },
  {
    id: "3",
    title: "Porsche 911 Full PPF",
    description: "Complete paint protection film installation to protect this Guards Red 911 from rock chips and road debris.",
    serviceType: "Paint Protection Film",
    serviceId: "paint-protection-film",
    city: "Greer",
    cityId: "greer",
    vehicleType: "Sports Car",
    beforeImage: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop&auto=format",
    featured: true,
  },
  {
    id: "4",
    title: "Mercedes S-Class Interior Detail",
    description: "Complete Platinum interior detail restoring the luxurious cabin of this S-Class to showroom condition.",
    serviceType: "Interior Detailing",
    serviceId: "interior-detailing",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Luxury",
    beforeImage: "https://images.unsplash.com/photo-1603811478698-7f29a4c1c0f3?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "5",
    title: "Ford F-150 Exterior Detail",
    description: "Silver exterior detail with clay bar treatment and paint sealant for this work truck.",
    serviceType: "Exterior Detailing",
    serviceId: "exterior-detailing",
    city: "Boiling Springs",
    cityId: "boiling-springs",
    vehicleType: "Truck",
    beforeImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "6",
    title: "Audi RS7 Ceramic Coating",
    description: "Platinum package with full paint correction and our most durable 5+ year coating on this stunning Nardo Grey RS7.",
    serviceType: "Ceramic Coating",
    serviceId: "ceramic-coating",
    city: "Greenville",
    cityId: "greenville",
    vehicleType: "Sports Car",
    beforeImage: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&auto=format",
    featured: true,
  },
  {
    id: "7",
    title: "Chevrolet Corvette C8 PPF",
    description: "Full front PPF installation to protect this mid-engine marvel from highway debris.",
    serviceType: "Paint Protection Film",
    serviceId: "paint-protection-film",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Sports Car",
    beforeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "8",
    title: "Range Rover Interior Restoration",
    description: "Gold interior package bringing this well-loved Range Rover's cabin back to life.",
    serviceType: "Interior Detailing",
    serviceId: "interior-detailing",
    city: "Greer",
    cityId: "greer",
    vehicleType: "SUV",
    beforeImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "9",
    title: "Lexus LC500 Paint Correction",
    description: "Stunning transformation on this Structural Blue LC500, removing years of swirl marks.",
    serviceType: "Paint Correction",
    serviceId: "paint-correction",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Luxury",
    beforeImage: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "10",
    title: "GMC Sierra Maintenance Detail",
    description: "Regular maintenance detail to keep this ceramic-coated Sierra looking pristine.",
    serviceType: "Maintenance Detailing",
    serviceId: "maintenance-detailing",
    city: "Boiling Springs",
    cityId: "boiling-springs",
    vehicleType: "Truck",
    beforeImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "11",
    title: "Jeep Wrangler Full Detail",
    description: "Complete interior and exterior detail for this off-road adventurer.",
    serviceType: "Exterior Detailing",
    serviceId: "exterior-detailing",
    city: "Greenville",
    cityId: "greenville",
    vehicleType: "SUV",
    beforeImage: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "12",
    title: "McLaren 720S Ceramic Coating",
    description: "Our flagship Platinum coating protecting this exotic supercar's stunning paint.",
    serviceType: "Ceramic Coating",
    serviceId: "ceramic-coating",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Exotic",
    beforeImage: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&h=600&fit=crop&auto=format",
    featured: true,
  },
];

export const serviceFilters = [
  { id: "all", name: "All Services" },
  { id: "ceramic-coating", name: "Ceramic Coating" },
  { id: "paint-correction", name: "Paint Correction" },
  { id: "paint-protection-film", name: "Paint Protection Film" },
  { id: "interior-detailing", name: "Interior Detailing" },
  { id: "exterior-detailing", name: "Exterior Detailing" },
  { id: "maintenance-detailing", name: "Maintenance Detailing" },
];

export const cityFilters = [
  { id: "all", name: "All Locations" },
  { id: "spartanburg", name: "Spartanburg" },
  { id: "greenville", name: "Greenville" },
  { id: "greer", name: "Greer" },
  { id: "boiling-springs", name: "Boiling Springs" },
];

export const getFilteredGalleryItems = (serviceId: string, cityId: string): GalleryItem[] => {
  return galleryItems.filter((item) => {
    const matchesService = serviceId === "all" || item.serviceId === serviceId;
    const matchesCity = cityId === "all" || item.cityId === cityId;
    return matchesService && matchesCity;
  });
};

export const getFeaturedGalleryItems = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.featured);
};