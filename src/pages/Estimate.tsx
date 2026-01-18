import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { services, addOnServices } from "@/data/services";
import { vehicleSizes } from "@/data/business";

const Estimate = () => {
  const [vehicleSize, setVehicleSize] = useState("medium");
  const [selectedService, setSelectedService] = useState("ceramic-coating");
  const [selectedPackage, setSelectedPackage] = useState("silver");
  const [addOns, setAddOns] = useState<string[]>([]);

  const service = services.find((s) => s.id === selectedService);
  const pkg = service?.packages.find((p) => p.id === selectedPackage);
  const price = pkg?.prices[vehicleSize as keyof typeof pkg.prices] || 0;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Price Estimator" title="Get Your Estimate" description="Select your options below for an instant price estimate." />
          
          <div className="premium-card rounded-xl p-8 border border-border">
            <div className="space-y-8">
              <div>
                <Label className="text-lg font-semibold mb-4 block">Vehicle Size</Label>
                <RadioGroup value={vehicleSize} onValueChange={setVehicleSize} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {vehicleSizes.map((size) => (
                    <div key={size.id} className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:border-primary cursor-pointer">
                      <RadioGroupItem value={size.id} id={size.id} />
                      <Label htmlFor={size.id} className="cursor-pointer">
                        <span className="font-medium">{size.name}</span>
                        <p className="text-xs text-muted-foreground">{size.description}</p>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg font-semibold mb-4 block">Service</Label>
                <RadioGroup value={selectedService} onValueChange={(v) => { setSelectedService(v); setSelectedPackage(services.find(s => s.id === v)?.packages[0]?.id || ""); }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <div key={s.id} className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:border-primary cursor-pointer">
                      <RadioGroupItem value={s.id} id={s.id} />
                      <Label htmlFor={s.id} className="cursor-pointer font-medium">{s.name}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {service && (
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Package</Label>
                  <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.packages.map((p) => (
                      <div key={p.id} className={`p-4 border rounded-lg cursor-pointer ${selectedPackage === p.id ? 'border-primary bg-primary/5' : 'border-border'}`}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={p.id} id={p.id} />
                          <Label htmlFor={p.id} className="cursor-pointer flex-1">
                            <span className="font-semibold">{p.name}</span>
                            {p.duration && <span className="text-sm text-muted-foreground ml-2">({p.duration})</span>}
                            <p className="text-sm text-muted-foreground">{p.description}</p>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-xl text-center">
              <p className="text-sm text-muted-foreground mb-2">Estimated Price</p>
              <p className="text-4xl font-bold text-primary">${price.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-2">*Final price may vary based on vehicle condition</p>
              <Button asChild size="lg" className="mt-6 btn-premium">
                <Link to="/booking">Book This Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Estimate;