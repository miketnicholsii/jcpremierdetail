import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { services } from "@/data/services";
import { vehicleSizes, businessInfo } from "@/data/business";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <SectionHeading badge="Book Now" title="Schedule Your Detail" description="Fill out the form below to book your appointment." />
          
          <div className="premium-card rounded-xl p-8 border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label htmlFor="firstName">First Name</Label><Input id="firstName" placeholder="John" required /></div>
                <div><Label htmlFor="lastName">Last Name</Label><Input id="lastName" placeholder="Doe" required /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="john@example.com" required /></div>
                <div><Label htmlFor="phone">Phone</Label><Input id="phone" placeholder="(864) 555-0123" required /></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Service</Label>
                  <Select><SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                    <SelectContent>{services.map((s) => (<SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div><Label>Vehicle Size</Label>
                  <Select><SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                    <SelectContent>{vehicleSizes.map((v) => (<SelectItem key={v.id} value={v.id}>{v.name}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><Label htmlFor="year">Vehicle Year</Label><Input id="year" placeholder="2024" /></div>
                <div><Label htmlFor="make">Make</Label><Input id="make" placeholder="BMW" /></div>
                <div><Label htmlFor="model">Model</Label><Input id="model" placeholder="M4" /></div>
              </div>

              <div>
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />{date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={date} onSelect={setDate} initialFocus /></PopoverContent>
                </Popover>
              </div>

              <Button type="submit" className="w-full btn-premium" size="lg">Request Appointment</Button>
              <p className="text-sm text-muted-foreground text-center">We'll confirm your appointment within 24 hours. Call {businessInfo.phone} for immediate booking.</p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;