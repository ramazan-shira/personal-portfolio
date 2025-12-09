import { ArrowDown, Github, Linkedin, Mail, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";
import Typewriter from "./Typewritter";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, language } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center text-white overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          : "bg-gradient-to-br from-slate-600 via-teal-600 to-emerald-700"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Blurry animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div
        className={`container mx-auto px-6 z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-6">
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold text-blue-600">RS</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in cursor-pointer hover:opacity-80 transition-opacity">
            {t("hero.title", language)}
          </h1>

          {/* Typewriter */}
          <div className="relative h-16 md:h-20 mb-8 flex items-center justify-center">
            <Typewriter
              key={language}
              text={t("hero.subtitle", language)}
              speed={80}
              repeatDelay={15000}
              className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300"
            />

            <span className="text-2xl md:text-4xl font-bold text-cyan-300 ml-1 animate-blink">
              |
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/ramazan-shira-b1203520b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://ramazanshira.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <Globe size={24} />
            </a>

            <a
              href="mailto:ramazanshira1@gmail.com"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Down Arrow */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block animate-bounce"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
