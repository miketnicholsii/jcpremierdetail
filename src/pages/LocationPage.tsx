import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { serviceAreas, businessInfo, getPhoneLink } from "@/data/business";
import { Phone, MapPin } from "lucide-react";

interface LocationPageProps { cityId: string; }

const LocationPage = ({ cityId }: LocationPageProps) => {
  const city = serviceAreas.find((a) => a.id === cityId);
  if (!city) return <div>City not found</div>;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge={`${city.name}, ${city.state}`} title={`Auto Detailing in ${city.name}`} description={city.description} />
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="premium-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Why Choose JC Premier Detail in {city.name}?</h3>
              <p className="text-muted-foreground mb-4">{city.climate}</p>
              <p className="text-muted-foreground mb-6">Our professional detailing services are tailored to protect your vehicle from the specific environmental challenges of the {city.name} area.</p>
              <div className="flex gap-4">
                <Button asChild className="btn-premium"><Link to="/booking">Book Now</Link></Button>
                <Button asChild variant="outline"><a href={getPhoneLink()}><Phone className="w-4 h-4 mr-2" />{businessInfo.phone}</a></Button>
              </div>
            </div>
            <div className="premium-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Visit Our Shop</h3>
              <div className="flex items-start gap-3 text-muted-foreground mb-4"><MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>{businessInfo.address.full}</span></div>
              <p className="text-muted-foreground text-sm">Conveniently located to serve {city.name} and surrounding areas.</p>
            </div>
          </div>

          <SectionHeading badge="Our Services" title={`Services in ${city.name}`} description="Complete range of professional detailing services." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (<ServiceCard key={service.id} service={service} citySlug={city.slug} />))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;