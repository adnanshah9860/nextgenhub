import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ExternalLink, ArrowRight } from "lucide-react";
import AOS from "aos";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Sharma Clinic - Healthcare Website",
      category: "Healthcare",
      client: "Dr. Sharma's Multispeciality Clinic, Mumbai",
      challenge: "Needed online appointment booking and patient information system",
      solution: "Built a user-friendly website with online booking, doctor profiles, and health blog",
      results: [
        "50% increase in appointments within 2 months",
        "3x more online bookings vs. phone calls",
        "Mobile-first design serving 70% mobile users",
        "Integrated Google My Business for local SEO",
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
      tech: ["Responsive Design", "Appointment System", "SEO", "WhatsApp Integration"],
    },
    {
      title: "Kumar Electronics - E-commerce Platform",
      category: "Retail / E-commerce",
      client: "Kumar Electronics, Delhi",
      challenge: "Wanted to sell products online and compete with large marketplaces",
      solution: "Developed full-featured e-commerce site with payment gateway and inventory management",
      results: [
        "₹2 Lakhs monthly online sales within 4 months",
        "200+ products listed with categories",
        "Razorpay payment integration for UPI/cards",
        "Automated order confirmations via WhatsApp",
      ],
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&auto=format&fit=crop",
      tech: ["E-commerce", "Payment Gateway", "Inventory", "Mobile App"],
    },
    {
      title: "Patel Builders - Real Estate Portfolio",
      category: "Real Estate",
      client: "Patel Builders & Developers, Ahmedabad",
      challenge: "Needed to showcase ongoing projects and capture qualified leads",
      solution: "Created stunning portfolio website with project galleries and lead capture forms",
      results: [
        "40% increase in qualified leads",
        "Virtual tours for 5 ongoing projects",
        "Professional project gallery with 500+ images",
        "Integrated CRM for lead management",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop",
      tech: ["Portfolio Design", "Virtual Tours", "Lead Forms", "CRM Integration"],
    },
    {
      title: "Ananya Beauty Salon - Booking Platform",
      category: "Beauty & Wellness",
      client: "Ananya Beauty Salon, Bangalore",
      challenge: "Managing appointments manually led to scheduling conflicts",
      solution: "Built online booking system with service catalog and stylist selection",
      results: [
        "80% of bookings now online",
        "Reduced no-shows by 60% with reminders",
        "Customer database of 500+ clients",
        "WhatsApp reminders automated",
      ],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&auto=format&fit=crop",
      tech: ["Booking System", "SMS/WhatsApp", "Customer Database", "Service Catalog"],
    },
    {
      title: "Gupta & Associates - Law Firm Website",
      category: "Professional Services",
      client: "Gupta & Associates, Pune",
      challenge: "Needed professional online presence to attract corporate clients",
      solution: "Designed sophisticated website highlighting expertise and case studies",
      results: [
        "5 new corporate clients in 3 months",
        "Professional case study presentation",
        "Practice area pages ranking on Google",
        "Contact form generating 20+ inquiries/month",
      ],
      image: "https://images.unsplash.com/photo-1505664063655-e462e1c0e28a?w=1200&auto=format&fit=crop",
      tech: ["Professional Design", "Case Studies", "SEO", "Content Strategy"],
    },
    {
      title: "Tasty Bites Restaurant - Online Ordering",
      category: "Food & Beverage",
      client: "Tasty Bites Restaurant, Jaipur",
      challenge: "High commission fees on food delivery apps eating into profits",
      solution: "Created own online ordering website with direct delivery integration",
      results: [
        "₹1.5 Lakhs monthly direct orders",
        "Saved 20% on platform commissions",
        "Menu with 100+ items and combos",
        "Integrated with local delivery partners",
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop",
      tech: ["Online Ordering", "Menu Management", "Payment", "Delivery Integration"],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-white text-primary" data-testid="badge-portfolio-hero">Our Work</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Real Results for Indian Businesses
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            See how we've helped 100+ businesses across India grow their online presence and revenue
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden"
                data-aos="fade-up"
                data-testid={`card-project-${index}`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit">{project.category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h2>
                    <p className="text-sm text-muted-foreground mb-6">{project.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold mb-2">Challenge</h3>
                        <p className="text-sm text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Solution</h3>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Key Results
                        </h3>
                        <ul className="space-y-2">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="link-portfolio-cta-quote">
              <Button size="lg">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
            <Link href="/services" data-testid="link-portfolio-cta-services">
              <Button size="lg" variant="outline">View Our Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
