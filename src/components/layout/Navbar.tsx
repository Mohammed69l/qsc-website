import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ ADD THIS
import { useLang } from "../../lang";

const navLinks = [
  { name: { en: "Home", ar: "الرئيسية" }, path: "/" },
  { name: { en: "Services", ar: "الخدمات" }, path: "/services" },
  { name: { en: "Brands", ar: "العلامات" }, path: "/brands" },
  { name: { en: "Locations", ar: "المواقع" }, path: "/locations" },
  { name: { en: "About Us", ar: "من نحن" }, path: "/about" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ LANGUAGE HOOK
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}images/qsc-logo.jpg`}
              alt="QSC Automotive"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-semibold transition-colors relative group pb-0.5 ${
                  location === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name[lang]}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    location === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">
            {/* ✅ LANGUAGE BUTTON */}
            <button
              onClick={toggleLang}
              className="px-3 py-1 border rounded-md text-sm font-bold hover:bg-primary hover:text-white transition"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>

            {/* Phone */}
            <a
              href="tel:+966508181801"
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <PhoneCall size={15} className="text-primary" />
              <span>+966 50 818 1801</span>
            </a>

            {/* Button */}
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm
                         hover:bg-[#1A609A] active:scale-[0.98] transition-all shadow-sm"
            >
              {lang === "en" ? "Book Service" : "احجز الخدمة"}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden shadow-md"
          >
            <div className="px-4 py-5 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition-colors ${
                    location === link.path
                      ? "bg-[#EBF4FF] text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name[lang]}
                </Link>
              ))}

              <div className="h-px bg-border my-2" />

              {/* Language Mobile */}
              <button
                onClick={toggleLang}
                className="px-3 py-2 text-sm font-bold border rounded-lg"
              >
                {lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
              </button>

              {/* Phone */}
              <a
                href="tel:+966508181801"
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground"
              >
                <PhoneCall size={15} className="text-primary" />
                +966 50 818 1801
              </a>

              {/* Button */}
              <Link
                href="/contact"
                className="bg-primary text-white px-5 py-3 rounded-lg font-bold text-center text-sm"
              >
                {lang === "en" ? "Book Service" : "احجز الخدمة"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
