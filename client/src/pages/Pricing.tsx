import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import AOS from "aos";

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const pricingTiers = [
    {
      name: "Basic",
      price: "4,999",
      gst: "5,899",
      best: "Perfect for New Businesses",
      description: "Get online quickly with a professional website",
      features: [
        { included: true, text: "3-Page Website (Home, About, Contact)" },
        { included: true, text: "Mobile Responsive Design" },
        { included: true, text: "Basic SEO Setup" },
        { included: true, text: "Contact Form with Email" },
        { included: true, text: "WhatsApp Click-to-Chat" },
        { included: true, text: "Social Media Links" },
        { included: true, text: "Free Domain Setup Assistance" },
        { included: true, text: "1 Month Support" },
        { included: true, text: "1 Round of Revisions" },
        { included: false, text: "Google Analytics" },
        { included: false, text: "Blog Section" },
        { included: false, text: "Advanced Customization" },
      ],
      delivery: "1-2 weeks",
      revisions: "1 major revision round",
      support: "1 month email support",
    },
    {
      name: "Professional",
      price: "12,999",
      gst: "15,339",
      best: "Ideal for Growing Businesses",
      popular: true,
      description: "Comprehensive website with marketing features",
      features: [
        { included: true, text: "10-Page Website (Fully Customizable)" },
        { included: true, text: "Premium Responsive Design" },
        { included: true, text: "Advanced SEO Optimization" },
        { included: true, text: "Multiple Contact Forms" },
        { included: true, text: "WhatsApp Business Integration" },
        { included: true, text: "Google Analytics 4" },
        { included: true, text: "Google My Business Setup" },
        { included: true, text: "Social Media Integration" },
        { included: true, text: "Blog/News Section" },
        { included: true, text: "Image Gallery" },
        { included: true, text: "Free Hosting (1 Year Worth ₹3,000)" },
        { included: true, text: "3 Months Priority Support" },
        { included: true, text: "3 Rounds of Revisions" },
        { included: false, text: "E-commerce Features" },
        { included: false, text: "Custom Development" },
      ],
      delivery: "3-4 weeks",
      revisions: "3 major revision rounds",
      support: "3 months priority support",
    },
    {
      name: "Premium",
      price: "24,999",
      gst: "29,499",
      best: "Best for Established Businesses",
      description: "Complete digital solution with advanced features",
      features: [
        { included: true, text: "Unlimited Pages" },
        { included: true, text: "Fully Custom Design & Branding" },
        { included: true, text: "E-commerce Ready (Up to 50 products)" },
        { included: true, text: "Advanced SEO & Schema Markup" },
        { included: true, text: "WhatsApp API Integration" },
        { included: true, text: "Payment Gateway Integration" },
        { included: true, text: "Google Analytics 4 + Advanced Events" },
        { included: true, text: "Complete Google My Business Optimization" },
        { included: true, text: "Social Media Setup (4 Platforms)" },
        { included: true, text: "Blog + CMS Training" },
        { included: true, text: "Customer Database/CRM" },
        { included: true, text: "Free Premium Hosting (1 Year Worth ₹6,000)" },
        { included: true, text: "6 Months Premium Support" },
        { included: true, text: "Unlimited Minor Revisions" },
        { included: true, text: "Dedicated Project Manager" },
        { included: true, text: "2 Hours Monthly Maintenance" },
      ],
      delivery: "4-8 weeks",
      revisions: "Unlimited within project scope",
      support: "6 months premium support + 2 hours monthly maintenance",
    },
  ];

  const addOns = [
    { service: "Additional Page", price: "₹999" },
    { service: "Logo Design", price: "₹2,999" },
    { service: "E-commerce (per 10 products)", price: "₹3,999" },
    { service: "Custom Feature Development", price: "₹4,999+" },
    { service: "Content Writing (per page)", price: "₹999" },
    { service: "Professional Photography", price: "₹4,999" },
    { service: "Monthly SEO Service", price: "₹8,999/mo" },
    { service: "Social Media Management", price: "₹6,999/mo" },
    { service: "Extended Support (per month)", price: "₹1,999/mo" },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-white text-primary" data-testid="badge-pricing-hero">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-4" data-aos="fade-up" data-aos-delay="100">
            No hidden charges. All prices include GST.
          </p>
          <p className="text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Choose a package that fits your budget and business needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.popular ? "border-2 border-primary scale-105 shadow-xl" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-testid={`card-pricing-${tier.name.toLowerCase()}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{tier.best}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-sm">₹</span>
                      <span className="text-5xl font-bold">{tier.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ₹{tier.gst} including GST
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {feature.included ? (
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${!feature.included ? "text-muted-foreground line-through" : ""}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t space-y-2 text-sm">
                    <p><span className="font-medium">Delivery:</span> {tier.delivery}</p>
                    <p><span className="font-medium">Revisions:</span> {tier.revisions}</p>
                    <p><span className="font-medium">Support:</span> {tier.support}</p>
                  </div>

                  <Link href="/contact" data-testid={`link-pricing-${tier.name.toLowerCase()}`}>
                    <Button
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                    >
                      Choose {tier.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-muted-foreground mb-4">
              Not sure which package is right for you?
            </p>
            <Link href="/contact" data-testid="link-pricing-consultation">
              <Button size="lg">Get Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-On Services</h2>
            <p className="text-lg text-muted-foreground">
              Enhance your package with additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <CardContent className="p-6 flex justify-between items-center">
                  <span className="font-medium">{addon.service}</span>
                  <span className="text-lg font-bold text-primary">{addon.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included in All Packages</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Included in Every Package
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Mobile-responsive design</li>
                    <li>✓ Fast loading speed optimization</li>
                    <li>✓ WhatsApp integration</li>
                    <li>✓ Social media links</li>
                    <li>✓ SSL certificate setup</li>
                    <li>✓ Basic SEO setup</li>
                    <li>✓ Contact forms</li>
                    <li>✓ Email setup assistance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Payment Terms
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ 50% advance payment to start</li>
                    <li>✓ 50% on project completion</li>
                    <li>✓ UPI, Bank Transfer, or Razorpay</li>
                    <li>✓ GST invoice provided</li>
                    <li>✓ No hidden charges</li>
                    <li>✓ Money-back guarantee (conditions apply)</li>
                    <li>✓ Flexible payment plans available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose your package and let's build something amazing together
          </p>
          <Link href="/contact" data-testid="link-pricing-cta">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-0">
              Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
