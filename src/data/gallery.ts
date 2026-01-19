// JC Premier Detail - Enhanced Gallery Data

// Import generated images
import exteriorSuvBefore from "@/assets/gallery/exterior-suv-before.jpg";
import exteriorSuvAfter from "@/assets/gallery/exterior-suv-after.jpg";
import interiorSedanBefore from "@/assets/gallery/interior-sedan-before.jpg";
import interiorSedanAfter from "@/assets/gallery/interior-sedan-after.jpg";
import paintCorrectionBefore from "@/assets/gallery/paint-correction-before.jpg";
import paintCorrectionAfter from "@/assets/gallery/paint-correction-after.jpg";
import ceramicCoatingBefore from "@/assets/gallery/ceramic-coating-before.jpg";
import ceramicCoatingAfter from "@/assets/gallery/ceramic-coating-after.jpg";
import ppfSportscarBefore from "@/assets/gallery/ppf-sportscar-before.jpg";
import ppfSportscarAfter from "@/assets/gallery/ppf-sportscar-after.jpg";
import maintenanceTruckBefore from "@/assets/gallery/maintenance-truck-before.jpg";
import maintenanceTruckAfter from "@/assets/gallery/maintenance-truck-after.jpg";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  serviceType: string;
  serviceId: string;
  city: string;
  cityId: string;
  vehicleType: string;
  vehicleTypeId: string;
  vehicleMake: string;
  vehicleModel: string;
  beforeImage: string;
  afterImage: string;
  featured?: boolean;
  packageUsed?: string;
  duration?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Mercedes S-Class Ceramic Coating",
    description: "Full Gold package ceramic coating with paint correction. This Mercedes now has an incredible glass-like finish with 5 years of protection.",
    serviceType: "Ceramic Coating",
    serviceId: "ceramic-coating",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Luxury",
    vehicleTypeId: "luxury",
    vehicleMake: "Mercedes-Benz",
    vehicleModel: "S-Class",
    beforeImage: ceramicCoatingBefore,
    afterImage: ceramicCoatingAfter,
    featured: true,
    packageUsed: "Gold",
    duration: "2 days",
  },
  {
    id: "2",
    title: "Sports Car Paint Correction",
    description: "Heavy swirl marks and scratches removed with our multi-stage paint correction process, revealing the true depth of this vibrant red paint.",
    serviceType: "Paint Correction",
    serviceId: "paint-correction",
    city: "Greenville",
    cityId: "greenville",
    vehicleType: "Sports Car",
    vehicleTypeId: "sports-car",
    vehicleMake: "Ferrari",
    vehicleModel: "488",
    beforeImage: paintCorrectionBefore,
    afterImage: paintCorrectionAfter,
    featured: true,
    packageUsed: "Two-Stage",
    duration: "1 day",
  },
  {
    id: "3",
    title: "Porsche 911 Full PPF",
    description: "Complete paint protection film installation to protect this stunning blue 911 from rock chips and road debris.",
    serviceType: "Paint Protection Film",
    serviceId: "paint-protection-film",
    city: "Greer",
    cityId: "greer",
    vehicleType: "Sports Car",
    vehicleTypeId: "sports-car",
    vehicleMake: "Porsche",
    vehicleModel: "911",
    beforeImage: ppfSportscarBefore,
    afterImage: ppfSportscarAfter,
    featured: true,
    packageUsed: "Full Front",
    duration: "2 days",
  },
  {
    id: "4",
    title: "Luxury Sedan Interior Detail",
    description: "Complete Platinum interior detail restoring this luxury sedan's cabin from heavily soiled condition to showroom-fresh.",
    serviceType: "Interior Detailing",
    serviceId: "interior-detailing",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Sedan",
    vehicleTypeId: "sedan",
    vehicleMake: "BMW",
    vehicleModel: "5 Series",
    beforeImage: interiorSedanBefore,
    afterImage: interiorSedanAfter,
    featured: true,
    packageUsed: "Platinum",
    duration: "1 day",
  },
  {
    id: "5",
    title: "Black SUV Full Exterior Detail",
    description: "Silver exterior detail with clay bar treatment and ceramic coating for this heavily oxidized black SUV.",
    serviceType: "Exterior Detailing",
    serviceId: "exterior-detailing",
    city: "Boiling Springs",
    cityId: "boiling-springs",
    vehicleType: "SUV",
    vehicleTypeId: "suv",
    vehicleMake: "Buick",
    vehicleModel: "Enclave",
    beforeImage: exteriorSuvBefore,
    afterImage: exteriorSuvAfter,
    featured: true,
    packageUsed: "Silver",
    duration: "4 hours",
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
    vehicleTypeId: "sports-car",
    vehicleMake: "Audi",
    vehicleModel: "RS7",
    beforeImage: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&auto=format",
    featured: true,
    packageUsed: "Platinum",
    duration: "3 days",
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
    vehicleTypeId: "sports-car",
    vehicleMake: "Chevrolet",
    vehicleModel: "Corvette C8",
    beforeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&auto=format",
    packageUsed: "Full Front",
    duration: "2 days",
  },
  {
    id: "8",
    title: "Range Rover Interior Restoration",
    description: "Gold interior package bringing this well-loved Range Rover's cabin back to life with deep leather conditioning and steam cleaning.",
    serviceType: "Interior Detailing",
    serviceId: "interior-detailing",
    city: "Greer",
    cityId: "greer",
    vehicleType: "SUV",
    vehicleTypeId: "suv",
    vehicleMake: "Land Rover",
    vehicleModel: "Range Rover",
    beforeImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&auto=format",
    packageUsed: "Gold",
    duration: "6 hours",
  },
  {
    id: "9",
    title: "Lexus LC500 Paint Correction",
    description: "Stunning transformation on this Structural Blue LC500, removing years of swirl marks and revealing incredible depth.",
    serviceType: "Paint Correction",
    serviceId: "paint-correction",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Luxury",
    vehicleTypeId: "luxury",
    vehicleMake: "Lexus",
    vehicleModel: "LC500",
    beforeImage: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop&auto=format",
    packageUsed: "Full Correction",
    duration: "2 days",
  },
  {
    id: "10",
    title: "Ford Ranger Maintenance Detail",
    description: "Regular maintenance detail removing pollen and road grime to keep this ceramic-coated truck looking pristine.",
    serviceType: "Maintenance Detailing",
    serviceId: "maintenance-detailing",
    city: "Boiling Springs",
    cityId: "boiling-springs",
    vehicleType: "Truck",
    vehicleTypeId: "truck",
    vehicleMake: "Ford",
    vehicleModel: "Ranger",
    beforeImage: maintenanceTruckBefore,
    afterImage: maintenanceTruckAfter,
    featured: true,
    packageUsed: "Standard",
    duration: "2 hours",
  },
  {
    id: "11",
    title: "Jeep Wrangler Full Detail",
    description: "Complete interior and exterior detail for this off-road adventurer, removing trail dust and mud.",
    serviceType: "Exterior Detailing",
    serviceId: "exterior-detailing",
    city: "Greenville",
    cityId: "greenville",
    vehicleType: "SUV",
    vehicleTypeId: "suv",
    vehicleMake: "Jeep",
    vehicleModel: "Wrangler",
    beforeImage: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop&auto=format",
    packageUsed: "Gold",
    duration: "5 hours",
  },
  {
    id: "12",
    title: "McLaren 720S Ceramic Coating",
    description: "Our flagship Platinum coating protecting this exotic supercar's stunning Azores Orange paint.",
    serviceType: "Ceramic Coating",
    serviceId: "ceramic-coating",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Exotic",
    vehicleTypeId: "exotic",
    vehicleMake: "McLaren",
    vehicleModel: "720S",
    beforeImage: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&h=600&fit=crop&auto=format",
    featured: true,
    packageUsed: "Platinum",
    duration: "4 days",
  },
  {
    id: "13",
    title: "Cadillac Escalade Full Protection",
    description: "Complete ceramic coating and PPF combination for ultimate protection on this flagship SUV.",
    serviceType: "Ceramic Coating",
    serviceId: "ceramic-coating",
    city: "Greenville",
    cityId: "greenville",
    vehicleType: "SUV",
    vehicleTypeId: "suv",
    vehicleMake: "Cadillac",
    vehicleModel: "Escalade",
    beforeImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop&auto=format",
    packageUsed: "Gold + PPF",
    duration: "4 days",
  },
  {
    id: "14",
    title: "Ram 2500 Undercoating",
    description: "Heavy-duty undercoating protection for this work truck that sees daily job site use.",
    serviceType: "Exterior Detailing",
    serviceId: "exterior-detailing",
    city: "Boiling Springs",
    cityId: "boiling-springs",
    vehicleType: "Truck",
    vehicleTypeId: "truck",
    vehicleMake: "Ram",
    vehicleModel: "2500",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&h=600&fit=crop&auto=format",
    packageUsed: "Off-Road Package",
    duration: "1 day",
  },
  {
    id: "15",
    title: "Honda Accord Paint Correction",
    description: "Single-stage paint correction transforming this daily driver's oxidized paint.",
    serviceType: "Paint Correction",
    serviceId: "paint-correction",
    city: "Spartanburg",
    cityId: "spartanburg",
    vehicleType: "Sedan",
    vehicleTypeId: "sedan",
    vehicleMake: "Honda",
    vehicleModel: "Accord",
    beforeImage: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=600&fit=crop&auto=format",
    packageUsed: "Single-Stage",
    duration: "6 hours",
  },
  {
    id: "16",
    title: "Lamborghini Urus PPF + Coating",
    description: "Full body PPF with ceramic coating on top for the ultimate protection on this super SUV.",
    serviceType: "Paint Protection Film",
    serviceId: "paint-protection-film",
    city: "Greenville",
    cityId: "greenville",
    vehicleType: "Exotic",
    vehicleTypeId: "exotic",
    vehicleMake: "Lamborghini",
    vehicleModel: "Urus",
    beforeImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&auto=format",
    featured: true,
    packageUsed: "Full Vehicle + Platinum",
    duration: "1 week",
  },
];

