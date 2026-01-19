import { memo, useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import usePageVisibility from "@/hooks/usePageVisibility";
import { businessInfo } from "@/data/business";

const testimonials = [
  {
    name: "Michael R.",
    location: "Spartanburg, SC",
    vehicle: "Tesla Model 3",
    service: "Ceramic Coating",
    text: "JC Premier Detail transformed my Tesla. The ceramic coating is flawless and the paint correction removed years of swirl marks. The attention to detail was incredible—they even showed me the before and after under inspection lights. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Greenville, SC",
    vehicle: "BMW X5",
    service: "Full Detail + PPF",
    text: "Best detailing service in the Upstate. Professional, thorough, and the results speak for themselves. My car looks better than when I bought it! Josh took the time to explain every step of the process and the protection benefits.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Greer, SC",
    vehicle: "Ford F-250",
    service: "Interior Detail",
    text: "The Platinum interior detail was worth every penny. They got stains out I thought were permanent. My truck's cab is cleaner than it's been in years. Incredible attention to detail—every vent, every crevice, spotless.",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    location: "Boiling Springs, SC",
    vehicle: "Jeep Wrangler",
    service: "Undercoating + Ceramic",
    text: "As an off-road enthusiast, I needed protection that could handle trail abuse. JC Premier Detail delivered. The undercoating has already saved my Jeep from rock damage multiple times. Worth every penny!",
    rating: 5,
  },
  {
    name: "Robert H.",
    location: "Spartanburg, SC",
    vehicle: "Pontoon Boat",
    service: "Marine Ceramic Coating",
    text: "I didn't know ceramic coating was an option for boats until I found JC Premier. The gel coat looks incredible now, and cleaning after lake trips takes half the time. Fantastic work on a unique project.",
    rating: 5,
  },
];

const TestimonialsCarousel = memo(() => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const isPageVisible = usePageVisibility();
  const shouldReduceMotion = useReducedMotion();

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPageVisible) return undefined;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(interval);
  }, [isPageVisible, nextTestimonial]);

  const variants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-card/50 via-background to-card/30 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,hsl(205_100%_50%/0.05),transparent)]" />
      
      <div className="container-custom relative z-10 px-4">
        <FadeIn>
          <SectionHeading
            badge="5-Star Reviews"
            title="What Our Clients Say"
            description="Don't just take our word for it—hear from vehicle owners across the Upstate."
          />
        </FadeIn>

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute inset-0 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 sm:w-14 sm:h-14 text-primary/20 absolute top-4 right-4 sm:top-8 sm:right-8" />

                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 line-clamp-4 sm:line-clamp-none">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-lg sm:text-xl font-bold text-primary">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{testimonials[currentTestimonial].name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].vehicle} • {testimonials[currentTestimonial].service}
                    </p>
                    <p className="text-xs sm:text-sm text-primary">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          </div>

          {/* Google Reviews CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="border-primary/30 hover:border-primary/50">
                <a 
                  href={businessInfo.social.google} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  Read More Reviews on Google
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
});

TestimonialsCarousel.displayName = "TestimonialsCarousel";

export default TestimonialsCarousel;
