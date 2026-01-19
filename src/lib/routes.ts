import { serviceAreas } from "@/data/business";
import { services } from "@/data/services";

export const getLocationPath = (citySlug: string) => `/auto-detailing-${citySlug}`;

export const getServiceLocationPath = (serviceSlug: string, citySlug: string) =>
  `/${serviceSlug}-${citySlug}`;

export const resolveServiceLocationFromSlug = (serviceLocationSlug: string) => {
  for (const city of serviceAreas) {
    const suffix = `-${city.slug}`;
    if (!serviceLocationSlug.endsWith(suffix)) {
      continue;
    }

    const serviceSlug = serviceLocationSlug.slice(0, -suffix.length);
    const service = services.find((item) => item.slug === serviceSlug);

    if (service) {
      return { service, city };
    }
  }

  return null;
};
