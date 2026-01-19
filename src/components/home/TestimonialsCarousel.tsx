import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/AnimatedSection";
import usePageVisibility from "@/hooks/usePageVisibility";

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

const TestimonialsCarousel = memo(() => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isPageVisible = usePageVisibility();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isPageVisible) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPageVisible]);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonialMotion = shouldReduceMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
        transition: { duration: 0.5 },
      };

  return (
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
              initial={testimonialMotion.initial}
              animate={testimonialMotion.animate}
              exit={testimonialMotion.exit}
              transition={testimonialMotion.transition}
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
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.name}
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
  );
});

TestimonialsCarousel.displayName = "TestimonialsCarousel";

export default TestimonialsCarousel;
