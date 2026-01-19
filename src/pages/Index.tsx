import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import BeforeAfterGallery from "@/components/home/BeforeAfterGallery";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import { businessInfo, serviceAreas, getPhoneLink } from "@/data/business";
import { services, vehicleCategories } from "@/data/services";
import { getServiceIcon } from "@/components/ui/ServiceCard";
import { getLocationPath, getServiceLocationPath } from "@/lib/routes";
import { motion, useReducedMotion } from "framer-motion";
import usePageVisibility from "@/hooks/usePageVisibility";
import {
  Shield,
  Star,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Car,
  Truck,
  Mountain,
  Anchor,
  Caravan,
  HardHat,
  ArrowRight,
  Play,
  Calendar,
  Zap,
  ThumbsUp,
  Timer,
} from "lucide-react";

const vehicleIcons: Record<string, React.ElementType> = {
  Car, Truck, Mountain, Anchor, Caravan, HardHat,
};

const trustBadges = [
  { icon: Shield, label: "Ceramic Pro Certified", value: "100%" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Star, label: "Google Rating", value: "5.0" },
];

const processSteps = [
  { icon: Phone, title: "Book", description: "Schedule your appointment online or call us directly" },
  { icon: Car, title: "Drop Off", description: "Bring your vehicle to our state-of-the-art facility" },
  { icon: Sparkles, title: "Transform", description: "We work our magic with precision and care" },
  { icon: ThumbsUp, title: "Enjoy", description: "Drive away with showroom-perfect results" },
];

