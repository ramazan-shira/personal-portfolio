import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const { theme, language } = useTheme();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = itemRefs.current.indexOf(entry.target);
        if (index !== -1 && entry.isIntersecting) {
          setVisibleItems((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const experiences = t("experience.jobs", language) || [];

  return (
    <section
      id="experience"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0">
          <h2
            className={`text-4xl md:text-5xl font-bold cursor-pointer mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {t("experience.title", language)}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("experience.subtitle", language)}
          </p>
        </div>

        {/* Experience Items */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((job, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative mb-12 transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div
                className={`rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 ${
                  theme === "dark"
                    ? "bg-gray-800 hover:-translate-y-1"
                    : "bg-white hover:-translate-y-1"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3
                      className={`text-2xl font-bold cursor-pointer mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {job.position}
                    </h3>
                    <div
                      className={`flex items-center font-semibold mb-2 ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      <Briefcase size={18} className="mr-2" />
                      {job.company}
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-col md:flex-row gap-4 mb-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {job.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.responsibilities.map((r, i) => (
                    <li
                      key={i}
                      className={`flex items-start ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-blue-600 mr-2 mt-1">▹</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < experiences.length - 1 && (
                <div
                  className={`absolute left-0 top-full w-1 h-12 ml-4 hidden md:block ${
                    theme === "dark" ? "bg-gray-700" : "bg-blue-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
