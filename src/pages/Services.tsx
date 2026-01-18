import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

const Services = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading badge="Our Services" title="Premium Detailing Services" description="Comprehensive automotive care for discerning vehicle owners." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;