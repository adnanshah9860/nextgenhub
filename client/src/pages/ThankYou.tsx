import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";

export default function ThankYou() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hi NGH, I just submitted a quote request. Looking forward to hearing from you!");

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your request has been received successfully
            </p>
            <p className="text-lg text-muted-foreground">
              हमें आपका संदेश मिल गया है। धन्यवाद!
            </p>
          </div>

          <Card className="mb-8" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">We Review Your Requirements</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will carefully review your project details within the next few hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">We Contact You (Within 24 Hours)</h3>
                    <p className="text-sm text-muted-foreground">
                      Expect a call or WhatsApp message from us with initial discussion and questions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">You Receive Detailed Proposal</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll send you a comprehensive quote with timeline, pricing, and deliverables
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Project Kickoff</h3>
                    <p className="text-sm text-muted-foreground">
                      Once approved, we start working on your project immediately!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg font-medium">Can't wait? Connect with us instantly!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-thankyou-whatsapp"
              >
                <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 w-full sm:w-auto">
                  <FaWhatsapp className="h-5 w-5" />
                  Chat on WhatsApp Now
                </Button>
              </a>

              <Link href="/" data-testid="link-thankyou-home">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Back to Home <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg" data-aos="fade-up" data-aos-delay="300">
            <p className="text-sm text-muted-foreground mb-4">
              While you wait, explore our services and pricing
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services" data-testid="link-thankyou-services">
                <Button variant="outline" size="sm">View Services</Button>
              </Link>
              <Link href="/portfolio" data-testid="link-thankyou-portfolio">
                <Button variant="outline" size="sm">See Our Work</Button>
              </Link>
              <Link href="/pricing" data-testid="link-thankyou-pricing">
                <Button variant="outline" size="sm">View Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
