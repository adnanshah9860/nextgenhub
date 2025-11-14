import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackConversion } from "@/lib/analytics";

interface LeadMagnetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadMagnetModal({ open, onOpenChange }: LeadMagnetModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "website_audit" }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit");
      }

      trackConversion('lead_capture', undefined, {
        source: 'website_audit',
        lead_type: 'free_audit',
      });

      toast({
        title: "Success! 🎉",
        description: "Your free website audit request has been received. We'll send your report within 24 hours!",
      });

      setFormData({ name: "", email: "", whatsapp: "", website: "" });
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            Get Your Free Website Audit
          </DialogTitle>
          <DialogDescription className="text-base">
            Free Website Audit — within 1 hour
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">What You'll Get:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Complete SEO analysis & score</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Mobile performance report</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Speed optimization tips</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Conversion improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Free 15-min consultation</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lead-name">Your Name *</Label>
              <Input
                id="lead-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                data-testid="input-lead-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lead-email">Email Address *</Label>
              <Input
                id="lead-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                data-testid="input-lead-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lead-whatsapp">WhatsApp Number *</Label>
              <Input
                id="lead-whatsapp"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="e.g +91 98xxxxxxxx"
                data-testid="input-lead-whatsapp"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lead-website">Current Website</Label>
              <Input
                id="lead-website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="e.g www.yourwebsite.com"
                data-testid="input-lead-website"
              />
            </div>

            <Button
              type="submit"
              className="w-full gap-2"
              disabled={loading}
              data-testid="button-lead-submit"
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  <FaWhatsapp className="h-4 w-4" />
                  Get Free Audit Report
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              No credit card required. Report delivered in 1 hour.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
