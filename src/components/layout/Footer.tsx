import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/qsc-logo.jpg`}
                alt="QSC Automotive"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-black font-semibold text-sm leading-relaxed">
              Premium automotive repair and maintenance services across the
              Saudi Arabia. We specialize in luxury and exotic vehicles,
              providing dealership-quality service.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="text-black font-semibold hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/qscautomotive?igsh=MWllNDV1b3A4dHN2dg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/qscautomotive?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-black font-semibold hover:text-primary text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-black font-semibold hover:text-primary text-sm transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="text-black font-semibold hover:text-primary text-sm transition-colors"
                >
                  Brands We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-black font-semibold hover:text-primary text-sm transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black font-semibold hover:text-primary text-sm transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-black font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-black font-semibold">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  Exit 18, Al Kharj Road, An Noor, Riyadh 14321, <br />
                  Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-semibold">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+966 50 818 1801</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-semibold">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@qscco.sa" className="hover:text-primary transition-colors">info@qscco.sa</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-semibold">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:contact@qscco.sa" className="hover:text-primary transition-colors">contact@qscco.sa</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">
              Working Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-black font-semibold">
                <Clock size={18} className="text-primary shrink-0" />
                <div>
                  <p className="font-medium text-foreground">
                    Monday - Saturday
                  </p>
                  <p>8:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-semibold mt-4">
                <Clock
                  size={18}
                  className="text-black font-semibold shrink-0"
                />
                <div>
                  <p className="font-medium text-foreground">Friday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-black font-semibold">
            © {new Date().getFullYear()} QSC Automotive. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-black font-semibold">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
