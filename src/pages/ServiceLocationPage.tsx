import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/data/services";
import { serviceAreas, businessInfo, getPhoneLink } from "@/data/business";
import { Phone, Check } from "lucide-react";

interface ServiceLocationPageProps { serviceId: string; cityId: string; }

const ServiceLocationPage = ({ serviceId, cityId }: ServiceLocationPageProps) => {
  const service = services.find((s) => s.id === serviceId);
  const city = serviceAreas.find((a) => a.id === cityId);
  if (!service || !city) return <div>Not found</div>;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge={`${city.name}, ${city.state}`} title={`${service.name} in ${city.name}`} description={service.shortDescription} />
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="premium-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">About {service.name}</h3>
                <p className="text-muted-foreground mb-6">{service.longDescription}</p>
                <h4 className="font-semibold mb-3">Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 mb-6">
                  {service.benefits.map((b, i) => (<li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{b}</li>))}
                </ul>
                <h4 className="font-semibold mb-3">Our Process</h4>
                <ol className="space-y-2">
                  {service.process.map((p, i) => (<li key={i} className="flex items-start gap-3 text-sm text-muted-foreground"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>{p}</li>))}
                </ol>
              </div>

              <div className="premium-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="space-y-6">
              <div className="premium-card rounded-xl p-6 border border-primary/50 glow-effect sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Packages & Pricing</h3>
                <div className="space-y-4">
                  {service.packages.map((pkg) => (
                    <div key={pkg.id} className={`p-4 rounded-lg border ${pkg.popular ? 'border-primary bg-primary/5' : 'border-border'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div><h4 className="font-semibold">{pkg.name}</h4>{pkg.duration && <p className="text-xs text-muted-foreground">{pkg.duration}</p>}</div>
                        {pkg.popular && <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Popular</span>}
                      </div>
                      <p className="text-lg font-bold text-primary mb-2">From ${pkg.prices.small.toLocaleString()}</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {pkg.features.slice(0, 3).map((f, i) => (<li key={i}>• {f}</li>))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <Button asChild className="w-full btn-premium"><Link to="/booking">Book Now</Link></Button>
                  <Button asChild variant="outline" className="w-full"><Link to="/estimate">Get Estimate</Link></Button>
                  <a href={getPhoneLink()} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary"><Phone className="w-4 h-4" />{businessInfo.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceLocationPage;