import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LeadMagnetModal from "@/components/LeadMagnetModal";
import { FaWhatsapp, FaCheckCircle, FaRocket, FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { Globe, Megaphone, Palette, MessageCircle, ArrowRight, Star, Zap, TrendingUp, Award, Clock, CheckCircle2 } from "lucide-react";
import AOS from "aos";

export default function Home() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const whatsappNumber = "918530938774";
  const whatsappMessage = encodeURIComponent("Hi NGH, I want a quote for a website.");

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers",
      features: ["Mobile-First Design", "Fast Loading", "SEO Optimized"],
      color: "text-blue-500",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Get found on Google and social media, attract more customers",
      features: ["Local SEO", "Google Ads", "Meta Ads"],
      color: "text-green-500",
    },
    {
      icon: Palette,
      title: "Branding & Logo",
      description: "Stand out with professional branding that builds trust",
      features: ["Logo Design", "Brand Identity", "Marketing Materials"],
      color: "text-purple-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Automate customer engagement and boost sales via WhatsApp",
      features: ["Chatbots", "Broadcast Lists", "Automation"],
      color: "text-green-600",
    },
  ];

  const pricingTiers = [
    {
      name: "Basic",
      price: "19,999",
      best: "New Businesses",
      features: [
        "3-Page Website",
        "Mobile Responsive",
        "Basic SEO",
        "Contact Form",
        "1 Month Support",
        "Free Domain Setup",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "44,999",
      best: "Growing Businesses",
      popular: true,
      features: [
        "10-Page Website",
        "Advanced Design",
        "Premium SEO",
        "WhatsApp Integration",
        "3 Months Support",
        "Free Hosting (1 Year)",
        "Social Media Setup",
        "Google My Business",
      ],
      cta: "Most Popular",
    },
    {
      name: "Premium",
      price: "89,999",
      best: "Established Businesses",
      features: [
        "Unlimited Pages",
        "Custom Features",
        "E-commerce Ready",
        "Advanced Analytics",
        "6 Months Support",
        "Priority Updates",
        "Full Digital Marketing",
        "Dedicated Manager",
      ],
      cta: "Go Premium",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Electronics, Delhi",
      text: "NGH built our website in just 2 weeks. We're getting 5-10 customer calls daily now!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      business: "Sharma Clinic, Mumbai",
      text: "Their WhatsApp automation saves us 2 hours daily. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      business: "Patel Builders, Ahmedabad",
      text: "Professional service, affordable pricing. Our leads increased by 40% in 3 months.",
      rating: 5,
    },
  ];

  const portfolioProjects = [
    {
      title: "Sharma Clinic Website",
      category: "Healthcare",
      results: ["50% More Appointments", "3x Online Bookings", "Mobile-First Design"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    },
    {
      title: "Kumar Electronics E-commerce",
      category: "Retail",
      results: ["₹2L Monthly Sales", "200+ Products", "Payment Gateway"],
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop",
    },
    {
      title: "Patel Builders Portfolio",
      category: "Real Estate",
      results: ["40% More Leads", "Virtual Tours", "Project Gallery"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Basic websites: 1-2 weeks. Professional websites: 3-4 weeks. Premium custom sites: 4-8 weeks. We provide regular updates throughout the process.",
    },
    {
      q: "Do you provide hosting and domain?",
      a: "Yes! We help you register your domain and provide hosting. All packages include free hosting for 1 year.",
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Absolutely! All our websites are mobile-first, meaning they look great and work perfectly on phones, tablets, and desktops.",
    },
    {
      q: "Can I update the website myself later?",
      a: "Yes! We build websites on user-friendly platforms and provide training so you can make simple updates yourself.",
    },
    {
      q: "Do you provide support after the website is live?",
      a: "Yes! All packages include support: Basic (1 month), Professional (3 months), Premium (6 months). Extended support and maintenance is available.",
    },
    {
      q: "What if I need changes after the website is completed?",
      a: "Minor changes during the support period are free. Major changes are charged based on scope. We're always here to help!",
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#0b1320] via-primary/20 to-[#0b1320] text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1320]/95 via-[#0b1320]/85 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <Badge className="mb-6 bg-accent text-accent-foreground" data-testid="badge-hero-trusted">
              Trusted by 100+ Indian SMBs
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build a professional website for your business — fast, affordable, measurable.
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Think Next Go Digital
            </p>
            
            <p className="text-lg mb-8 text-gray-300">
              Get more customers online with professional websites, SEO, and digital marketing designed for Indian businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="text-lg h-14"
                onClick={() => setLeadModalOpen(true)}
                data-testid="button-hero-audit"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Free Website Audit
              </Button>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hero-whatsapp"
              >
                <Button size="lg" variant="outline" className="text-lg h-14 w-full border-2 border-white text-white hover:bg-white hover:text-[#0b1320]">
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span>International Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Indian Businesses</h2>
            <p className="text-muted-foreground">Join 100+ happy customers growing their business online</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 100} data-testid={`card-testimonial-${index}`}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-services">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Grow Online</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From websites to digital marketing, we provide complete solutions for Indian SMBs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-testid={`card-service-${index}`}
                >
                  <CardHeader>
                    <Icon className={`h-12 w-12 mb-4 ${service.color}`} />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-pricing">Transparent Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans That Fit Your Budget</h2>
            <p className="text-lg text-muted-foreground">Starting from ₹19,999 — No hidden charges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover-elevate active-elevate-2 transition-all ${
                  tier.popular ? "border-2 border-primary scale-105" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-testid={`card-pricing-${tier.name.toLowerCase()}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{tier.best}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹{tier.price}</span>
                    <span className="text-muted-foreground">/project</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" data-testid={`link-pricing-${tier.name.toLowerCase()}`}>
                    <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                      {tier.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" data-testid="link-view-pricing">
              <Button variant="outline" size="lg">
                View Full Pricing Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <Card className="border-4 border-accent bg-background text-foreground max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Badge className="mb-4 bg-accent text-accent-foreground" data-testid="badge-tripwire">Limited Time Offer</Badge>
                  <h2 className="text-3xl font-bold mb-4">Quick-Start Packages</h2>
                  <p className="text-muted-foreground mb-6">
                    Get started immediately with our affordable quick-fix services
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Website Speed Fix</h3>
                        <div>
                          <span className="text-sm line-through text-muted-foreground">₹2,999</span>
                          <span className="text-2xl font-bold text-accent ml-2">₹999</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Make your website 2x faster in 48 hours</p>
                    </div>

                    <div className="p-4 bg-muted rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Single Landing Page</h3>
                        <div>
                          <span className="text-sm line-through text-muted-foreground">₹3,999</span>
                          <span className="text-2xl font-bold text-accent ml-2">₹1,499</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Professional landing page in 3 days</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Quick turnaround (2-3 days)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Professional quality guaranteed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaWhatsapp className="h-5 w-5 text-primary" />
                      <span>Free WhatsApp support included</span>
                    </li>
                  </ul>

                  <Link href="/contact" data-testid="link-tripwire-order">
                    <Button size="lg" className="w-full mb-3">
                      Order Now
                    </Button>
                  </Link>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NGH, I'm interested in the quick-start packages.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-tripwire-whatsapp"
                  >
                    <Button variant="outline" size="lg" className="w-full gap-2">
                      <FaWhatsapp className="h-5 w-5" />
                      Ask on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-portfolio">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results for Real Businesses</h2>
            <p className="text-lg text-muted-foreground">See how we've helped Indian SMBs grow online</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-testid={`card-portfolio-${index}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="font-semibold text-lg mb-4">{project.title}</h3>
                  <div className="space-y-2">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" data-testid="link-view-portfolio">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">Simple 3-step process to get your business online</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl mb-2">Discuss</h3>
              <p className="text-muted-foreground">
                Free consultation to understand your business needs and goals
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl mb-2">Design & Develop</h3>
              <p className="text-muted-foreground">
                We create your website with regular updates and your feedback
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl mb-2">Launch & Grow</h3>
              <p className="text-muted-foreground">
                Go live and start getting customers with ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 100+ Indian SMBs who trust us for their digital presence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 bg-white text-primary hover:bg-gray-100 border-0"
              onClick={() => setLeadModalOpen(true)}
              data-testid="button-cta-audit"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Free Website Audit
            </Button>
            
            <Link href="/contact" data-testid="link-cta-quote">
              <Button size="lg" variant="outline" className="text-lg h-14 w-full border-2 border-white text-white hover:bg-white hover:text-primary">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <LeadMagnetModal open={leadModalOpen} onOpenChange={setLeadModalOpen} />
    </div>
  );
}