export const serviceFilters = [
  { id: "all", name: "All Services" },
  { id: "ceramic-coating", name: "Ceramic Coating" },
  { id: "paint-correction", name: "Paint Correction" },
  { id: "paint-protection-film", name: "PPF" },
  { id: "interior-detailing", name: "Interior" },
  { id: "exterior-detailing", name: "Exterior" },
  { id: "maintenance-detailing", name: "Maintenance" },
];

export const cityFilters = [
  { id: "all", name: "All Locations" },
  { id: "spartanburg", name: "Spartanburg" },
  { id: "greenville", name: "Greenville" },
  { id: "greer", name: "Greer" },
  { id: "boiling-springs", name: "Boiling Springs" },
];

export const vehicleTypeFilters = [
  { id: "all", name: "All Vehicles" },
  { id: "sedan", name: "Sedans" },
  { id: "suv", name: "SUVs" },
  { id: "truck", name: "Trucks" },
  { id: "sports-car", name: "Sports Cars" },
  { id: "luxury", name: "Luxury" },
  { id: "exotic", name: "Exotics" },
];

export const getFilteredGalleryItems = (
  serviceId: string,
  cityId: string,
  vehicleTypeId?: string
): GalleryItem[] => {
  return galleryItems.filter((item) => {
    const matchesService = serviceId === "all" || item.serviceId === serviceId;
    const matchesCity = cityId === "all" || item.cityId === cityId;
    const matchesVehicle = !vehicleTypeId || vehicleTypeId === "all" || item.vehicleTypeId === vehicleTypeId;
    return matchesService && matchesCity && matchesVehicle;
  });
};

export const getFeaturedGalleryItems = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.featured);
};