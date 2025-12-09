import { Code, Database, Server, Wrench, GitBranch, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";

export default function Skills() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: t("skills.frontend", language),
      icon: Code,
      skills: [
        t("skills.skills.html", language),
        t("skills.skills.css", language),
        t("skills.skills.javascript", language),
        t("skills.skills.react", language),
        t("skills.skills.responsiveDesign", language),
      ],
    },
    {
      category: t("skills.backend", language),
      icon: Server,
      skills: [
        t("skills.skills.nodejs", language),
        t("skills.skills.php", language),
        t("skills.skills.java", language),
        t("skills.skills.restApis", language),
        t("skills.skills.serverManagement", language),
      ],
    },
    {
      category: t("skills.database", language),
      icon: Database,
      skills: [
        t("skills.skills.mysql", language),
        t("skills.skills.mongodb", language),
        t("skills.skills.databaseDesign", language),
        t("skills.skills.queryOptimization", language),
      ],
    },
    {
      category: t("skills.tools", language),
      icon: Wrench,
      skills: [
        t("skills.skills.git", language),
        t("skills.skills.agile", language),
        t("skills.skills.dataStructures", language),
        t("skills.skills.algorithms", language),
        t("skills.skills.networking", language),
      ],
    },
    {
      category: t("skills.development", language),
      icon: GitBranch,
      skills: [
        t("skills.skills.versionControl", language),
        t("skills.skills.codeReview", language),
        t("skills.skills.testing", language),
        t("skills.skills.cicd", language),
      ],
    },
    {
      category: t("skills.softSkills", language),
      icon: Users,
      skills: [
        t("skills.skills.problemSolving", language),
        t("skills.skills.teamwork", language),
        t("skills.skills.timeManagement", language),
        t("skills.skills.adaptability", language),
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
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
            {t("skills.title", language)}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className={`rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      theme === "dark" ? "bg-blue-900" : "bg-blue-100"
                    }`}
                  >
                    <Icon
                      className={
                        theme === "dark" ? "text-cyan-400" : "text-blue-600"
                      }
                      size={24}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        theme === "dark"
                          ? "bg-blue-900 text-cyan-300"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
