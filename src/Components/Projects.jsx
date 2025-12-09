import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";
import arkiva from "../Assets/Images/arkiva.png";
import fortis from "../Assets/Images/fortis.png";
import taskEase from "../Assets/Images/taskease.png";
import notes from "../Assets/Images/notes-react.png";
import carSales from "../Assets/Images/carSales.png";
import petExpo from "../Assets/Images/pet-expo.png";
import userManagement from "../Assets/Images/user-management.png";
import toDoList from "../Assets/Images/toDoList-redux.png";
import githubProfile from "../Assets/Images/github-user.png";
import digitalmastery from "../Assets/Images/digitalmastery.png";
import reactRouterMovies from "../Assets/Images/reactRouterMovies.png";
import rollDice from "../Assets/Images/rollDice.png";
import guessNr from "../Assets/Images/guessNr.png";
import tasteIt from "../Assets/Images/tasteIt.png";

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const { theme, language } = useTheme();

  const projects = [
    {
      image: arkiva,
      liveUrl: "https://arkiva.gov.al",
      githubUrl:
        "https://github.com/ramazan-shira/arkiva.gov.al-frontend-local",
      technologies: ["React", "Node.js", "MongoDB", "REST API"],
    },
    {
      image: fortis,
      liveUrl: "http://217.76.51.97/fortis/login",
      githubUrl: "https://github.com/fortistrainer/fortis-trainer-frontend",
      technologies: ["React", "Java", "MySQL"],
    },
    {
      image: taskEase,
      liveUrl: "https://taskease-front.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Task-Ease-Frontend",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      image: notes,
      liveUrl: "https://rsh-notesapp-react.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Notes-App-React",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    },
    {
      image: carSales,
      liveUrl: "https://rsh-car-sales-redux.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Car---Sales---React-Redux",
      technologies: ["React Redux"],
    },
    {
      image: petExpo,
      liveUrl: "https://rsh-pet-expo.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/PET-EXPO",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      image: userManagement,
      liveUrl: "https://usermanagement-redux.netlify.app/",
      githubUrl:
        "https://github.com/ramazan-shira/User-Manegement---React-Redux",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      image: toDoList,
      liveUrl: "https://rsh-to-do-list-redux.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/To-Do-List-React",
      technologies: ["React Redux"],
    },
    {
      image: githubProfile,
      liveUrl: "https://rsh-github-usercard.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Github-User-Card",
      technologies: ["React Redux"],
    },
    {
      image: reactRouterMovies,
      liveUrl: "https://rsh-react-router-movies.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/React-Router-Movies",
      technologies: ["React"],
    },
    {
      image: digitalmastery,
      liveUrl: "https://digitalmastery.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/DigitalMastery",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: tasteIt,
      liveUrl: "https://tasteit-restaurant.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Restaurant-Website",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: rollDice,
      liveUrl: "https://rsh-roll-dice.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Pig-Game",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: guessNr,
      liveUrl: "https://rsh-guess-number.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Guess-My-Number-Game",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
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

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {t("projects.title", language)}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("projects.subtitle", language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                theme === "dark"
                  ? "bg-gray-700 hover:shadow-2xl hover:shadow-blue-500/20"
                  : "bg-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
              } hover:-translate-y-3 cursor-pointer`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`projects.items.${index}.title`, language)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Blue overlay */}
                <div className="absolute inset-0 bg-blue-500 opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("projects.liveDemo", language)}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                    >
                      <ExternalLink className="text-blue-600" size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("projects.viewCode", language)}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                    >
                      <Github className="text-blue-600" size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {t(`projects.items.${index}.title`, language)}
                </h3>
                <p
                  className={`mb-4 leading-relaxed line-clamp-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t(`projects.items.${index}.description`, language)}
                </p>

                <div
                  className={`h-px mb-4 ${
                    theme === "dark" ? "bg-gray-600" : "bg-gray-200"
                  }`}
                ></div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 ${
                        theme === "dark"
                          ? "bg-blue-900 text-cyan-300 hover:bg-blue-800"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
