import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Estimate = lazy(() => import("./pages/Estimate"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const MaintenancePlans = lazy(() => import("./pages/MaintenancePlans"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const ServiceLocationPage = lazy(() => import("./pages/ServiceLocationPage"));
const VehicleCategoryPage = lazy(() => import("./pages/VehicleCategoryPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/estimate" element={<Estimate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/maintenance-plans" element={<MaintenancePlans />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Vehicle Category Pages */}
              <Route path="/services/:slug" element={<VehicleCategoryPage />} />

              {/* Location Pages */}
              <Route path="/auto-detailing-spartanburg-sc" element={<LocationPage cityId="spartanburg" />} />
              <Route path="/auto-detailing-greenville-sc" element={<LocationPage cityId="greenville" />} />
              <Route path="/auto-detailing-greer-sc" element={<LocationPage cityId="greer" />} />
              <Route path="/auto-detailing-boiling-springs-sc" element={<LocationPage cityId="boiling-springs" />} />

              {/* Service + Location Pages - Spartanburg */}
              <Route path="/ceramic-coating-spartanburg-sc" element={<ServiceLocationPage serviceSlug="ceramic-coating" cityId="spartanburg" />} />
              <Route path="/paint-correction-spartanburg-sc" element={<ServiceLocationPage serviceSlug="paint-correction" cityId="spartanburg" />} />
              <Route path="/paint-protection-film-spartanburg-sc" element={<ServiceLocationPage serviceSlug="paint-protection-film" cityId="spartanburg" />} />
              <Route path="/interior-detailing-spartanburg-sc" element={<ServiceLocationPage serviceSlug="interior-detailing" cityId="spartanburg" />} />
              <Route path="/exterior-detailing-spartanburg-sc" element={<ServiceLocationPage serviceSlug="exterior-detailing" cityId="spartanburg" />} />
              <Route path="/maintenance-detailing-spartanburg-sc" element={<ServiceLocationPage serviceSlug="maintenance-detailing" cityId="spartanburg" />} />

              {/* Service + Location Pages - Greenville */}
              <Route path="/ceramic-coating-greenville-sc" element={<ServiceLocationPage serviceSlug="ceramic-coating" cityId="greenville" />} />
              <Route path="/paint-correction-greenville-sc" element={<ServiceLocationPage serviceSlug="paint-correction" cityId="greenville" />} />
              <Route path="/paint-protection-film-greenville-sc" element={<ServiceLocationPage serviceSlug="paint-protection-film" cityId="greenville" />} />
              <Route path="/interior-detailing-greenville-sc" element={<ServiceLocationPage serviceSlug="interior-detailing" cityId="greenville" />} />
              <Route path="/exterior-detailing-greenville-sc" element={<ServiceLocationPage serviceSlug="exterior-detailing" cityId="greenville" />} />
              <Route path="/maintenance-detailing-greenville-sc" element={<ServiceLocationPage serviceSlug="maintenance-detailing" cityId="greenville" />} />

              {/* Service + Location Pages - Greer */}
              <Route path="/ceramic-coating-greer-sc" element={<ServiceLocationPage serviceSlug="ceramic-coating" cityId="greer" />} />
              <Route path="/paint-correction-greer-sc" element={<ServiceLocationPage serviceSlug="paint-correction" cityId="greer" />} />
              <Route path="/paint-protection-film-greer-sc" element={<ServiceLocationPage serviceSlug="paint-protection-film" cityId="greer" />} />
              <Route path="/interior-detailing-greer-sc" element={<ServiceLocationPage serviceSlug="interior-detailing" cityId="greer" />} />
              <Route path="/exterior-detailing-greer-sc" element={<ServiceLocationPage serviceSlug="exterior-detailing" cityId="greer" />} />
              <Route path="/maintenance-detailing-greer-sc" element={<ServiceLocationPage serviceSlug="maintenance-detailing" cityId="greer" />} />

              {/* Service + Location Pages - Boiling Springs */}
              <Route path="/ceramic-coating-boiling-springs-sc" element={<ServiceLocationPage serviceSlug="ceramic-coating" cityId="boiling-springs" />} />
              <Route path="/paint-correction-boiling-springs-sc" element={<ServiceLocationPage serviceSlug="paint-correction" cityId="boiling-springs" />} />
              <Route path="/paint-protection-film-boiling-springs-sc" element={<ServiceLocationPage serviceSlug="paint-protection-film" cityId="boiling-springs" />} />
              <Route path="/interior-detailing-boiling-springs-sc" element={<ServiceLocationPage serviceSlug="interior-detailing" cityId="boiling-springs" />} />
              <Route path="/exterior-detailing-boiling-springs-sc" element={<ServiceLocationPage serviceSlug="exterior-detailing" cityId="boiling-springs" />} />
              <Route path="/maintenance-detailing-boiling-springs-sc" element={<ServiceLocationPage serviceSlug="maintenance-detailing" cityId="boiling-springs" />} />

              <Route path="/:serviceLocationSlug" element={<ServiceLocationPage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
