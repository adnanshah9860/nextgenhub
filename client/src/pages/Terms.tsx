import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from "aos";

export default function Terms() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: November 2025</p>
        </div>

        <div className="space-y-8">
          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                By accessing or using the services of Next Generation Hub ("NGH", "we", "us"), you agree to be 
                bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Services Offered</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>NGH provides the following services:</p>
              <ul>
                <li>Website design and development</li>
                <li>Digital marketing and SEO services</li>
                <li>Branding and logo design</li>
                <li>WhatsApp marketing and automation</li>
                <li>Related web development and digital marketing services</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Project Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>Project Scope</h3>
              <p>
                Each project begins with a written proposal outlining deliverables, timeline, and costs. 
                Changes to the project scope must be agreed upon in writing and may result in additional charges.
              </p>

              <h3>Payment Terms</h3>
              <ul>
                <li>50% advance payment required to begin work</li>
                <li>50% balance payment upon project completion</li>
                <li>Payments accepted via UPI, bank transfer, or Razorpay</li>
                <li>All prices are exclusive of GST unless stated otherwise</li>
                <li>Delayed payments may result in project suspension</li>
              </ul>

              <h3>Timeline</h3>
              <p>
                We strive to meet agreed timelines. However, delays may occur due to:
              </p>
              <ul>
                <li>Client feedback or approval delays</li>
                <li>Incomplete or delayed content/materials from client</li>
                <li>Scope changes or additions</li>
                <li>Technical or third-party service issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate project requirements and information</li>
                <li>Timely provision of content, images, and materials</li>
                <li>Timely feedback and approvals</li>
                <li>Domain and hosting credentials (if applicable)</li>
                <li>Ensuring they have rights to all content provided</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>Client Ownership</h3>
              <p>
                Upon full payment, the client owns the final deliverables (website, designs, etc.) 
                except for any third-party components, plugins, or frameworks used.
              </p>

              <h3>NGH Rights</h3>
              <p>
                NGH retains the right to:
              </p>
              <ul>
                <li>Showcase completed work in our portfolio</li>
                <li>Use project as a case study (with client approval)</li>
                <li>Reuse code frameworks and methodologies</li>
              </ul>

              <h3>Third-Party Components</h3>
              <p>
                Projects may include third-party plugins, libraries, or frameworks subject to their own licenses.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Revisions and Changes</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <ul>
                <li>Basic Package: 1 major revision round</li>
                <li>Professional Package: 3 major revision rounds</li>
                <li>Premium Package: Unlimited minor revisions within scope</li>
                <li>Additional revisions beyond package limits will be charged separately</li>
                <li>Revision requests must be submitted within 7 days of delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Support and Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Support periods vary by package:</p>
              <ul>
                <li>Basic: 1 month email support</li>
                <li>Professional: 3 months priority support</li>
                <li>Premium: 6 months premium support + 2 hours monthly maintenance</li>
              </ul>
              <p>Support covers bug fixes and technical issues, not new features or design changes.</p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <ul>
                <li>Full refund if project not started (within 48 hours of payment)</li>
                <li>Partial refund (50%) if work is less than 25% complete</li>
                <li>No refund if work is more than 25% complete</li>
                <li>Refunds processed within 7-10 business days</li>
                <li>Refund decisions are at NGH's discretion based on work completed</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Warranties and Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>Our Warranty</h3>
              <p>We warrant that our work will be performed professionally and meet agreed specifications.</p>

              <h3>Disclaimers</h3>
              <ul>
                <li>We do not guarantee specific search engine rankings or traffic results</li>
                <li>We are not responsible for third-party service outages (hosting, email, etc.)</li>
                <li>We do not guarantee compatibility with all future browser versions</li>
                <li>Digital marketing results may vary based on market conditions</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                NGH's total liability for any claim arising from our services shall not exceed the total 
                amount paid by the client for the specific project. We are not liable for indirect, 
                incidental, or consequential damages.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Confidentiality</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Both parties agree to keep confidential any proprietary information shared during the 
                project. This obligation survives termination of the agreement.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Either party may terminate the agreement with written notice. Upon termination:</p>
              <ul>
                <li>Client pays for all completed work</li>
                <li>NGH delivers all completed deliverables</li>
                <li>Unfinished work remains property of NGH</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the 
                exclusive jurisdiction of courts in Mumbai, Maharashtra.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                We reserve the right to modify these terms at any time. Updated terms will be posted 
                on our website with a new "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>For questions about these Terms of Service:</p>
              <ul>
                <li>Email: info@ngh.in</li>
                <li>Phone/WhatsApp: +91 98765 43210</li>
                <li>Address: Mumbai, Maharashtra, India</li>
                <li>GSTIN: 27XXXXX1234X1ZX</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