const Index = () => {
  const shouldReduceMotion = useReducedMotion();
  const isPageVisible = usePageVisibility();
  const allowMotion = isPageVisible && !shouldReduceMotion;
  const heroTransition = (delay: number) =>
    shouldReduceMotion ? { duration: 0, delay: 0 } : { delay };

  // Core 6 services
  const coreServices = services.filter((s) =>
    ["ceramic-coating", "paint-correction", "paint-protection-film", "interior-detailing", "exterior-detailing", "maintenance-detailing"].includes(s.id)
  );

  return (
    <Layout>
      <Helmet>
        <title>JC Premier Detail | Spartanburg SC Auto Detailing, Ceramic Coating & PPF</title>
        <meta
          name="description"
          content="JC Premier Detail offers professional ceramic coating, paint protection film, paint correction & detailing in Spartanburg, Greenville, Greer & Boiling Springs SC. Call (864) 542-3617."
        />
      </Helmet>

      {/* Hero Section - Immersive with Video Placeholder */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(205_100%_50%/0.15),transparent)]" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(205 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(205 100% 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating accent elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={allowMotion ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : { scale: 1, opacity: 0.3 }}
          transition={allowMotion ? { duration: 8, repeat: Infinity } : { duration: 0 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={allowMotion ? { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] } : { scale: 1, opacity: 0.2 }}
          transition={allowMotion ? { duration: 6, repeat: Infinity } : { duration: 0 }}
        />
        
        {/* Accent lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-2/3 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <FadeIn>
              <div className="max-w-2xl">
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary mb-8"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.2)}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Spartanburg's Premier Detail Studio</span>
                </motion.div>

                {/* Main heading */}
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.3)}
                >
                  <span className="text-foreground">Protection That</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary">
                    Performs
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.4)}
                >
                  Professional ceramic coating, paint protection film & paint correction. 
                  <span className="text-foreground font-medium"> We don't just clean—we protect.</span>
                </motion.p>

                {/* Quick stats */}
                <motion.div 
                  className="flex flex-wrap gap-6 mb-8"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.5)}
                >
                  {[
                    { value: "500+", label: "Vehicles Protected" },
                    { value: "5.0", label: "Google Rating" },
                    { value: "5+", label: "Years Experience" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.6)}
                >
                  <Button asChild size="lg" className="text-lg px-8 py-6 glow-effect">
                    <Link to="/booking">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Your Detail
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/50">
                    <Link to="/estimate">
                      <Zap className="w-5 h-5 mr-2" />
                      Instant Estimate
                    </Link>
                  </Button>
                </motion.div>

                {/* Contact bar */}
                <motion.div 
                  className="flex flex-wrap gap-6 text-muted-foreground"
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={heroTransition(0.7)}
                >
                  <a href={getPhoneLink()} className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call Now</p>
                      <p className="font-medium text-foreground">{businessInfo.phone}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Hours</p>
                      <p className="font-medium text-foreground">Mon-Fri 8-5</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            {/* Right: Visual element / Video placeholder */}
            <SlideInRight delay={0.4}>
              <div className="relative hidden lg:block">
                {/* Main visual card */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-card to-card/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                  
                  {/* Placeholder for video/image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                      <p className="text-foreground font-medium">Watch Our Work</p>
                      <p className="text-sm text-muted-foreground">See the transformation</p>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-card border border-border/50 rounded-xl p-4 shadow-lg"
                  animate={allowMotion ? { y: [0, -10, 0] } : { y: 0 }}
                  transition={allowMotion ? { duration: 4, repeat: Infinity } : { duration: 0 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">5-Year Protection</p>
                      <p className="text-xs text-muted-foreground">Ceramic Coating</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-xl p-4 shadow-lg"
                  animate={allowMotion ? { y: [0, 10, 0] } : { y: 0 }}
                  transition={allowMotion ? { duration: 5, repeat: Infinity } : { duration: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                      ))}
                    </div>
                    <div className="ml-2">
                      <p className="font-semibold text-foreground">500+ Reviews</p>
                      <p className="text-xs text-muted-foreground">5-Star Average</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/20 rounded-2xl" />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-2xl" />
              </div>
            </SlideInRight>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={allowMotion ? { y: [0, 10, 0] } : { y: 0 }}
          transition={allowMotion ? { duration: 2, repeat: Infinity } : { duration: 0 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trust Badges - Animated Counter Style */}
      <section className="py-16 border-y border-border/50 bg-gradient-to-r from-card/50 via-card to-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <badge.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{badge.value}</p>
                  <p className="text-sm text-muted-foreground">{badge.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services - Premium Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Our Services"
              title="Protection & Perfection"
              description="From paint correction to ceramic coating, we deliver results that exceed expectations."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreServices.map((service) => {
              const ServiceIcon = getServiceIcon(service.icon);
              const startingPrice = service.packages?.[0]?.prices?.small || 0;
              
              return (
                <StaggerItem key={service.id}>
                  <Link to={getServiceLocationPath(service.slug, "spartanburg-sc")} className="group block h-full">
                    <Card className="h-full bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <ServiceIcon className="w-7 h-7 text-primary" />
                          </div>
                          {startingPrice > 0 && (
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">Starting at</p>
                              <p className="text-lg font-bold text-primary">${startingPrice}</p>
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>

                        {/* Quick benefits */}
                        <div className="space-y-2 mb-4">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground truncate">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-primary font-medium text-sm pt-2 border-t border-border/50">
                          View Details & Pricing
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-primary/50">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <BeforeAfterGallery />

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="How It Works"
              title="Simple Process, Stunning Results"
              description="Getting your vehicle protected is easy. Here's how it works."
            />
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="text-center relative">
                  {/* Connector line */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}
                  
                  <div className="relative z-10">
                    {/* Step number */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/30">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm left-1/2 ml-6">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="glow-effect">
                <Link to="/booking">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Your Transformation
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Vehicle Categories */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="What We Protect"
              title="Every Vehicle Type. Every Size."
              description="From daily drivers to heavy equipment, we have specialized protection for every asset."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {vehicleCategories.map((category) => {
              const Icon = vehicleIcons[category.icon] || Car;
              return (
                <StaggerItem key={category.id}>
                  <Link
                    to={`/services/${category.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {category.shortDescription}
                      </p>
                      
                      <div className="flex items-center text-primary text-sm font-medium">
                        View Services
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-card/30">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Service Areas"
              title="Serving the Upstate"
              description="Proudly providing premium detailing services across South Carolina's Upstate region."
            />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceAreas.map((area, idx) => (
              <FadeIn key={area.slug} delay={idx * 0.1}>
                <Link to={getLocationPath(area.slug)}>
                  <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                          {area.name}, {area.state}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {area.isPrimary ? "Headquarters" : "Service Area"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(205_100%_50%/0.1),transparent_70%)]" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary mb-8">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Same-Week Appointments Available</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Showroom Perfection?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10">
                Join hundreds of vehicle owners in the Upstate who trust JC Premier Detail 
                for their protection needs. Book today and experience the difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-10 py-7 glow-effect">
                  <Link to="/booking">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 border-primary/50">
                  <a href={getPhoneLink()}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {businessInfo.phone}
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                No payment required until service is complete. Satisfaction guaranteed.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
