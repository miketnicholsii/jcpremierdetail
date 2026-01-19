import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { getServiceBySlug, services, vehicleCategories } from "@/data/services";
import { businessInfo, serviceAreas, getPhoneLink } from "@/data/business";
import { getServiceIcon } from "@/components/ui/ServiceCard";
import { getLocationPath, getServiceLocationPath, resolveServiceLocationFromSlug } from "@/lib/routes";
import NotFound from "@/pages/NotFound";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Award,
  MapPin,
  AlertTriangle,
  Sparkles,
  Check,
} from "lucide-react";

interface ServiceLocationPageProps {
  serviceSlug?: string;
  cityId?: string;
}

const ServiceLocationPage = ({ serviceSlug, cityId }: ServiceLocationPageProps) => {
  const { serviceLocationSlug } = useParams();
  const resolved = serviceLocationSlug
    ? resolveServiceLocationFromSlug(serviceLocationSlug)
    : null;
  const service = serviceSlug
    ? getServiceBySlug(serviceSlug)
    : resolved?.service;
  const city = cityId
    ? serviceAreas.find((area) => area.id === cityId)
    : resolved?.city;

  if (!service || !city) {
    if (serviceLocationSlug) {
      return <NotFound />;
    }

    return (
      <Layout>
        <section className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The service or location you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const ServiceIcon = getServiceIcon(service.icon);

  // Get applicable vehicle types for this service
  const applicableVehicles = vehicleCategories.filter((v) =>
    service.applicableVehicles.includes(v.id)
  );

  // Other cities for internal linking
  const otherCities = serviceAreas.filter((a) => a.id !== city.id);

  // Other services in same city
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-primary">Services</Link>
                <span>/</span>
                <Link to={getLocationPath(city.slug)} className="hover:text-primary">{city.name}</Link>
                <span>/</span>
                <span className="text-foreground">{service.name}</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{city.name}, {city.state}</span>
              </div>

              {/* H1 - Service + Location + Value Prop */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">{service.name}</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  in {city.name}, SC
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                {service.longDescription}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Shield, label: "Certified Professionals" },
                  { icon: Award, label: "5-Star Rated" },
                  { icon: Clock, label: "Same-Week Availability" },
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                    <badge.icon className="w-4 h-4 text-primary" />
                    {badge.label}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/booking">Book {service.name}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg border-primary/50">
                  <Link to="/estimate">Get Price Estimate</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-lg">
                  <a href={getPhoneLink()}>
                    <Phone className="w-5 h-5 mr-2" />
                    {businessInfo.phone}
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What It Is + Why It Matters */}
      <section className="py-16 bg-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SlideInLeft>
              <div className="p-8 rounded-2xl bg-card border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <ServiceIcon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">What is {service.name}?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At JC Premier Detail in {city.name}, we specialize in professional {service.name.toLowerCase()} 
                  tailored to local conditions. {city.climate}
                </p>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Why {city.name} Vehicles Need This</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {city.climate}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Without proper protection, your vehicle faces accelerated wear from local environmental 
                  conditions. {service.name} provides a crucial barrier against these elements.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            badge="Benefits"
            title={`Why Choose ${service.name}?`}
            description="Protection that pays for itself through preserved value and easier maintenance."
          />

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.benefits.map((benefit, idx) => (
              <StaggerItem key={idx}>
                <div className="p-6 rounded-xl bg-card/50 border border-border/50 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who It's For */}
      {applicableVehicles.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container-custom">
            <SectionHeading
              badge="Who It's For"
              title="Vehicle Types We Service"
              description={`${service.name} is available for these asset types in ${city.name}.`}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {applicableVehicles.map((vehicle) => (
                <Link
                  key={vehicle.id}
                  to={`/services/${vehicle.slug}`}
                  className="group flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all"
                >
                  <span className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                    {vehicle.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title={`How We Perform ${service.name}`}
            description="A meticulous, step-by-step approach ensures quality results every time."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.process.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative p-6 rounded-xl bg-card border border-border/50">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="pt-4">
                    <p className="text-foreground">{step}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-card/30">
        <div className="container-custom">
          <SectionHeading
            badge="Pricing"
            title={`${service.name} Packages`}
            description="Transparent pricing based on vehicle size. No hidden fees."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {service.packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden ${
                  pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  {pkg.duration && (
                    <p className="text-sm text-primary font-medium">{pkg.duration}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                    <p className="text-3xl font-bold text-foreground">${pkg.prices.small}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Small | Medium: ${pkg.prices.medium} | Large: ${pkg.prices.large}
                    </p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Not sure which package is right for you?
            </p>
            <Button asChild variant="outline" className="border-primary/50">
              <Link to="/estimate">
                <Sparkles className="w-4 h-4 mr-2" />
                Use Our Price Estimator
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            title={`Common Questions About ${service.name}`}
            description="Get answers to frequently asked questions."
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Other Services in This City */}
      <section className="py-16 bg-card/30">
        <div className="container-custom">
          <SectionHeading
            title={`Other Services in ${city.name}`}
            description="Explore our full range of detailing services available in your area."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {otherServices.slice(0, 6).map((otherService) => (
              <Link
                key={otherService.id}
                to={getServiceLocationPath(otherService.slug, city.slug)}
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {otherService.name}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">{otherService.shortDescription}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            title={`${service.name} in Other Areas`}
            description="We also provide this service in these nearby locations."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {otherCities.map((otherCity) => (
              <Link
                key={otherCity.id}
                to={getServiceLocationPath(service.slug, otherCity.slug)}
                className="group flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {otherCity.name}, {otherCity.state}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Professional {service.name}?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of satisfied {city.name} vehicle owners who trust JC Premier Detail 
                for their protection needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/booking">Book Your Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary/50">
                  <a href={getPhoneLink()}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {businessInfo.phone}
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceLocationPage;
