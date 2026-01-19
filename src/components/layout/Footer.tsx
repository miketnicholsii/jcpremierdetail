import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { businessInfo, getPhoneLink, getEmailLink, getDirectionsLink, serviceAreas } from "@/data/business";
import { services } from "@/data/services";
import { getLocationPath, getServiceLocationPath } from "@/lib/routes";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-10 sm:py-16 lg:py-24 px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg sm:text-xl">JC</span>
              </div>
              <div>
                <span className="font-bold text-base sm:text-lg text-foreground">JC Premier Detail</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{businessInfo.tagline}</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 hidden sm:block">
              Professional auto detailing services in the Spartanburg, Greenville, Greer, and Boiling Springs areas. 
              We specialize in ceramic coatings, paint correction, and premium detailing.
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="hidden lg:block">
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={getServiceLocationPath(service.slug, "spartanburg-sc")}
                    className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-primary hover:text-primary/80 text-xs sm:text-sm font-medium transition-colors"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-6">Service Areas</h3>
            <ul className="space-y-2 sm:space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    to={getLocationPath(area.slug)}
                    className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors"
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{businessInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={getEmailLink()}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{businessInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={getDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{businessInfo.address.full}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon-Fri: {businessInfo.hours.weekdays}</p>
                  <p>Sat: {businessInfo.hours.saturday}</p>
                  <p>Sun: {businessInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} JC Premier Detail. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
