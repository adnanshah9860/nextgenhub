import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from "aos";

export default function Privacy() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: November 2025</p>
        </div>

        <div className="space-y-8">
          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Next Generation Hub ("NGH", "we", "us", or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website ngh.in or use our services.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>Personal Information</h3>
              <p>When you submit a contact form or request a quote, we collect:</p>
              <ul>
                <li>Name and business name</li>
                <li>Email address</li>
                <li>Phone number / WhatsApp number</li>
                <li>City/location</li>
                <li>Business requirements and budget information</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <ul>
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Device and operating system information</li>
                <li>Referring website addresses</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send project proposals and quotes</li>
                <li>Communicate about ongoing projects</li>
                <li>Send service updates and promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our business (e.g., hosting providers, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information. However, no method of transmission over the Internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
              <p>To exercise these rights, contact us at info@ngh.in</p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. 
                You can control cookies through your browser settings. Note that disabling cookies may 
                affect website functionality.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these websites. We encourage you to review their privacy policies.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly 
                collect personal information from children.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>Email: info@ngh.in</li>
                <li>Phone/WhatsApp: +91 98765 43210</li>
                <li>Address: Mumbai, Maharashtra, India</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
