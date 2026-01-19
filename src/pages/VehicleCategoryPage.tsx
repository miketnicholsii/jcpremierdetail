import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getVehicleCategoryBySlug, getServicesForVehicle, vehicleCategories } from "@/data/services";
import { businessInfo } from "@/data/business";
import { getServiceIcon } from "@/components/ui/ServiceCard";
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, Car, Truck, Mountain, Anchor, Caravan, HardHat } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Car: Car,
  Truck: Truck,
  Mountain: Mountain,
  Anchor: Anchor,
  Caravan: Caravan,
  HardHat: HardHat,
};

const VehicleCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getVehicleCategoryBySlug(slug || "");
  
  if (!category) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-8">The vehicle category you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const applicableServices = getServicesForVehicle(category.id);
  const Icon = iconMap[category.icon] || Car;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name} Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Protection for</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {category.name}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {category.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/booking">Book Your Service</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg border-primary/50">
                  <a href={`tel:${businessInfo.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {businessInfo.phone}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                  <Icon className="w-32 h-32 text-primary/50" />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-3xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-card/30">
        <div className="container-custom">
          <SectionHeading
            badge="Why Specialized Care?"
            title="Unique Challenges"
            description={`${category.name} face specific environmental and operational challenges that require specialized protection strategies.`}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {category.challenges.map((challenge, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Challenge #{index + 1}</h4>
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Services */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            badge="Recommended Services"
            title={`Services for ${category.name}`}
            description="Based on the unique demands of your asset type, we recommend these protection and care services."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {applicableServices.map((service) => {
              const ServiceIcon = getServiceIcon(service.icon);
              return (
                <Link
                  key={service.id}
                  to={`/${service.slug}-spartanburg-sc`}
                  className="group block p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <ServiceIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary text-sm font-medium">
                    View Pricing
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Vehicle Types */}
      <section className="py-16 bg-card/30">
        <div className="container-custom">
          <SectionHeading
            title="Other Asset Types We Service"
            description="JC Premier Detail provides specialized protection for a wide range of vehicles and equipment."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {vehicleCategories
              .filter((c) => c.id !== category.id)
              .map((cat) => {
                const CatIcon = iconMap[cat.icon] || Car;
                return (
                  <Link
                    key={cat.id}
                    to={`/services/${cat.slug}`}
                    className="group flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all"
                  >
                    <CatIcon className="w-8 h-8 text-primary mb-2" />
                    <span className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your {category.name}?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a custom quote based on your specific vehicle, condition, and protection needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary/50">
              <Link to="/estimate">Get Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VehicleCategoryPage;
