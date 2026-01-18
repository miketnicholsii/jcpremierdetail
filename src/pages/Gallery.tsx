import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { galleryItems, serviceFilters, cityFilters, getFilteredGalleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const filteredItems = getFilteredGalleryItems(serviceFilter, cityFilter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Our Work" title="Before & After Gallery" description="See the transformations we've achieved for our clients." />
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {serviceFilters.map((f) => (
              <Button key={f.id} variant={serviceFilter === f.id ? "default" : "outline"} size="sm" onClick={() => setServiceFilter(f.id)}>{f.name}</Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {cityFilters.map((f) => (
              <Button key={f.id} variant={cityFilter === f.id ? "default" : "outline"} size="sm" onClick={() => setCityFilter(f.id)}>{f.name}</Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="premium-card rounded-xl overflow-hidden border border-border group">
                <div className="relative aspect-video overflow-hidden">
                  <img src={item.afterImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded">{item.serviceType}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  <p className="text-xs text-primary mt-2">{item.city}, SC</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;