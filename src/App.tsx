import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Estimate from "./pages/Estimate";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import MaintenancePlans from "./pages/MaintenancePlans";
import LocationPage from "./pages/LocationPage";
import ServiceLocationPage from "./pages/ServiceLocationPage";
import VehicleCategoryPage from "./pages/VehicleCategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/maintenance-plans" element={<MaintenancePlans />} />
          
          {/* Vehicle Category Pages */}
          <Route path="/services/:slug" element={<VehicleCategoryPage />} />
          
          {/* Location Pages */}
          <Route path="/auto-detailing-spartanburg-sc" element={<LocationPage cityId="spartanburg" />} />
          <Route path="/auto-detailing-greenville-sc" element={<LocationPage cityId="greenville" />} />
          <Route path="/auto-detailing-greer-sc" element={<LocationPage cityId="greer" />} />
          <Route path="/auto-detailing-boiling-springs-sc" element={<LocationPage cityId="boiling-springs" />} />
          
          {/* Service + Location Pages - Spartanburg */}
          <Route path="/ceramic-coating-spartanburg-sc" element={<ServiceLocationPage serviceId="ceramic-coating" cityId="spartanburg" />} />
          <Route path="/paint-correction-spartanburg-sc" element={<ServiceLocationPage serviceId="paint-correction" cityId="spartanburg" />} />
          <Route path="/paint-protection-film-spartanburg-sc" element={<ServiceLocationPage serviceId="paint-protection-film" cityId="spartanburg" />} />
          <Route path="/interior-detailing-spartanburg-sc" element={<ServiceLocationPage serviceId="interior-detailing" cityId="spartanburg" />} />
          <Route path="/exterior-detailing-spartanburg-sc" element={<ServiceLocationPage serviceId="exterior-detailing" cityId="spartanburg" />} />
          <Route path="/maintenance-detailing-spartanburg-sc" element={<ServiceLocationPage serviceId="maintenance-detailing" cityId="spartanburg" />} />
          
          {/* Service + Location Pages - Greenville */}
          <Route path="/ceramic-coating-greenville-sc" element={<ServiceLocationPage serviceId="ceramic-coating" cityId="greenville" />} />
          <Route path="/paint-correction-greenville-sc" element={<ServiceLocationPage serviceId="paint-correction" cityId="greenville" />} />
          <Route path="/paint-protection-film-greenville-sc" element={<ServiceLocationPage serviceId="paint-protection-film" cityId="greenville" />} />
          <Route path="/interior-detailing-greenville-sc" element={<ServiceLocationPage serviceId="interior-detailing" cityId="greenville" />} />
          <Route path="/exterior-detailing-greenville-sc" element={<ServiceLocationPage serviceId="exterior-detailing" cityId="greenville" />} />
          <Route path="/maintenance-detailing-greenville-sc" element={<ServiceLocationPage serviceId="maintenance-detailing" cityId="greenville" />} />
          
          {/* Service + Location Pages - Greer */}
          <Route path="/ceramic-coating-greer-sc" element={<ServiceLocationPage serviceId="ceramic-coating" cityId="greer" />} />
          <Route path="/paint-correction-greer-sc" element={<ServiceLocationPage serviceId="paint-correction" cityId="greer" />} />
          <Route path="/paint-protection-film-greer-sc" element={<ServiceLocationPage serviceId="paint-protection-film" cityId="greer" />} />
          <Route path="/interior-detailing-greer-sc" element={<ServiceLocationPage serviceId="interior-detailing" cityId="greer" />} />
          <Route path="/exterior-detailing-greer-sc" element={<ServiceLocationPage serviceId="exterior-detailing" cityId="greer" />} />
          <Route path="/maintenance-detailing-greer-sc" element={<ServiceLocationPage serviceId="maintenance-detailing" cityId="greer" />} />
          
          {/* Service + Location Pages - Boiling Springs */}
          <Route path="/ceramic-coating-boiling-springs-sc" element={<ServiceLocationPage serviceId="ceramic-coating" cityId="boiling-springs" />} />
          <Route path="/paint-correction-boiling-springs-sc" element={<ServiceLocationPage serviceId="paint-correction" cityId="boiling-springs" />} />
          <Route path="/paint-protection-film-boiling-springs-sc" element={<ServiceLocationPage serviceId="paint-protection-film" cityId="boiling-springs" />} />
          <Route path="/interior-detailing-boiling-springs-sc" element={<ServiceLocationPage serviceId="interior-detailing" cityId="boiling-springs" />} />
          <Route path="/exterior-detailing-boiling-springs-sc" element={<ServiceLocationPage serviceId="exterior-detailing" cityId="boiling-springs" />} />
          <Route path="/maintenance-detailing-boiling-springs-sc" element={<ServiceLocationPage serviceId="maintenance-detailing" cityId="boiling-springs" />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;