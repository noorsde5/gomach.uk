import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Truck,
  Ship,
  Settings,
  Warehouse,
  Wrench,
  Handshake,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Globe,
  Star,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            <span className="text-2xl font-black tracking-tighter">
              Go<span className="text-primary">Mach</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {["About", "Services", "Process", "Locations", "Tyres", "FAQ", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              )
            )}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col space-y-4">
            {["About", "Services", "Process", "Locations", "Tyres", "FAQ", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left text-lg font-medium text-foreground/90 hover:text-primary"
                >
                  {item}
                </button>
              )
            )}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-white w-full font-bold"
            >
              Get a Quote
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img
            src="/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Map route overlay animation (abstract) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M 100 800 Q 300 700 400 400 T 800 200"
              fill="none"
              stroke="#ff6310"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
            />
            <motion.path
              d="M 200 900 Q 500 800 600 500 T 900 300"
              fill="none"
              stroke="#ff6310"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/3 max-w-4xl mx-auto lg:mx-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6"
            >
              <motion.span variants={fadeUp} className="block text-primary">
                Delivering
              </motion.span>
              <motion.span variants={fadeUp} className="block">
                logistics excellence across
              </motion.span>
              <motion.span variants={fadeUp} className="block text-primary">
                Europe & the UK
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              At GoMach, we provide efficient cross-border logistics and quality tires with 22+ years of experience across the UK, Ireland, Germany, and Finland — your trusted partner in seamless shipping and performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg w-full sm:w-auto rounded-none"
                onClick={() => scrollTo("contact")}
              >
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg w-full sm:w-auto rounded-none"
                onClick={() => scrollTo("services")}
              >
                Explore Our Services
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Counters Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {[
                { label: "Years of Industry Experience", value: "22+" },
                { label: "Operational Locations", value: "4" },
                { label: "Successful Deliveries", value: "250+" },
                { label: "Commitment Rate", value: "100%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className="p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                <div className="w-8 h-1 bg-primary"></div>
                Who We Are
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
                Moving goods with precision and power.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                GoMach was founded with a singular vision: to create a logistics network that truly connects the UK and Europe seamlessly. With operations rooted in Nottingham, Cork, Frankfurt, and Helsinki, we’ve built a resilient infrastructure capable of handling everything from routine freight to complex shipping solutions.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Beyond logistics, our expertise extends to providing premium tire solutions for cars and trucks, ensuring that our partners' fleets remain moving safely and efficiently. At GoMach, we don't just deliver cargo—we deliver reliability.
              </motion.p>
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-4 border-l-4 border-primary pl-6 py-2">
                  <div>
                    <p className="font-bold text-lg">CEO & Founder</p>
                    <p className="text-sm text-muted-foreground">GoMach Logistics</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8ed745140c?q=80&w=2070&auto=format&fit=crop"
                  alt="Logistics Warehouse"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-xl shadow-2xl">
                <Ship className="w-12 h-12 text-white mb-4" />
                <p className="text-white font-bold text-xl">Cross-border Masters</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img
            src="/services-bg.png"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-primary"></div>
              Our Expertise
              <div className="w-8 h-1 bg-primary"></div>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
              Comprehensive Solutions
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Freight Logistics",
                desc: "Reliable cross-border transportation of goods across the UK and Europe.",
              },
              {
                icon: <Ship className="w-8 h-8" />,
                title: "Shipping Solutions",
                desc: "Customized shipping plans to ensure timely and secure deliveries.",
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Car & Truck Tires",
                desc: "Extensive range of quality tires for cars and trucks in multiple sizes.",
              },
              {
                icon: <Warehouse className="w-8 h-8" />,
                title: "Warehousing & Distribution",
                desc: "Convenient storage and distribution centers across key European locations.",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Fleet Management Support",
                desc: "Assistance with maintaining and optimizing your vehicle fleet for smooth operations.",
              },
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "Partnership & Joint Ventures",
                desc: "Collaborations with trusted companies to expand and improve service coverage.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="bg-card border-border hover:border-primary transition-colors duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-primary"></div>
              How It Works
              <div className="w-8 h-1 bg-primary"></div>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
              Our 6-Step Process
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-border hidden lg:block -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                { title: "Get in Touch", desc: "Contact our friendly team to discuss your requirements." },
                { title: "Consultation & Quote", desc: "We evaluate details and provide a competitive quote." },
                { title: "Scheduling & Pickup", desc: "Coordinate a convenient time for pickup." },
                { title: "Efficient Transport", desc: "Handled with care and transported efficiently." },
                { title: "Delivery & Inspection", desc: "Thorough inspections guarantee intact destination." },
                { title: "Ongoing Support", desc: "Available for any follow-up support or future needs." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-border flex items-center justify-center text-xl font-black mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock />, title: "On-Time Delivery", desc: "Precision scheduling ensures deadlines are always met." },
              { icon: <Globe />, title: "European Reach", desc: "Unmatched network across UK, Ireland, Germany, Finland." },
              { icon: <ShieldCheck />, title: "Secure Freight", desc: "Comprehensive tracking and secure handling." },
              { icon: <Settings />, title: "Premium Tyres", desc: "Top brands providing ultimate fleet performance." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="text-primary mb-4 p-4 bg-primary/10 rounded-full">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <div className="w-8 h-1 bg-primary"></div>
              Global Reach
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
              Our Hubs
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: "Nottingham, UK",
                desc: "UK hub handling freight logistics across the country and beyond.",
                mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-1.2357%2C52.9336%2C-1.1007%2C53.0001&layer=mapnik"
              },
              {
                city: "Cork, Ireland",
                desc: "Serving Ireland and connecting shipments efficiently across Europe.",
                mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-8.5562%2C51.8549%2C-8.4218%2C51.9215&layer=mapnik"
              },
              {
                city: "Frankfurt, Germany",
                desc: "A key logistics center in Germany to streamline your freight.",
                mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=8.5927%2C50.0663%2C8.7272%2C50.1428&layer=mapnik"
              },
              {
                city: "Helsinki, Finland",
                desc: "Northern Europe's gateway for reliable shipping solutions.",
                mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=24.8200%2C60.1369%2C25.0671%2C60.2756&layer=mapnik"
              }
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-xl overflow-hidden group"
              >
                <div className="h-48 w-full bg-muted relative">
                  <iframe 
                    src={loc.mapSrc} 
                    className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    title={`Map of ${loc.city}`}
                  />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2 mb-3">
                    <MapPin className="text-primary w-6 h-6" />
                    {loc.city}
                  </h3>
                  <p className="text-muted-foreground">{loc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tyres Section */}
      <section id="tyres" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop"
                  alt="Premium Tyres"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                <div className="w-8 h-1 bg-primary"></div>
                Premium Quality
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-8">
                Tyres that keep your fleet moving.
              </motion.h2>
              <div className="space-y-6">
                {[
                  "Wide Range of Car & Truck Tyres",
                  "Available in All Sizes & Tread Types",
                  "Delivery Across UK & EU Locations",
                  "Competitive Prices, Premium Brands",
                  "22+ Years of Industry Expertise"
                ].map((point, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    <p className="text-lg font-medium">{point}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeUp} className="mt-10">
                <Button size="lg" className="bg-primary text-white font-bold h-14 px-8 rounded-none">
                  View Tyre Catalog
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
              Trusted by the Best
            </motion.h2>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  quote: "GoMach made our cross-border shipping seamless and stress-free. Their team is professional and responsive.",
                  author: "Operations Director, TechFreight"
                },
                {
                  quote: "The tyre quality and delivery speed exceeded our expectations. Highly recommended for fleet owners.",
                  author: "Fleet Manager, EuroTransit"
                },
                {
                  quote: "Reliable logistics partner with transparent pricing. Will continue working with them.",
                  author: "Logistics Coordinator, NordTrade"
                }
              ].map((testimonial, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="bg-background border-border h-full">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex gap-1 mb-6 text-primary">
                          <Star className="w-5 h-5 fill-primary" />
                          <Star className="w-5 h-5 fill-primary" />
                          <Star className="w-5 h-5 fill-primary" />
                          <Star className="w-5 h-5 fill-primary" />
                          <Star className="w-5 h-5 fill-primary" />
                        </div>
                        <p className="text-lg italic text-muted-foreground mb-8">"{testimonial.quote}"</p>
                      </div>
                      <p className="font-bold text-foreground border-t border-border pt-4 mt-auto">
                        — {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4 hidden md:flex">
              <CarouselPrevious className="static bg-card border-border hover:bg-primary hover:text-white" />
              <CarouselNext className="static bg-card border-border hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "What areas do you provide logistics services to?",
                a: "We offer freight and shipping logistics across the UK, Ireland, Germany, Finland, and throughout Europe."
              },
              {
                q: "Do you supply tires for both cars and trucks?",
                a: "Yes, we have a wide range of premium tires in various sizes for both cars and trucks."
              },
              {
                q: "How many locations does GoMach operate from?",
                a: "Four main locations: Nottingham (UK), Cork (Ireland), Frankfurt (Germany), and Helsinki (Finland)."
              },
              {
                q: "Can GoMach handle cross-border shipping efficiently?",
                a: "Absolutely! With over 22 years of experience, we specialize in smooth cross-border logistics throughout Europe and the UK."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-8 max-w-4xl mx-auto tracking-tight">
            Let's get your logistics on the move. We're here to help.
          </h2>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 font-bold h-16 px-10 text-xl rounded-none"
            onClick={() => scrollTo("contact")}
          >
            Contact Our Team
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-8">
                Get in Touch
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Direct Lines</h4>
                    <p className="text-muted-foreground mb-1">🇬🇧 +44 7350 329728 (Nottingham)</p>
                    <p className="text-muted-foreground mb-1">🇮🇪 +49 15216973633 (Cork)</p>
                    <p className="text-muted-foreground">🇫🇮 +358 469513941 (Helsinki)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email</h4>
                    <p className="text-muted-foreground">info@gomach.uk</p>
                  </div>
                </div>
              </motion.div>

              <motion.form variants={fadeUp} className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-background border-border h-12" />
                  <Input placeholder="Last Name" className="bg-background border-border h-12" />
                </div>
                <Input placeholder="Email Address" type="email" className="bg-background border-border h-12" />
                <Input placeholder="Subject" className="bg-background border-border h-12" />
                <Textarea placeholder="Your Message" className="bg-background border-border min-h-[120px] resize-none" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-none">
                  Send Message
                </Button>
              </motion.form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full min-h-[400px] rounded-xl overflow-hidden border border-border"
            >
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.2357%2C52.9336%2C-1.1007%2C53.0001&layer=mapnik" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                title="Nottingham HQ Map"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-2xl font-black tracking-tighter">
              Go<span className="text-primary">Mach</span>
            </span>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
              Premium cross-border freight and tire solutions. Moving goods seamlessly across borders.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo("process")} className="hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2025 GoMach. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447350329728"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-50"></div>
        <MessageSquare className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
