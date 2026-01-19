import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import {
  galleryItems,
  serviceFilters,
  cityFilters,
  vehicleTypeFilters,
  getFilteredGalleryItems,
  GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Tag,
  Car,
  Filter,
  Grid3X3,
  LayoutGrid,
  Maximize2,
  Calendar,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [vehicleFilter, setVehicleFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = useMemo(
    () => getFilteredGalleryItems(serviceFilter, cityFilter, vehicleFilter),
    [serviceFilter, cityFilter, vehicleFilter]
  );

  const featuredItems = useMemo(
    () => filteredItems.filter((item) => item.featured),
    [filteredItems]
  );

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  const clearFilters = () => {
    setServiceFilter("all");
    setCityFilter("all");
    setVehicleFilter("all");
  };

  const activeFilterCount = [serviceFilter, cityFilter, vehicleFilter].filter(
    (f) => f !== "all"
  ).length;

  return (
    <Layout>
      <Helmet>
        <title>Before & After Gallery | JC Premier Detail | Spartanburg SC</title>
        <meta
          name="description"
          content="View our before and after gallery showcasing ceramic coating, paint correction, PPF, and detailing transformations. Real results from JC Premier Detail in Spartanburg SC."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(205_100%_50%/0.1),transparent_70%)]" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Real Results, Real Transformations</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Before & After{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Gallery
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                See the difference professional detailing makes. Drag the slider to reveal
                the transformation on each project.
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  {galleryItems.length}+ Projects
                </span>
                <span className="w-px h-4 bg-border" />
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />4 Service Areas
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-y border-border/50 bg-card/30 sticky top-16 z-40 backdrop-blur-lg">
        <div className="container-custom">
          {/* Filter Toggle & View Mode (Mobile) */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="border-primary/50"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">
                  {activeFilterCount}
                </span>
              )}
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                className="w-9 h-9"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                className="w-9 h-9"
                onClick={() => setViewMode("list")}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className={cn("space-y-4", showFilters ? "block" : "hidden lg:block")}>
            {/* Service Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Service:</span>
              {serviceFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setServiceFilter(f.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                    serviceFilter === f.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                  )}
                >
                  {f.name}
                </button>
              ))}
            </div>

            {/* Vehicle & Location Filters */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2">Vehicle:</span>
                {vehicleTypeFilters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setVehicleFilter(f.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      vehicleFilter === f.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                    )}
                  >
                    {f.name}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2">Location:</span>
                {cityFilters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCityFilter(f.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      cityFilter === f.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                    )}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter summary & clear */}
            {activeFilterCount > 0 && (
              <div className="flex items-center gap-4 pt-2">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="text-foreground font-medium">{filteredItems.length}</span> of{" "}
                  <span className="text-foreground font-medium">{galleryItems.length}</span> projects
                </p>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-primary">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>

          {/* Desktop View Toggle */}
          <div className="hidden lg:flex items-center justify-end mt-4">
            <div className="flex items-center gap-2 bg-card border border-border/50 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Large
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section (if viewing all) */}
      {serviceFilter === "all" && cityFilter === "all" && vehicleFilter === "all" && featuredItems.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-card/30 to-background">
          <div className="container-custom">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <h2 className="text-2xl font-bold text-foreground">Featured Transformations</h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredItems.slice(0, 2).map((item, idx) => (
                <FadeIn key={item.id} delay={idx * 0.1}>
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-primary/30 bg-card hover:border-primary/50 transition-all"
                  >
                    <div className="aspect-video relative">
                      <BeforeAfterSlider
                        beforeImage={item.beforeImage}
                        afterImage={item.afterImage}
                        beforeLabel="Before"
                        afterLabel="After"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full border border-border/50">
                          {item.serviceType}
                        </span>
                      </div>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-border/50">
                        <Maximize2 className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          {item.city}, SC
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4 text-primary" />
                          {item.packageUsed}
                        </span>
                        {item.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-primary" />
                            {item.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Gallery Grid */}
      <section className="py-12">
        <div className="container-custom">
          {filteredItems.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <Car className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more results.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            </FadeIn>
          ) : (
            <StaggerContainer
              className={cn(
                "grid gap-6",
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2"
              )}
            >
              {filteredItems.map((item) => (
                <StaggerItem key={item.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group"
                  >
                    <Card
                      onClick={() => setSelectedItem(item)}
                      className={cn(
                        "cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1",
                        viewMode === "list" && "md:flex"
                      )}
                    >
                      <div
                        className={cn(
                          "relative overflow-hidden",
                          viewMode === "grid" ? "aspect-video" : "aspect-video md:aspect-square md:w-1/2"
                        )}
                      >
                        {/* Before/After preview on hover */}
                        <div className="absolute inset-0">
                          <img
                            src={item.afterImage}
                            alt={`${item.title} - After`}
                            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                          />
                          <img
                            src={item.beforeImage}
                            alt={`${item.title} - Before`}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          />
                        </div>

                        {/* Labels */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                            {item.serviceType}
                          </span>
                          {item.featured && (
                            <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-medium rounded flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Hover instruction */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                          <div className="text-center text-white">
                            <Maximize2 className="w-8 h-8 mx-auto mb-2" />
                            <p className="text-sm font-medium">Click to view slider</p>
                          </div>
                        </div>

                        {/* Before/After indicator */}
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                          <span className="px-2 py-1 bg-black/70 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Before
                          </span>
                          <span className="px-2 py-1 bg-white/90 text-black text-xs rounded">
                            After
                          </span>
                        </div>
                      </div>

                      <CardContent
                        className={cn("p-4", viewMode === "list" && "md:flex-1 md:p-6")}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Car className="w-3 h-3 text-primary" />
                            {item.vehicleMake} {item.vehicleModel}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-primary" />
                            {item.city}
                          </span>
                          {item.packageUsed && (
                            <span className="flex items-center gap-1">
                              <Tag className="w-3 h-3 text-primary" />
                              {item.packageUsed}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
              <p className="text-muted-foreground mb-8">
                Your vehicle could be next in our gallery. Book your appointment today
                and experience the JC Premier Detail difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="glow-effect">
                  <Link to="/booking">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/50">
                  <Link to="/estimate">Get Price Estimate</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-card border-border/50 overflow-hidden">
          {selectedItem && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedItem.title}</DialogTitle>
              </DialogHeader>

              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center border border-border/50 hover:bg-card transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center border border-border/50 hover:bg-card transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {currentIndex < filteredItems.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center border border-border/50 hover:bg-card transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              <div className="flex flex-col lg:flex-row">
                {/* Slider */}
                <div className="lg:flex-1 aspect-video lg:aspect-auto lg:h-[70vh]">
                  <BeforeAfterSlider
                    beforeImage={selectedItem.beforeImage}
                    afterImage={selectedItem.afterImage}
                    beforeLabel="Before"
                    afterLabel="After"
                    className="h-full"
                  />
                </div>

                {/* Details panel */}
                <div className="lg:w-80 p-6 bg-card border-t lg:border-t-0 lg:border-l border-border/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {selectedItem.serviceType}
                    </span>
                    {selectedItem.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-sm font-medium rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-2">{selectedItem.title}</h2>

                  <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Vehicle</p>
                        <p className="font-medium text-foreground">
                          {selectedItem.vehicleMake} {selectedItem.vehicleModel}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">{selectedItem.city}, SC</p>
                      </div>
                    </div>

                    {selectedItem.packageUsed && (
                      <div className="flex items-center gap-3">
                        <Tag className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Package</p>
                          <p className="font-medium text-foreground">{selectedItem.packageUsed}</p>
                        </div>
                      </div>
                    )}

                    {selectedItem.duration && (
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-medium text-foreground">{selectedItem.duration}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border/50 pt-6 space-y-3">
                    <Button asChild className="w-full">
                      <Link to="/booking">Book This Service</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-primary/50">
                      <Link to={`/${selectedItem.serviceId}-spartanburg-sc`}>
                        Learn About {selectedItem.serviceType}
                      </Link>
                    </Button>
                  </div>

                  {/* Counter */}
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    {currentIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;