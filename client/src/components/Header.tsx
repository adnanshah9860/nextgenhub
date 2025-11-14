import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoUrl from "@assets/next gen hub logo png_1762931456033.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "918530938774";
  const whatsappMessage = encodeURIComponent("Hi NGH, I want a quote for a website.");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Next Generation Hub Logo" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NGH.India
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-header-whatsapp"
            >
              <Button variant="outline" size="default" className="gap-2">
                <FaWhatsapp className="h-4 w-4" />
                <Phone className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
            <Link href="/contact" data-testid="link-header-quote">
              <Button size="default">Get Quote</Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-mobile-whatsapp"
              >
                <Button variant="outline" size="default" className="w-full gap-2">
                  <FaWhatsapp className="h-4 w-4" />
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <Link href="/contact" data-testid="link-mobile-quote">
                <Button size="default" className="w-full">Get Quote</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
