import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import VehicleCategoryCard from "@/components/ui/VehicleCategoryCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  services, 
  vehicleCategories, 
  serviceCategoryLabels,
  getServicesByCategory,
  Service 
} from "@/data/services";
import { businessInfo } from "@/data/business";
import { getServiceIcon } from "@/components/ui/ServiceCard";
import { 
  Phone, 
  ArrowRight, 
  Shield, 
  Sparkles, 
  Droplets, 
  Armchair, 
  Sun,
  CheckCircle2,
  Eye,
  Wrench
} from "lucide-react";

const categoryIcons: Record<Service["category"], React.ElementType> = {
  "surface-protection": Shield,
  "surface-correction": Sparkles,
  "exterior-systems": Droplets,
  "interior-systems": Armchair,
  "glass-visibility": Sun,
};

const Services = () => {
  const servicesByCategory = {
    "surface-protection": getServicesByCategory("surface-protection"),
    "surface-correction": getServicesByCategory("surface-correction"),
    "exterior-systems": getServicesByCategory("exterior-systems"),
    "interior-systems": getServicesByCategory("interior-systems"),
    "glass-visibility": getServicesByCategory("glass-visibility"),
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Professional Vehicle & Equipment Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Protection Before</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Appearance
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              JC Premier Detail specializes in ceramic coatings, paint correction, undercoating, 
              interior and exterior detailing, and window tint. We protect vehicles, boats, RVs, 
              off-road machines, and heavy equipment—with process and materials tailored to each asset type.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/estimate">Get Price Estimate</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg border-primary/50">
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {businessInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Protection Before Appearance", description: "We focus on shielding your investment first, knowing that a protected surface naturally looks better." },
              { title: "Prep Before Product", description: "Proper preparation is 80% of the job. We never shortcut the process to rush to application." },
              { title: "Function Before Shine", description: "A coating that fails doesn't matter how it looked on day one. We prioritize long-term performance." },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories - Asset-Based Breakdown */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            badge="Asset Types"
            title="We Protect What You Drive, Tow, and Operate"
            description="Not all assets are scaled-up cars. Each vehicle type has unique challenges, materials, and environmental exposures that require specialized approaches."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {vehicleCategories.map((category) => (
              <VehicleCategoryCard
                key={category.id}
                category={category}
                variant="large"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-card/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Protection Services"
            description="Organized by function, not by marketing. Each service category addresses specific needs across all vehicle types."
          />
          
          <div className="space-y-12 mt-12">
            {(Object.keys(servicesByCategory) as Service["category"][]).map((categoryKey) => {
              const categoryServices = servicesByCategory[categoryKey];
              if (categoryServices.length === 0) return null;
              
              const CategoryIcon = categoryIcons[categoryKey];
              
              return (
                <div key={categoryKey}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {serviceCategoryLabels[categoryKey]}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service) => {
                      const ServiceIcon = getServiceIcon(service.icon);
                      return (
                        <Link
                          key={service.id}
                          to={`/${service.slug}-spartanburg-sc`}
                          className="group block p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <ServiceIcon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                {service.shortDescription}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {service.applicableVehicles.slice(0, 3).map((vehicleId) => {
                                  const vehicle = vehicleCategories.find(v => v.id === vehicleId);
                                  return vehicle ? (
                                    <span key={vehicleId} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                      {vehicle.name.split(" ")[0]}
                                    </span>
                                  ) : null;
                                })}
                                {service.applicableVehicles.length > 3 && (
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                    +{service.applicableVehicles.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center text-primary text-sm font-medium mt-4 pt-4 border-t border-border/50">
                            View Packages & Pricing
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Off-Road & Heavy Equipment Authority Section (Phase 5) */}
      <section className="py-20 bg-gradient-to-br from-background via-card/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-medium">Specialized Expertise</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Off-Road & Heavy-Duty
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Specialization</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We've recently expanded our ceramic coating services to heavy equipment and machinery. 
                This isn't theoretical—it's hands-on experience protecting real work assets from 
                industrial environments.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Undercoating designed for mud, water, and rock impact",
                  "Ceramic coatings that resist industrial chemicals and abrasion",
                  "Protection protocols for equipment stored outdoors long-term",
                  "Experience with construction, agricultural, and commercial machinery",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/services/off-road">Off-Road Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/50">
                  <Link to="/services/heavy-equipment">Heavy Equipment</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-card/80 border-border/50 backdrop-blur">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Who This Is For</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Off-Road Enthusiasts", desc: "Jeep owners, UTV riders, trail trucks" },
                      { title: "Contractors", desc: "Construction and excavation equipment" },
                      { title: "Fleet Operators", desc: "Commercial vehicle and equipment fleets" },
                      { title: "Agricultural Operations", desc: "Farm equipment and machinery" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                        <Eye className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">{item.title}</span>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Inspection-First Workflow */}
      <section className="py-16 bg-card/30">
        <div className="container-custom text-center">
          <SectionHeading
            badge="Our Process"
            title="Inspection-First Workflow"
            description="We don't sell flat packages. Every service begins with a thorough assessment of your asset's condition, use case, and protection needs."
          />
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { step: "1", title: "Inspect", desc: "Thorough assessment of condition and needs" },
              { step: "2", title: "Plan", desc: "Custom protection strategy for your asset" },
              { step: "3", title: "Prepare", desc: "Proper prep before any product application" },
              { step: "4", title: "Protect", desc: "Professional application with quality check" },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Talk About Your Asset
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's a daily driver, weekend toy, work truck, or piece of heavy equipment—we'll 
            develop a protection plan that makes sense for how you use it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/booking">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary/50">
              <Link to="/estimate">Get Price Estimate</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg">
              <a href={`tel:${businessInfo.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                {businessInfo.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
