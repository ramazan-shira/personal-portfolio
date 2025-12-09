import { Layout, Server, Database, Code2, Smartphone, Cog } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";

export default function Services() {
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

  const services = [
    {
      title:
        language === "en" ? "Full Stack Development" : "Zhvillim Full Stack",
      description:
        language === "en"
          ? "Build scalable, end-to-end web applications with modern technologies like React, Node.js, PHP, MySQL, and MongoDB."
          : "Ndërtimi i aplikacioneve web të shkallëzueshme, nga fillimi në fund, duke përdorur teknologjitë më të fundit si React, Node.js, PHP, MySQL dhe MongoDB.",
      icon: Code2,
    },
    {
      title: language === "en" ? "UI/UX & Frontend" : "UI/UX & Frontend",
      description:
        language === "en"
          ? "Design and develop responsive, user-friendly, and visually appealing interfaces with React and modern frontend tools."
          : "Projektimi dhe zhvillimi i ndërfaqeve të përgjegjshme, të thjeshta për përdoruesin dhe vizualisht tërheqëse me React dhe mjete moderne frontend.",
      icon: Layout,
    },
    {
      title: language === "en" ? "Backend & API" : "Backend & API",
      description:
        language === "en"
          ? "Develop robust server-side applications and secure APIs, ensuring performance, security, and maintainability."
          : "Zhvillimi i aplikacioneve të fuqishme në server dhe API-ve të sigurta, duke garantuar performancë, siguri dhe mirëmbajtje të lehtë.",
      icon: Server,
    },
    {
      title:
        language === "en" ? "System Architecture" : "Arkitektura e Sistemit",
      description:
        language === "en"
          ? "Plan and implement scalable software architectures and optimized infrastructures for complex applications."
          : "Planifikimi dhe implementimi i arkitekturave softuerike të shkallëzueshme dhe infrastrukturave të optimizuara për aplikacione komplekse.",
      icon: Cog,
    },
    {
      title: language === "en" ? "Cloud & Deployment" : "Cloud & Vendosja",
      description:
        language === "en"
          ? "Deploy and maintain production-grade applications on cloud platforms with CI/CD pipelines and monitoring."
          : "Vendosja dhe mirëmbajtja e aplikacioneve në cloud me CI/CD dhe monitorim për performancë optimale.",
      icon: Smartphone,
    },
  ];

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold cursor-pointer mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {t("services.title", language)}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("services.subtitle", language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group rounded-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600"
                    : "bg-gradient-to-br from-blue-50 to-white border-gray-200"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>
                <h3
                  className={`text-xl font-bold cursor-pointer mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
