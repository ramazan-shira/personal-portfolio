import { Heart, Linkedin, Mail, Globe } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";

export default function Footer() {
  const { theme, language } = useTheme();

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer
      className={`text-white py-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 cursor-pointer">
              Ramazan Shira
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.about", language)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 cursor-pointer">
              {t("footer.quickLinks", language)}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {t(`nav.${link.label.toLowerCase()}`, language)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 cursor-pointer">
              {t("footer.connect", language)}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ramazan-shira-b1203520b"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-blue-600"
                    : "bg-gray-700 hover:bg-blue-600"
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://ramazanshira.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-blue-600"
                    : "bg-gray-700 hover:bg-blue-600"
                }`}
              >
                <Globe size={20} />
              </a>
              <a
                href="mailto:ramazanshira1@gmail.com"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-blue-600"
                    : "bg-gray-700 hover:bg-blue-600"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`border-t pt-8 ${
            theme === "dark" ? "border-gray-800" : "border-gray-700"
          }`}
        >
          <p className="text-center text-gray-400 flex items-center justify-center">
            {t("footer.madeBy", language)} Ramazan Shira
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} {t("footer.copyright", language)}
          </p>
        </div>
      </div>
    </footer>
  );
}
