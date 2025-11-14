import { Link } from "wouter";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoUrl from "@assets/next gen hub logo png_1762931456033.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1320] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Next Generation Hub" className="h-10 w-10" />
              <span className="text-xl font-bold">NGH</span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering Indian SMBs with professional websites, digital marketing, and branding solutions.
            </p>
            <p className="text-sm text-gray-400">
            
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-footer-services">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-footer-portfolio">Portfolio</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-footer-pricing">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#website" className="text-gray-300 hover:text-primary transition-colors">Website Development</Link></li>
              <li><Link href="/services#marketing" className="text-gray-300 hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services#branding" className="text-gray-300 hover:text-primary transition-colors">Branding & Logo Design</Link></li>
              <li><Link href="/services#whatsapp" className="text-gray-300 hover:text-primary transition-colors">WhatsApp Automation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="h-4 w-4 text-green-400" />
                <span>+91 8530938774</span>
              </li>
              <li>next.gen.hub9@gmail.com</li>
              <li className="text-sm pt-2">Paithan Gate Chh, Sambhajinagar, Maharashtra, India</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-social-facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-social-twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-social-linkedin">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-social-instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <span>© {currentYear} Next Generation Hub. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>Pricing Terms</span>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors" data-testid="link-footer-terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
