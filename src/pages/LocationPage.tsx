import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";
import { getServiceIcon } from "@/components/ui/ServiceCard";
import { serviceAreas, businessInfo, getPhoneLink, getDirectionsLink } from "@/data/business";
import { getLocationPath, getServiceLocationPath } from "@/lib/routes";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  ThumbsUp,
  Calendar,
  Navigation,
} from "lucide-react";

interface LocationPageProps {
  cityId: string;
}

const LocationPage = ({ cityId }: LocationPageProps) => {
  const city = serviceAreas.find((a) => a.id === cityId);

  if (!city) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
            <p className="text-muted-foreground mb-8">The location you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  // Core 6 services for local SEO
  const coreServices = services.filter((s) =>
    ["ceramic-coating", "paint-correction", "paint-protection-film", "interior-detailing", "exterior-detailing", "maintenance-detailing"].includes(s.id)
  );

  const otherCities = serviceAreas.filter((a) => a.id !== cityId);

  // Local-specific content
  const localContent: Record<string, { headline: string; subheadline: string; whyUs: string[]; localFactors: string[] }> = {
    spartanburg: {
      headline: "Spartanburg's Premier Auto Detailing Experts",
      subheadline: "Family-owned. Precision-focused. Protection-obsessed.",
      whyUs: [
        "Locally owned and operated from our Spartanburg facility",
        "Serving the Upstate since day one—this is home",
        "Expert knowledge of local climate challenges",
        "Convenient location off Highway 9",
      ],
      localFactors: [
        "High humidity accelerates paint oxidation",
        "Summer heat degrades unprotected surfaces",
        "Pine pollen requires regular decontamination",
        "Red clay staining on lower panels and wheels",
      ],
    },
    greenville: {
      headline: "Greenville's Trusted Detailing Destination",
      subheadline: "Premium protection for the Upstate's most discerning owners.",
      whyUs: [
        "Just minutes from downtown Greenville",
        "Trusted by luxury and exotic car owners",
        "Tailored services for Greenville's driving conditions",
        "Same-day consultations available",
      ],
      localFactors: [
        "Urban traffic increases road film buildup",
        "Frequent rain cycles require hydrophobic protection",
        "Tree-lined neighborhoods mean sap and pollen exposure",
        "Parking garage abrasion on daily commuters",
      ],
    },
    greer: {
      headline: "Greer's Detailing Authority",
      subheadline: "Where I-85 meets precision automotive care.",
      whyUs: [
        "Centrally located between Greenville and Spartanburg",
        "Convenient for BMW Manufacturing employees",
        "Expert care for luxury vehicles of all makes",
        "Quick turnaround without sacrificing quality",
      ],
      localFactors: [
        "I-85 highway debris hits front-ends hard",
        "Airport proximity means increased industrial fallout",
        "New vehicle owners want protection from day one",
        "Year-round pollen from surrounding greenways",
      ],
    },
    "boiling-springs": {
      headline: "Boiling Springs' Detailing Specialists",
      subheadline: "Bringing professional-grade protection to our community.",
      whyUs: [
        "Serving the Boiling Springs community with pride",
        "Rural road expertise—we know dirt and gravel",
        "Family-friendly scheduling and service",
        "Honest pricing, exceptional results",
      ],
      localFactors: [
        "Unpaved road dust embeds in paint pores",
        "Agricultural area means more organic contaminants",
        "Outdoor storage accelerates UV damage",
        "Seasonal flooding brings mud and mineral deposits",
      ],
    },
  };

  const content = localContent[cityId] || localContent.spartanburg;

  return (
    <Layout>
      <Helmet>
        <title>Auto Detailing {city.name}, SC | JC Premier Detail | Ceramic Coating & PPF</title>
        <meta
          name="description"
          content={`Professional auto detailing in ${city.name}, SC. JC Premier Detail offers ceramic coating, paint protection film, paint correction, and interior detailing. Call (864) 542-3617.`}
        />
        <link rel="canonical" href={`https://jcpremierdetail.com${getLocationPath(city.slug)}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                <span>/</span>
                <span className="text-foreground">{city.name}, {city.state}</span>
              </nav>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Serving {city.name}, {city.state}</span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">{content.headline}</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                {content.subheadline} Professional ceramic coating, paint protection film, and detailing services 
                tailored to {city.name}'s unique climate and conditions.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Star, label: "5-Star Rated" },
                  { icon: Shield, label: "Certified Installers" },
                  { icon: Award, label: "Premium Products Only" },
                  { icon: Calendar, label: "Same-Week Booking" },
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                    <badge.icon className="w-4 h-4 text-primary" />
                    {badge.label}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/booking">Book Your Detail</Link>
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

      {/* Why Choose Us in This City */}
      <section className="py-16 bg-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <SlideInLeft>
              <div className="p-8 rounded-2xl bg-card border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Why {city.name} Chooses JC Premier Detail</h2>
                <div className="space-y-4">
                  {content.whyUs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <ThumbsUp className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-6">{city.name} Vehicle Challenges We Solve</h2>
                <div className="space-y-4">
                  {content.localFactors.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            badge={`${city.name} Services`}
            title={`Our Services in ${city.name}, SC`}
            description="Complete range of professional detailing and protection services tailored to your needs."
          />

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreServices.map((service) => {
              const ServiceIcon = getServiceIcon(service.icon);
              return (
                <StaggerItem key={service.id}>
                  <Link to={getServiceLocationPath(service.slug, city.slug)} className="group block h-full">
                    <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <ServiceIcon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact & Location Info */}
      <section className="py-16 bg-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our {city.isPrimary ? "Shop" : "Service Area"}</h2>
                <p className="text-muted-foreground mb-8">
                  {city.isPrimary
                    ? `Located in the heart of ${city.name}, our state-of-the-art facility is equipped with the latest detailing technology and premium products.`
                    : `While our shop is located in Spartanburg, we proudly serve ${city.name} and surrounding areas. Schedule a drop-off or ask about our mobile service options.`}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">{businessInfo.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href={getPhoneLink()} className="text-primary hover:underline">{businessInfo.phoneFormatted}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: {businessInfo.hours.weekdays}</p>
                      <p className="text-muted-foreground">Sat: {businessInfo.hours.saturday}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/booking">Book Appointment</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={getDirectionsLink()} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="aspect-video rounded-2xl overflow-hidden border border-border/50">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(businessInfo.address.full)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`JC Premier Detail location serving ${city.name}`}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            title="We Also Serve These Areas"
            description="Professional auto detailing services throughout the Upstate."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {otherCities.map((otherCity) => (
              <Link
                key={otherCity.id}
                to={getLocationPath(otherCity.slug)}
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
                Ready to Protect Your Vehicle in {city.name}?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of satisfied {city.name} vehicle owners who trust JC Premier Detail
                for their protection needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/booking">Book Your Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg border-primary/50">
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

export default LocationPage;
