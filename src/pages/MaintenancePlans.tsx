import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { FadeIn as AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Check,
  X,
  Crown,
  Shield,
  Sparkles,
  Star,
  Calendar,
  Clock,
  Car,
  Gift,
  Percent,
  Phone,
  ArrowRight,
  Award,
  Zap,
  Heart,
  BadgeCheck,
  RefreshCw,
  Timer,
  ChevronRight,
} from "lucide-react";
import usePageVisibility from "@/hooks/usePageVisibility";
import { Link } from "react-router-dom";
import { businessInfo, getPhoneLink } from "@/data/business";

// Subscription tiers
const subscriptionPlans = [
  {
    id: "essential",
    name: "Essential Care",
    icon: Shield,
    description: "Perfect for daily drivers who want to maintain their vehicle's appearance",
    monthlyPrice: 79,
    annualPrice: 790,
    savings: 158,
    color: "from-slate-500 to-slate-600",
    features: [
      { name: "Monthly exterior wash & dry", included: true },
      { name: "Wheel & tire cleaning", included: true },
      { name: "Interior vacuum", included: true },
      { name: "Dashboard wipe down", included: true },
      { name: "Window cleaning (interior/exterior)", included: true },
      { name: "Air freshener", included: true },
      { name: "Clay bar treatment", included: false },
      { name: "Paint sealant application", included: false },
      { name: "Leather conditioning", included: false },
      { name: "Engine bay cleaning", included: false },
      { name: "Priority scheduling", included: false },
      { name: "Ceramic coating maintenance", included: false },
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Protection",
    icon: Star,
    description: "Comprehensive care for enthusiasts who demand excellence",
    monthlyPrice: 149,
    annualPrice: 1490,
    savings: 298,
    color: "from-primary to-primary/80",
    features: [
      { name: "Monthly exterior wash & dry", included: true },
      { name: "Wheel & tire cleaning", included: true },
      { name: "Interior vacuum", included: true },
      { name: "Dashboard wipe down", included: true },
      { name: "Window cleaning (interior/exterior)", included: true },
      { name: "Air freshener", included: true },
      { name: "Clay bar treatment", included: true },
      { name: "Paint sealant application", included: true },
      { name: "Leather conditioning", included: true },
      { name: "Engine bay cleaning", included: false },
      { name: "Priority scheduling", included: true },
      { name: "Ceramic coating maintenance", included: false },
    ],
    popular: true,
  },
  {
    id: "elite",
    name: "Elite Experience",
    icon: Crown,
    description: "The ultimate in vehicle preservation for luxury and exotic owners",
    monthlyPrice: 249,
    annualPrice: 2490,
    savings: 498,
    color: "from-amber-500 to-amber-600",
    features: [
      { name: "Monthly exterior wash & dry", included: true },
      { name: "Wheel & tire cleaning", included: true },
      { name: "Interior vacuum", included: true },
      { name: "Dashboard wipe down", included: true },
      { name: "Window cleaning (interior/exterior)", included: true },
      { name: "Air freshener", included: true },
      { name: "Clay bar treatment", included: true },
      { name: "Paint sealant application", included: true },
      { name: "Leather conditioning", included: true },
      { name: "Engine bay cleaning", included: true },
      { name: "Priority scheduling", included: true },
      { name: "Ceramic coating maintenance", included: true },
    ],
    popular: false,
  },
];

// Annual packages
const annualPackages = [
  {
    id: "protection-plus",
    name: "Protection Plus Annual",
    description: "Complete year-round protection with quarterly deep details",
    price: 1999,
    regularPrice: 2400,
    visits: "4 quarterly visits",
    includes: [
      "Full exterior detail each visit",
      "Complete interior restoration",
      "Paint decontamination",
      "6-month sealant application",
      "Leather treatment & conditioning",
      "Wheel & tire dressing",
      "Engine bay cleaning (2x per year)",
    ],
    bestFor: "Daily drivers and family vehicles",
  },
  {
    id: "ceramic-care",
    name: "Ceramic Care Annual",
    description: "Specialized maintenance for ceramic coated vehicles",
    price: 2499,
    regularPrice: 3000,
    visits: "6 bi-monthly visits",
    includes: [
      "Ceramic coating maintenance wash",
      "pH-neutral safe wash process",
      "Coating inspection & spot repair",
      "Iron & fallout removal",
      "Interior maintenance detail",
      "Coating booster application",
      "Annual coating health report",
    ],
    bestFor: "Vehicles with professional ceramic coating",
  },
  {
    id: "executive",
    name: "Executive Annual",
    description: "White-glove service for luxury and exotic vehicles",
    price: 3999,
    regularPrice: 4800,
    visits: "Monthly visits (12 per year)",
    includes: [
      "Monthly concierge detail service",
      "Paint correction touch-ups as needed",
      "Complete interior refresh each visit",
      "Wheel face paint protection",
      "Exhaust tip polishing",
      "Convertible top care (if applicable)",
      "Pickup & delivery service included",
    ],
    bestFor: "Luxury, exotic, and collector vehicles",
  },
];

// Membership benefits
const membershipBenefits = [
  {
    icon: Calendar,
    title: "Priority Scheduling",
    description: "Skip the line with guaranteed appointment slots reserved exclusively for members",
  },
  {
    icon: Percent,
    title: "Exclusive Discounts",
    description: "15-25% off all additional services including ceramic coating, PPF, and paint correction",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Reschedule anytime with no fees, roll over unused visits for up to 3 months",
  },
  {
    icon: Gift,
    title: "Member Perks",
    description: "Complimentary touch-up kits, referral bonuses, and exclusive member-only events",
  },
  {
    icon: Car,
    title: "Multi-Vehicle Savings",
    description: "Add additional vehicles at 20% off regular membership pricing",
  },
  {
    icon: Award,
    title: "Loyalty Rewards",
    description: "Earn points on every visit redeemable for free services and upgrades",
  },
];

// FAQ
const faqs = [
  {
    question: "How does the membership work?",
    answer: "Choose your plan and schedule your first appointment. We'll handle the rest! You'll receive reminders when it's time for your next visit, and you can manage everything through your member portal or by phone.",
  },
  {
    question: "Can I cancel or change my plan?",
    answer: "Yes! Monthly plans can be cancelled anytime with 30 days notice. You can upgrade or downgrade your plan at any time, with changes taking effect at your next billing cycle.",
  },
  {
    question: "What if I miss a scheduled visit?",
    answer: "No worries! Visits can be rescheduled up to 48 hours before your appointment at no charge. Unused monthly visits can roll over for up to 3 months.",
  },
  {
    question: "Are there contracts?",
    answer: "Monthly plans are month-to-month with no long-term commitment. Annual packages are paid upfront for the full year but come with significant savings.",
  },
  {
    question: "Can I add multiple vehicles?",
    answer: "Absolutely! Add additional vehicles to any membership at 20% off the regular price. Each vehicle will have its own maintenance schedule.",
  },
  {
    question: "What products do you use?",
    answer: "We use only premium, pH-balanced products that are safe for all finishes including ceramic coatings and paint protection film. All products are eco-friendly and biodegradable.",
  },
];

// Comparison table features
const comparisonFeatures = [
  { feature: "Professional Exterior Wash", essential: "Monthly", premium: "Monthly", elite: "Monthly" },
  { feature: "Wheel & Tire Care", essential: "✓", premium: "✓", elite: "✓" },
  { feature: "Interior Vacuum & Wipe", essential: "✓", premium: "✓", elite: "✓" },
  { feature: "Window Cleaning", essential: "✓", premium: "✓", elite: "✓" },
  { feature: "Clay Bar Treatment", essential: "—", premium: "Quarterly", elite: "Monthly" },
  { feature: "Paint Sealant", essential: "—", premium: "Bi-annually", elite: "Quarterly" },
  { feature: "Leather Conditioning", essential: "—", premium: "✓", elite: "✓" },
  { feature: "Engine Bay Cleaning", essential: "—", premium: "—", elite: "Bi-annually" },
  { feature: "Ceramic Coating Maintenance", essential: "—", premium: "—", elite: "✓" },
  { feature: "Priority Scheduling", essential: "—", premium: "✓", elite: "✓" },
  { feature: "Service Discounts", essential: "10%", premium: "15%", elite: "25%" },
  { feature: "Pickup & Delivery", essential: "Add-on", premium: "50% off", elite: "Free" },
];

const MaintenancePlans = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const shouldReduceMotion = useReducedMotion();
  const isPageVisible = usePageVisibility();
  const allowMotion = isPageVisible && !shouldReduceMotion;
  const heroTransition = (delay = 0) =>
    shouldReduceMotion ? { duration: 0, delay: 0 } : { duration: 0.8, delay };

  return (
    <Layout>
      <Helmet>
        <title>Maintenance Plans & Memberships | JC Premier Detail | Spartanburg SC</title>
        <meta
          name="description"
          content="Keep your vehicle looking showroom-fresh with JC Premier Detail's maintenance plans. Monthly subscriptions, annual packages, and exclusive member benefits. Serving Spartanburg, Greenville & the Upstate."
        />
        <meta name="keywords" content="car maintenance plan, auto detailing membership, vehicle care subscription, Spartanburg detailing, monthly car wash plan" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        {/* Animated elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={allowMotion ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : { scale: 1, opacity: 0.3 }}
          transition={allowMotion ? { duration: 8, repeat: Infinity } : { duration: 0 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={allowMotion ? { scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] } : { scale: 1, opacity: 0.3 }}
          transition={allowMotion ? { duration: 10, repeat: Infinity } : { duration: 0 }}
        />

        <div className="container relative z-10 py-24 text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={heroTransition()}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
              <RefreshCw className="w-4 h-4 mr-2" />
              Maintenance Memberships
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Keep Your Vehicle</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-amber-500">
                Showroom Perfect
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our maintenance plans take the hassle out of vehicle care. Enjoy consistent, professional 
              detailing at predictable prices with exclusive member benefits.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#plans">
                  View Plans <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href={getPhoneLink()}>
                  <Phone className="w-4 h-4" /> Call to Enroll
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={heroTransition(0.3)}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "200+", label: "Active Members" },
              { value: "98%", label: "Retention Rate" },
              { value: "$500+", label: "Avg Annual Savings" },
              { value: "4.9★", label: "Member Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Membership Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              badge="Why Membership?"
              title="The Smart Way to Maintain Your Vehicle"
              description="Stop worrying about when to detail your car. Let us handle it with a plan that fits your lifestyle."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {membershipBenefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="plans" className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              badge="Subscription Plans"
              title="Choose Your Level of Care"
              description="Flexible monthly plans with no long-term commitment. Upgrade, downgrade, or cancel anytime."
            />
          </AnimatedSection>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  billingCycle === "annual"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <Badge variant="secondary" className="bg-green-500/20 text-green-600 text-xs">
                  Save 17%
                </Badge>
              </button>
            </div>
          </div>

          {/* Plan Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 0.1}>
                <Card
                  className={`relative h-full flex flex-col ${
                    plan.popular
                      ? "border-primary shadow-lg shadow-primary/20 scale-105"
                      : "border-border/50 hover:border-primary/50"
                  } transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="min-h-[48px]">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold">
                          ${billingCycle === "monthly" ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}
                        </span>
                        <span className="text-muted-foreground">/mo</span>
                      </div>
                      {billingCycle === "annual" && (
                        <p className="text-sm text-green-600 mt-1">
                          Save ${plan.savings}/year (billed ${plan.annualPrice} annually)
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-foreground" : "text-muted-foreground/60"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-4">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <Link to="/booking">
                        Get Started <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              badge="Annual Packages"
              title="Complete Year-Round Protection"
              description="Lock in your vehicle's care for the entire year at significant savings. Best value for committed car enthusiasts."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {annualPackages.map((pkg, index) => (
              <AnimatedSection key={pkg.id} delay={index * 0.1}>
                <Card className="h-full flex flex-col border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{pkg.visits}</Badge>
                      <Badge variant="outline" className="text-green-600 border-green-600/30 bg-green-500/10">
                        Save ${pkg.regularPrice - pkg.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">${pkg.price.toLocaleString()}</span>
                        <span className="text-muted-foreground line-through">${pkg.regularPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">per year</p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {pkg.includes.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">
                        <strong>Best for:</strong> {pkg.bestFor}
                      </p>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={getPhoneLink()}>
                        <Phone className="w-4 h-4 mr-2" /> Call to Enroll
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              badge="Plan Comparison"
              title="Compare All Plans"
              description="See exactly what's included in each membership tier"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-5xl mx-auto mt-12 overflow-x-auto">
              <Card className="border-border/50">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50">
                      <TableHead className="w-[280px]">Feature</TableHead>
                      <TableHead className="text-center">
                        <div className="flex flex-col items-center gap-1">
                          <Shield className="w-5 h-5 text-slate-500" />
                          <span>Essential</span>
                          <span className="text-xs text-muted-foreground">$79/mo</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center bg-primary/5">
                        <div className="flex flex-col items-center gap-1">
                          <Star className="w-5 h-5 text-primary" />
                          <span className="text-primary">Premium</span>
                          <span className="text-xs text-muted-foreground">$149/mo</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center">
                        <div className="flex flex-col items-center gap-1">
                          <Crown className="w-5 h-5 text-amber-500" />
                          <span>Elite</span>
                          <span className="text-xs text-muted-foreground">$249/mo</span>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonFeatures.map((row, index) => (
                      <TableRow key={index} className="border-border/50">
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-center">
                          {row.essential === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.essential === "—" ? (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          ) : (
                            <span className="text-sm">{row.essential}</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center bg-primary/5">
                          {row.premium === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.premium === "—" ? (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          ) : (
                            <span className="text-sm font-medium">{row.premium}</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.elite === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.elite === "—" ? (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          ) : (
                            <span className="text-sm">{row.elite}</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              badge="Questions?"
              title="Frequently Asked Questions"
              description="Everything you need to know about our maintenance plans"
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto mt-12 grid gap-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-11">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-amber-500/10 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Join the Family?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Start your maintenance plan today and never worry about your vehicle's appearance again. 
                  Join hundreds of satisfied members who trust JC Premier Detail with their vehicles.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="gap-2" asChild>
                    <Link to="/booking">
                      Start Your Plan <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href={getPhoneLink()}>
                      <Phone className="w-4 h-4" /> {businessInfo.phoneFormatted}
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  No contracts. Cancel anytime. 100% satisfaction guaranteed.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default MaintenancePlans;
