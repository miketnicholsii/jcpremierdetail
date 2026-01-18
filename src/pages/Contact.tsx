import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { businessInfo, getPhoneLink, getEmailLink, getDirectionsLink } from "@/data/business";

const Contact = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading badge="Contact Us" title="Get In Touch" description="Have questions? We'd love to hear from you." />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <a href={getPhoneLink()} className="flex items-start gap-4 p-4 premium-card rounded-xl border border-border hover:border-primary transition-colors">
                <Phone className="w-6 h-6 text-primary" />
                <div><p className="font-semibold">Phone</p><p className="text-muted-foreground">{businessInfo.phone}</p></div>
              </a>
              <a href={getEmailLink()} className="flex items-start gap-4 p-4 premium-card rounded-xl border border-border hover:border-primary transition-colors">
                <Mail className="w-6 h-6 text-primary" />
                <div><p className="font-semibold">Email</p><p className="text-muted-foreground">{businessInfo.email}</p></div>
              </a>
              <a href={getDirectionsLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 premium-card rounded-xl border border-border hover:border-primary transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
                <div><p className="font-semibold">Address</p><p className="text-muted-foreground">{businessInfo.address.full}</p></div>
              </a>
              <div className="flex items-start gap-4 p-4 premium-card rounded-xl border border-border">
                <Clock className="w-6 h-6 text-primary" />
                <div><p className="font-semibold">Hours</p><p className="text-muted-foreground">Mon-Fri: {businessInfo.hours.weekdays}</p><p className="text-muted-foreground">Sat: {businessInfo.hours.saturday}</p></div>
              </div>
            </div>
          </div>
          <div className="premium-card rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="Your name" /></div>
                <div><Label htmlFor="phone">Phone</Label><Input id="phone" placeholder="Your phone" /></div>
              </div>
              <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" /></div>
              <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="How can we help?" rows={4} /></div>
              <Button type="submit" className="w-full btn-premium">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;