import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { businessInfo, serviceAreas, getPhoneLink } from "@/data/business";
import { services, vehicleCategories } from "@/data/services";
import { getServiceIcon } from "@/components/ui/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
  Quote,
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

const testimonials = [
  {
    name: "Michael R.",
    location: "Spartanburg, SC",
    vehicle: "Tesla Model 3",
    service: "Ceramic Coating",
    text: "JC Premier Detail transformed my Tesla. The ceramic coating is flawless and the paint correction removed years of swirl marks. The attention to detail was incredible—they even showed me the before and after under inspection lights. Highly recommend!",
    rating: 5,
    image: null,
  },
  {
    name: "Sarah T.",
    location: "Greenville, SC",
    vehicle: "BMW X5",
    service: "Full Detail + PPF",
    text: "Best detailing service in the Upstate. Professional, thorough, and the results speak for themselves. My car looks better than when I bought it! Josh took the time to explain every step of the process and the protection benefits.",
    rating: 5,
    image: null,
  },
  {
    name: "David K.",
    location: "Greer, SC",
    vehicle: "Ford F-250",
    service: "Interior Detail",
    text: "The Platinum interior detail was worth every penny. They got stains out I thought were permanent. My truck's cab is cleaner than it's been in years. Incredible attention to detail—every vent, every crevice, spotless.",
    rating: 5,
    image: null,
  },
  {
    name: "Jennifer M.",
    location: "Boiling Springs, SC",
    vehicle: "Jeep Wrangler",
    service: "Undercoating + Ceramic",
    text: "As an off-road enthusiast, I needed protection that could handle trail abuse. JC Premier Detail delivered. The undercoating has already saved my Jeep from rock damage multiple times. Worth every penny!",
    rating: 5,
    image: null,
  },
  {
    name: "Robert H.",
    location: "Spartanburg, SC",
    vehicle: "Pontoon Boat",
    service: "Marine Ceramic Coating",
    text: "I didn't know ceramic coating was an option for boats until I found JC Premier. The gel coat looks incredible now, and cleaning after lake trips takes half the time. Fantastic work on a unique project.",
    rating: 5,
    image: null,
  },
];

const beforeAfterGallery = [
  {
    title: "Paint Correction",
    description: "Severe swirl marks removed, restoring mirror-like finish",
    beforeImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    title: "Interior Restoration",
    description: "Complete interior transformation with deep cleaning",
    beforeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
  },
  {
    title: "Ceramic Coating",
    description: "5-year ceramic protection with incredible depth and gloss",
    beforeImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  },
];

const processSteps = [
  { icon: Phone, title: "Book", description: "Schedule your appointment online or call us directly" },
  { icon: Car, title: "Drop Off", description: "Bring your vehicle to our state-of-the-art facility" },
  { icon: Sparkles, title: "Transform", description: "We work our magic with precision and care" },
  { icon: ThumbsUp, title: "Enjoy", description: "Drive away with showroom-perfect results" },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryItem, setCurrentGalleryItem] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Spartanburg's Premier Detail Studio</span>
                </motion.div>

                {/* Main heading */}
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-foreground">Protection That</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary">
                    Performs
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Professional ceramic coating, paint protection film & paint correction. 
                  <span className="text-foreground font-medium"> We don't just clean—we protect.</span>
                </motion.p>

                {/* Quick stats */}
                <motion.div 
                  className="flex flex-wrap gap-6 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
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
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
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
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
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
                  <Link to={`/${service.slug}-spartanburg-sc`} className="group block h-full">
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

      {/* Before/After Gallery */}
      <section className="py-20 bg-card/30">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Results"
              title="See The Difference"
              description="Real results from real projects. Drag the slider to reveal the transformation."
            />
          </FadeIn>

          <div className="mt-12">
            {/* Gallery navigation */}
            <div className="flex justify-center gap-4 mb-8">
              {beforeAfterGallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentGalleryItem(idx)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentGalleryItem === idx
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Active gallery item */}
            <FadeIn key={currentGalleryItem}>
              <div className="max-w-4xl mx-auto">
                <BeforeAfterSlider
                  beforeImage={beforeAfterGallery[currentGalleryItem].beforeImage}
                  afterImage={beforeAfterGallery[currentGalleryItem].afterImage}
                  beforeLabel="Before"
                  afterLabel="After"
                />
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {beforeAfterGallery[currentGalleryItem].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {beforeAfterGallery[currentGalleryItem].description}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center mt-10">
                <Button asChild>
                  <Link to="/gallery">
                    View Full Gallery
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

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

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-card/50 via-background to-card/30 overflow-hidden">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Reviews"
              title="What Our Clients Say"
              description="Don't just take our word for it—hear from vehicle owners across the Upstate."
            />
          </FadeIn>

          <div className="relative mt-12 max-w-4xl mx-auto">
            {/* Main testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 relative"
              >
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].vehicle} • {testimonials[currentTestimonial].service}
                    </p>
                    <p className="text-sm text-primary">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentTestimonial ? "w-8 bg-primary" : "w-2 bg-primary/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
                <Link to={`/auto-detailing-${area.slug}`}>
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