import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo, getPhoneLink, serviceAreas } from "@/data/business";
import { services } from "@/data/services";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Plans", path: "/maintenance-plans" },
    { name: "Estimate", path: "/estimate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">JC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">JC Premier Detail</span>
              <p className="text-xs text-muted-foreground">Professional Detailing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive("/about") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              About
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover">
                      <li className="col-span-2">
                        <Link
                          to="/services"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">All Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            View our complete range of detailing services
                          </p>
                        </Link>
                      </li>
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={`/${service.slug}-spartanburg-sc`}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                            <p className="line-clamp-1 text-sm leading-snug text-muted-foreground mt-1">
                              {service.shortDescription}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-primary">
                    Locations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px] gap-2 p-4 bg-popover">
                      {serviceAreas.map((area) => (
                        <li key={area.id}>
                          <Link
                            to={`/auto-detailing-${area.slug}`}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {area.name}, {area.state}
                              {area.isPrimary && (
                                <span className="ml-2 text-xs text-primary">(Primary)</span>
                              )}
                            </div>
                            <p className="line-clamp-1 text-sm leading-snug text-muted-foreground mt-1">
                              {area.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/gallery"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive("/gallery") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Gallery
            </Link>

            <Link
              to="/maintenance-plans"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive("/maintenance-plans") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Plans
            </Link>

            <Link
              to="/estimate"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive("/estimate") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Estimate
            </Link>

            <Link
              to="/contact"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive("/contact") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={getPhoneLink()} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              {businessInfo.phone}
            </a>
            <Button asChild className="btn-premium">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/services"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Services
              </Link>
              <div className="border-t border-border my-2" />
              <a
                href={getPhoneLink()}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {businessInfo.phone}
              </a>
              <div className="px-4 pt-2">
                <Button asChild className="w-full btn-premium">
                  <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;