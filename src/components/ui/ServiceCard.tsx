import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Car, Armchair, Wrench, Droplets, ShieldCheck, Sun, Truck, Mountain, Anchor, Caravan, HardHat } from "lucide-react";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  citySlug?: string;
  className?: string;
  variant?: "default" | "compact";
}

const iconMap: Record<string, React.ElementType> = {
  Shield: Shield,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Car: Car,
  Truck: Truck,
  Mountain: Mountain,
  Anchor: Anchor,
  Caravan: Caravan,
  HardHat: HardHat,
  Armchair: Armchair,
  Wrench: Wrench,
  Droplets: Droplets,
  Sun: Sun,
};

export const getServiceIcon = (iconName: string): React.ElementType => {
  return iconMap[iconName] || Shield;
};

const ServiceCard = ({ service, citySlug = "spartanburg-sc", className, variant = "default" }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || Shield;
  const href = `/${service.slug}-${citySlug}`;

  if (variant === "compact") {
    return (
      <Link
        to={href}
        className={cn(
          "group flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300",
          className
        )}
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {service.name}
          </h4>
          <p className="text-sm text-muted-foreground truncate">{service.shortDescription}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </Link>
    );
  }

  return (
    <Link
      to={href}
      className={cn(
        "group block premium-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {service.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {service.shortDescription}
      </p>
      <div className="flex items-center text-primary text-sm font-medium">
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ServiceCard;
