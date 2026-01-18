import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2, Loader2 } from "lucide-react";
import { format, addDays } from "date-fns";
import { services } from "@/data/services";
import { vehicleSizes, businessInfo } from "@/data/business";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const Booking = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [date, setDate] = useState<Date>();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    vehicleSize: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleColor: "",
    appointmentTime: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.appointmentTime) {
      toast.error("Please select a date and time for your appointment");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("bookings").insert({
        customer_name: `${formData.firstName} ${formData.lastName}`,
        customer_email: formData.email,
        customer_phone: formData.phone,
        service_id: formData.service,
        vehicle_size: formData.vehicleSize,
        vehicle_year: formData.vehicleYear || null,
        vehicle_make: formData.vehicleMake,
        vehicle_model: formData.vehicleModel,
        vehicle_color: formData.vehicleColor || null,
        appointment_date: format(date, "yyyy-MM-dd"),
        appointment_time: formData.appointmentTime,
        notes: formData.notes || null,
        status: "pending",
      });

      if (error) throw error;

      setIsSuccess(true);
      toast.success("Booking submitted successfully!");
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to submit booking. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center">
          <div className="container-custom max-w-xl text-center">
            <div className="premium-card rounded-xl p-12 border border-primary/30">
              <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Booking Submitted!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for choosing JC Premier Detail. We'll confirm your appointment within 24 hours.
              </p>
              <div className="bg-card/50 rounded-lg p-4 mb-6 text-left">
                <p><strong>Service:</strong> {services.find(s => s.id === formData.service)?.name}</p>
                <p><strong>Date:</strong> {date && format(date, "PPPP")}</p>
                <p><strong>Time:</strong> {formData.appointmentTime}</p>
                <p><strong>Vehicle:</strong> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Questions? Call us at <a href={`tel:${businessInfo.phone}`} className="text-primary hover:underline">{businessInfo.phone}</a>
              </p>
              <Button onClick={() => navigate("/")} size="lg">
                Back to Home
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <SectionHeading 
            badge="Book Now" 
            title="Schedule Your Detail" 
            description="Fill out the form below to book your appointment. We'll confirm within 24 hours." 
          />
          
          <div className="premium-card rounded-xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      required 
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      placeholder="(864) 555-0123" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Service Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Service *</Label>
                    <Select onValueChange={(v) => handleSelectChange("service", v)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Vehicle Size *</Label>
                    <Select onValueChange={(v) => handleSelectChange("vehicleSize", v)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleSizes.map((v) => (
                          <SelectItem key={v.id} value={v.id}>{v.name} - {v.description}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Vehicle Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="vehicleYear">Year</Label>
                    <Input 
                      id="vehicleYear" 
                      placeholder="2024" 
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="vehicleMake">Make *</Label>
                    <Input 
                      id="vehicleMake" 
                      placeholder="BMW" 
                      required
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="vehicleModel">Model *</Label>
                    <Input 
                      id="vehicleModel" 
                      placeholder="M4" 
                      required
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="vehicleColor">Color</Label>
                    <Input 
                      id="vehicleColor" 
                      placeholder="Black" 
                      value={formData.vehicleColor}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Appointment */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Appointment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className={cn(
                            "w-full justify-start text-left font-normal", 
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar 
                          mode="single" 
                          selected={date} 
                          onSelect={setDate} 
                          initialFocus
                          disabled={(date) => 
                            date < addDays(new Date(), 1) || 
                            date.getDay() === 0
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>Preferred Time *</Label>
                    <Select onValueChange={(v) => handleSelectChange("appointmentTime", v)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any special requests or details about your vehicle's condition..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-premium" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Appointment"
                )}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll confirm your appointment within 24 hours. 
                Call <a href={`tel:${businessInfo.phone}`} className="text-primary hover:underline">{businessInfo.phone}</a> for immediate booking.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
