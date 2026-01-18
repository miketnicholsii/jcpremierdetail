import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { businessInfo, serviceAreas } from "@/data/business";
import { services } from "@/data/services";
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
  Car
} from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Ceramic Pro Certified" },
  { icon: Award, label: "5+ Years Experience" },
  { icon: Users, label: "500+ Happy Clients" },
  { icon: Star, label: "5-Star Rated" },
];

const testimonials = [
  {
    name: "Michael R.",
    location: "Spartanburg, SC",
    text: "JC Premier Detail transformed my Tesla. The ceramic coating is flawless and the paint correction removed years of swirl marks. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Greenville, SC",
    text: "Best detailing service in the Upstate. Professional, thorough, and the results speak for themselves. My car looks better than when I bought it!",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Greer, SC",
    text: "The Platinum interior detail was worth every penny. They got stains out I thought were permanent. Incredible attention to detail.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        {/* Animated accent lines */}
        <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Auto Detailing & Paint Correction</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Your Vehicle Deserves</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                Showroom Perfection
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Professional ceramic coating, paint correction, and detailing services 
              in Spartanburg, Greenville, Greer & Boiling Springs, SC.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/booking">Book Your Detail</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                <Link to="/estimate">Get Price Estimate</Link>
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>{businessInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Mon-Fri 8AM-5PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Spartanburg, SC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-border/50 bg-card/50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <badge.icon className="w-10 h-10 text-primary mb-3" />
                <span className="font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <SectionHeading
            title="Our Premium Services"
            description="From ceramic coating to complete paint correction, we offer the full spectrum of professional detailing services."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <Link key={service.id} to={`/services#${service.id}`}>
                <Card className="group h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why Choose JC Premier Detail?"
                description="We're not just detailers—we're craftsmen dedicated to perfection."
                centered={false}
              />
              
              <div className="space-y-4 mt-8">
                {[
                  "Ceramic Pro certified professionals",
                  "5+ years of experience in paint correction",
                  "Premium products and cutting-edge techniques",
                  "Meticulous attention to every detail",
                  "Climate-appropriate solutions for SC weather",
                  "Satisfaction guaranteed on every service",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="mt-8" size="lg">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground">Professional Results</p>
                  <p className="text-muted-foreground">Every Time</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <SectionHeading
            title="Serving the Upstate"
            description="Premium auto detailing services across South Carolina's Upstate region."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceAreas.map((area) => (
              <Link key={area.slug} to={`/auto-detailing-${area.slug}`}>
                <Card className="group bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {area.name}, {area.state}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      View Local Services
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container px-4">
          <SectionHeading
            title="What Our Clients Say"
            description="Don't just take our word for it—hear from our satisfied customers."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for That Showroom Shine?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your appointment today or get an instant price estimate for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary/50">
                <Link to="/estimate">Get Estimate</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-lg">
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
