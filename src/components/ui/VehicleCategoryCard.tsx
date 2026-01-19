import { Link } from "react-router-dom";
import { ArrowRight, Car, Truck, Mountain, Anchor, Caravan, HardHat } from "lucide-react";
import { VehicleCategory } from "@/data/services";
import { cn } from "@/lib/utils";

interface VehicleCategoryCardProps {
  category: VehicleCategory;
  className?: string;
  variant?: "default" | "large";
}

const iconMap: Record<string, React.ElementType> = {
  Car: Car,
  Truck: Truck,
  Mountain: Mountain,
  Anchor: Anchor,
  Caravan: Caravan,
  HardHat: HardHat,
};

const VehicleCategoryCard = ({ category, className, variant = "default" }: VehicleCategoryCardProps) => {
  const Icon = iconMap[category.icon] || Car;

  if (variant === "large") {
    return (
      <Link
        to={`/services/${category.slug}`}
        className={cn(
          "group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500",
          className
        )}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {category.shortDescription}
          </p>
          
          <ul className="space-y-2 mb-6">
            {category.challenges.slice(0, 2).map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>
          
          <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
            View Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/services/${category.slug}`}
      className={cn(
        "group block p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {category.name}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {category.shortDescription}
      </p>
      
      <div className="flex items-center text-primary text-sm font-medium">
        Learn More
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default VehicleCategoryCard;
