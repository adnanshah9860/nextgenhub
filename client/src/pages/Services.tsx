import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Megaphone, Palette, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import AOS from "aos";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      id: "website",
      icon: Globe,
      title: "Website Development",
      tagline: "Fast, Modern, Mobile-First Websites",
      description: "We build professional websites that work perfectly on all devices and convert visitors into customers. From simple business websites to complex e-commerce platforms, we've got you covered.",
      features: [
        "Responsive Design (Mobile, Tablet, Desktop)",
        "Fast Loading Speed (Google PageSpeed Optimized)",
        "SEO-Friendly Structure",
        "Content Management System",
        "Contact Forms & WhatsApp Integration",
        "Social Media Integration",
        "SSL Certificate Setup",
        "Free Domain Setup Assistance",
      ],
      pricing: "Starting from ₹4,999",
      deliverable: "1-4 weeks based on complexity",
      bestFor: "New businesses, shops, clinics, consultants, service providers",
    },
    {
      id: "marketing",
      icon: Megaphone,
      title: "Digital Marketing",
      tagline: "Get Found on Google & Social Media",
      description: "Reach more customers online with targeted digital marketing campaigns. We help you rank on Google, run effective ads, and build a strong social media presence.",
      features: [
        "Local SEO (Google My Business)",
        "Google Ads (Search & Display)",
        "Facebook & Instagram Ads",
        "Social Media Management",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Analytics & Monthly Reports",
        "Competitor Analysis",
      ],
      pricing: "Starting from ₹8,999/month",
      deliverable: "Ongoing campaigns with monthly reports",
      bestFor: "Businesses wanting to attract more local customers online",
    },
    {
      id: "branding",
      icon: Palette,
      title: "Branding & Logo Design",
      tagline: "Stand Out with Professional Branding",
      description: "Build trust and recognition with professional branding. We create memorable logos and complete brand identities that make your business stand out.",
      features: [
        "Custom Logo Design (3 concepts)",
        "Brand Color Palette",
        "Typography Guidelines",
        "Business Card Design",
        "Letterhead Design",
        "Social Media Templates",
        "Brand Style Guide",
        "Unlimited Revisions (within 2 rounds)",
      ],
      pricing: "Starting from ₹6,999",
      deliverable: "1-2 weeks",
      bestFor: "New businesses or rebranding existing businesses",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp Marketing & Automation",
      tagline: "Engage Customers 24/7 on WhatsApp",
      description: "Automate customer interactions, send broadcast messages, and manage customer queries efficiently with WhatsApp Business API integration.",
      features: [
        "WhatsApp Business API Setup",
        "Automated Chatbot Responses",
        "Broadcast Message Campaigns",
        "Customer Inquiry Management",
        "Order Confirmation Messages",
        "Appointment Reminders",
        "Product Catalog Integration",
        "Analytics Dashboard",
      ],
      pricing: "Starting from ₹9,999 setup + monthly",
      deliverable: "1 week setup + ongoing management",
      bestFor: "Businesses handling high customer volumes on WhatsApp",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-white text-primary" data-testid="badge-services-hero">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Complete Digital Solutions for Indian SMBs
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            From website development to digital marketing, we provide everything you need to succeed online
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link href="/contact" data-testid="link-services-hero-quote">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-0">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                  data-aos="fade-up"
                  data-testid={`section-service-${service.id}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <Icon className="h-16 w-16 text-primary mb-6" />
                    <Badge className="mb-4">{service.tagline}</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Pricing</p>
                          <p className="text-sm text-muted-foreground">{service.pricing}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Delivery Time</p>
                          <p className="text-sm text-muted-foreground">{service.deliverable}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Best For</p>
                          <p className="text-sm text-muted-foreground">{service.bestFor}</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact" data-testid={`link-service-${service.id}-quote`}>
                      <Button size="lg" className="gap-2">
                        Get Started <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <Card className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                    <CardHeader>
                      <CardTitle>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="link-services-cta-quote">
              <Button size="lg">Get Free Quote</Button>
            </Link>
            <Link href="/pricing" data-testid="link-services-cta-pricing">
              <Button size="lg" variant="outline">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
