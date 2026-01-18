import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Car, Armchair, Wrench } from "lucide-react";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  citySlug?: string;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Shield: Shield,
  Sparkles: Sparkles,
  Car: Car,
  Armchair: Armchair,
  Wrench: Wrench,
};

const ServiceCard = ({ service, citySlug = "spartanburg-sc", className }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || Shield;
  const href = `/${service.slug}-${citySlug}`;

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