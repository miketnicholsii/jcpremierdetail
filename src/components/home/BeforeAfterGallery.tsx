import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/AnimatedSection";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

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

const BeforeAfterGallery = memo(() => {
  const [currentGalleryItem, setCurrentGalleryItem] = useState(0);

  return (
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
                key={item.title}
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
  );
});

BeforeAfterGallery.displayName = "BeforeAfterGallery";

export default BeforeAfterGallery;
