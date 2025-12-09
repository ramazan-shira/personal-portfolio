import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "../LanguageToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, language } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t("nav.home", language) },
    { href: "#about", label: t("nav.about", language) },
    { href: "#skills", label: t("nav.skills", language) },
    { href: "#services", label: t("nav.services", language) },
    { href: "#experience", label: t("nav.experience", language) },
    { href: "#projects", label: t("nav.projects", language) },
    { href: "#contact", label: t("nav.contact", language) },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-gray-900 shadow-lg"
            : "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className={`text-2xl font-bold transition-colors cursor-pointer ${
              isScrolled
                ? theme === "dark"
                  ? "text-white"
                  : "text-gray-800"
                : "text-white"
            }`}
          >
            Ramazan Shira
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`transition-colors hover:text-blue-600 cursor-pointer ${
                  isScrolled
                    ? theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className={`md:hidden ${
                isScrolled
                  ? theme === "dark"
                    ? "text-white"
                    : "text-gray-800"
                  : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 rounded-lg shadow-lg ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block px-4 py-2 hover:text-blue-600 transition-colors cursor-pointer ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
