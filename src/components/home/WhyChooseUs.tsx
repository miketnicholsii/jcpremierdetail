import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Shield,
  Award,
  Clock,
  Sparkles,
  ThumbsUp,
  Zap,
  Users,
  CheckCircle2,
} from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Certified Professionals",
    description: "Factory-trained and certified in Ceramic Pro, XPEL, and leading protection systems.",
    stat: "100%",
    statLabel: "Certified",
  },
  {
    icon: Award,
    title: "Premium Products Only",
    description: "We use only professional-grade products—no consumer or shortcut alternatives.",
    stat: "Pro",
    statLabel: "Grade Only",
  },
  {
    icon: Clock,
    title: "Controlled Environment",
    description: "Climate-controlled facility with proper lighting for flawless results.",
    stat: "24/7",
    statLabel: "Climate Ctrl",
  },
  {
    icon: Sparkles,
    title: "Meticulous Process",
    description: "Every detail matters. We document and inspect at every stage.",
    stat: "50+",
    statLabel: "Point Check",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll make it right. Your satisfaction is our priority.",
    stat: "100%",
    statLabel: "Guaranteed",
  },
  {
    icon: Zap,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. What we quote is what you pay.",
    stat: "$0",
    statLabel: "Hidden Fees",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,hsl(205_100%_50%/0.08),transparent)]" />
      
      <div className="container-custom relative z-10 px-4">
        <FadeIn>
          <SectionHeading
            badge="Why JC Premier"
            title="The JC Premier Difference"
            description="We're not just another detail shop. Here's what sets us apart."
          />
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
          {differentiators.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{item.stat}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{item.statLabel}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA strip */}
        <FadeIn delay={0.4}>
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="hidden md:flex w-14 h-14 rounded-xl bg-primary/20 items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Join 500+ Satisfied Customers</p>
                  <p className="text-sm text-muted-foreground">in the Upstate who trust JC Premier Detail</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {["Same-Week Availability", "Free Consultations", "No Deposit Required"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WhyChooseUs;
