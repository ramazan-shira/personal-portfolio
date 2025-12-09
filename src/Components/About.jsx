import { useEffect, useRef, useState } from "react";
import { CheckCircle, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";
import CV from "../Assets/Documents/Ramazan Shira CV.pdf";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { theme, language } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights =
    language === "en"
      ? [
          "Full Stack Development",
          "Software Architecture",
          "Scalable Solutions",
          "Clean Code Practices",
          "Team Leadership",
          "Problem Solving",
        ]
      : [
          "Zhvillim Full Stack",
          "Arkitektura Softuerësh",
          "Zgjidhje të Shkallëzueshme",
          "Praktika të Kodimit të Pastër",
          "Udhëheqje të Ekipit",
          "Zgjidhja e Problemeve",
        ];

  const stats = [
    {
      number: "3+",
      label: language === "en" ? "Years Experience" : "Vite Përvojë",
    },
    {
      number: "20+",
      label:
        language === "en" ? "Projects Completed" : "Projekte të Përfunduara",
    },
    {
      number: "100%",
      label: language === "en" ? "Client Satisfaction" : "Klientë të Kënaqur",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              className={`relative w-full rounded-2xl overflow-hidden shadow-2xl p-8 ${
                theme === "dark"
                  ? "bg-gray-700"
                  : "bg-gradient-to-br from-blue-50 to-teal-50"
              }`}
            >
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center p-4 rounded-lg transition-all duration-500 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    } ${
                      theme === "dark" ? "bg-gray-600" : "bg-white shadow-lg"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p
                      className={`text-3xl font-bold mb-2 ${
                        theme === "dark" ? "text-cyan-400" : "text-blue-600"
                      }`}
                    >
                      {stat.number}
                    </p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["React", "Node.js", "MySQL", "MongoDB", "PHP", "Java"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className={`text-center py-3 px-2 rounded-lg font-semibold transition-transform hover:scale-105 ${
                        theme === "dark"
                          ? "bg-gray-600 text-cyan-300"
                          : "bg-white text-blue-600 shadow"
                      }`}
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold cursor-pointer mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {t("about.title", language)}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>

            <p
              className={`text-lg leading-relaxed mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("about.description1", language)}
            </p>

            <p
              className={`text-lg leading-relaxed mb-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("about.description2", language)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle
                    className={
                      theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    }
                    size={24}
                  />
                  <span
                    className={`font-semibold ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-6 py-3 font-semibold rounded-lg transition-colors duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {t("about.getInTouch", language)}
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-6 py-3 border-2 font-semibold rounded-lg transition-colors duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "border-blue-500 text-blue-400 hover:bg-gray-700"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {t("about.viewProjects", language)}
              </a>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = CV;
                  link.download = "Ramazan_Shira_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`px-6 py-3 border-2 font-semibold rounded-lg transition-colors duration-300 cursor-pointer flex items-center space-x-2 ${
                  theme === "dark"
                    ? "border-cyan-400 text-cyan-400 hover:bg-gray-700"
                    : "border-teal-600 text-teal-600 hover:bg-teal-50"
                }`}
              >
                <Download size={20} />
                <span>{t("about.downloadCV", language)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
