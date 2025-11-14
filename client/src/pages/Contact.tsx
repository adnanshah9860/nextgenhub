import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import { trackConversion } from "@/lib/analytics";

export default function Contact() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    city: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit");
      }

      trackConversion('quote_request', undefined, {
        service: formData.service,
        budget: formData.budget,
        city: formData.city,
      });

      toast({
        title: "Success! 🎉",
        description: "Your quote request has been received. We'll contact you within 24 hours!",
      });

      setFormData({
        name: "",
        business: "",
        city: "",
        phone: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });

      setTimeout(() => {
        setLocation("/thank-you");
      }, 1500);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit. Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", 
    "Kolkata", "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur",
    "Indore", "Thane", "Bhopal", "Visakhapatnam", "Vadodara", "Other"
  ];

  const whatsappNumber = "918530938774";

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-white text-primary" data-testid="badge-contact-hero">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Get Your Free Quote
          </h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Tell us about your project and we'll send you a detailed proposal within 24 hours
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card data-aos="fade-up" data-aos-delay="0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FaWhatsapp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Quick response guaranteed</p>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                  data-testid="link-contact-whatsapp"
                >
                  +91 8530938774
                </a>
              </CardContent>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">We reply within 24 hours</p>
                <a
                  href="mailto:next.gen.hub9@gmail.com"
                  className="text-sm text-primary hover:underline"
                  data-testid="link-contact-email"
                >
                  next.gen.hub9@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-sm text-muted-foreground mb-2">Mon-Sat: 10 AM - 7 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div data-aos="fade-up">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us Your Requirements</CardTitle>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g Rajesh Kumar"
                          data-testid="input-contact-name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="business">Business Name *</Label>
                        <Input
                          id="business"
                          required
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          placeholder="e.g Kumar Electronics"
                          data-testid="input-contact-business"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Select required value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                        <SelectTrigger data-testid="select-contact-city">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone / WhatsApp *</Label>
                        <Input
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g +91 9999999999"
                          data-testid="input-contact-phone"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          data-testid="input-contact-email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select required value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger data-testid="select-contact-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                          <SelectItem value="branding">Branding & Logo Design</SelectItem>
                          <SelectItem value="whatsapp">Social media management</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Development</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Budget Range (INR) *</Label>
                      <RadioGroup required value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="under5k" id="under5k" data-testid="radio-budget-under5k" />
                            <Label htmlFor="under5k" className="font-normal cursor-pointer">Under ₹5,000</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="5k-15k" id="5k-15k" data-testid="radio-budget-5k-15k" />
                            <Label htmlFor="5k-15k" className="font-normal cursor-pointer">₹5,000 - ₹20,000</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="15k-30k" id="15k-30k" data-testid="radio-budget-15k-30k" />
                            <Label htmlFor="15k-30k" className="font-normal cursor-pointer">₹30,000 - ₹1,00,000</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="30k-plus" id="30k-plus" data-testid="radio-budget-30k-plus" />
                            <Label htmlFor="30k-plus" className="font-normal cursor-pointer">₹1,50,000+</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your project requirements..."
                        rows={4}
                        data-testid="textarea-contact-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                      data-testid="button-contact-submit"
                    >
                      {loading ? "Submitting..." : "Get Free Quote"}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy. We'll contact you within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                      <FaWhatsapp className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Prefer WhatsApp?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get instant response on WhatsApp. We're available Mon-Sat, 10 AM - 7 PM.
                      </p>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NGH, I want to discuss my project requirements.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="link-contact-sidebar-whatsapp"
                      >
                        <Button className="w-full gap-2 bg-green-500 hover:bg-green-600">
                          <FaWhatsapp className="h-5 w-5" />
                          Chat on WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose NGH?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">5+ Years Experience</h4>
                      <p className="text-sm text-muted-foreground">Trusted by 100+ Indian businesses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Affordable Pricing</h4>
                      <p className="text-sm text-muted-foreground">Plans starting from ₹4,999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Fast Delivery</h4>
                      <p className="text-sm text-muted-foreground">Basic websites in 1-2 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Ongoing Support</h4>
                      <p className="text-sm text-muted-foreground">We're here even after launch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">International Standard</h4>
                      <p className="text-sm text-muted-foreground">Proper invoicing & compliance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Our Office</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Paithan Gate, Chh SambhajiNagar, Maharashtra, India</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>+91 8530938774</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>next.gen.hub9@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
