import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { businessInfo } from "@/data/business";
import { Shield, Award, Heart, Users } from "lucide-react";

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading badge="About Us" title="JC Premier Detail" description={businessInfo.tagline} />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-6">At JC Premier Detail, we're passionate about transforming vehicles into showroom-quality masterpieces. Based in Spartanburg, SC, we serve the entire Upstate region with professional detailing, ceramic coatings, and paint correction services.</p>
            <p className="text-muted-foreground mb-6">Our team of certified technicians uses only premium products and proven techniques to deliver results that exceed expectations. Whether you're looking to protect a new car or restore a classic, we have the expertise to make it shine.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, title: "Certified", desc: "Professional installers" },
              { icon: Award, title: "Quality", desc: "Premium products only" },
              { icon: Heart, title: "Passion", desc: "We love what we do" },
              { icon: Users, title: "Trust", desc: "5-star rated service" },
            ].map((item) => (
              <div key={item.title} className="premium-card rounded-xl p-6 text-center border border-border">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;