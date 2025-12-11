import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import arkiva1 from "../Assets/Images/arkiva1.png";
import arkiva2 from "../Assets/Images/arkiva2.png";
import arkiva3 from "../Assets/Images/arkiva3.png";
import arkiva4 from "../Assets/Images/arkiva4.png";
import arkiva5 from "../Assets/Images/arkiva5.png";
import teater1 from "../Assets/Images/teater1.png";
import teater2 from "../Assets/Images/teater2.png";
import teater3 from "../Assets/Images/teater3.png";
import teater4 from "../Assets/Images/teater4.png";
import fortis1 from "../Assets/Images/fortis1.png";
import fortis2 from "../Assets/Images/fortis2.png";
import fortis3 from "../Assets/Images/fortis3.png";
import fortis4 from "../Assets/Images/fortis4.png";
import fortis5 from "../Assets/Images/fortis5.png";
import taskEase from "../Assets/Images/taskease.png";
import notes1 from "../Assets/Images/notes1.png";
import notes2 from "../Assets/Images/notes2.png";
import notes3 from "../Assets/Images/notes3.png";
import notes4 from "../Assets/Images/notes4.png";
import carSales1 from "../Assets/Images/carSales1.png";
import carSales2 from "../Assets/Images/carSales2.png";
import carSales3 from "../Assets/Images/carSales3.png";
import petExpo1 from "../Assets/Images/petExpo1.png";
import petExpo2 from "../Assets/Images/petExpo2.png";
import userManagement1 from "../Assets/Images/userManagement1.png";
import userManagement2 from "../Assets/Images/userManagement2.png";
import toDo1 from "../Assets/Images/toDo1.png";
import toDo2 from "../Assets/Images/toDo2.png";
import githubProfile1 from "../Assets/Images/githubProfile1.png";
import githubProfile2 from "../Assets/Images/githubProfile2.png";
import githubProfile3 from "../Assets/Images/githubProfile3.png";
import digitalMastery1 from "../Assets/Images/digitalMastery1.png";
import digitalMastery2 from "../Assets/Images/digitalMastery2.png";
import digitalMastery3 from "../Assets/Images/digitalMastery3.png";
import rollDice1 from "../Assets/Images/rollDice1.png";
import rollDice2 from "../Assets/Images/rollDice2.png";
import guessNr1 from "../Assets/Images/guessNr1.png";
import guessNr2 from "../Assets/Images/guessNr2.png";
import guessNr3 from "../Assets/Images/guessNr3.png";
import tasteIt1 from "../Assets/Images/tasteIt1.png";
import tasteIt2 from "../Assets/Images/tasteIt2.png";
import tasteIt3 from "../Assets/Images/tasteIt3.png";

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const { theme, language } = useTheme();

  const projects = [
    {
      images: [arkiva1, arkiva2, arkiva3, arkiva4, arkiva5],
      liveUrl: "https://arkiva.gov.al",
      githubUrl: "https://github.com/rukubaruku/arkiva.gov.al-frontend",
      technologies: ["React", "Node.js", "MongoDB", "REST API"],
    },
    {
      images: [teater1, teater2, teater3, teater3, teater4],
      liveUrl: "https://teater.arkiva.gov.al",
      githubUrl: "https://github.com/rukubaruku/frontend-teater.arkiva.gov.al",
      technologies: ["React", "Node.js", "MongoDB", "REST API"],
    },
    {
      images: [fortis1, fortis2, fortis3, fortis4, fortis5],
      liveUrl: "http://217.76.51.97/fortis/login",
      githubUrl: "https://github.com/fortistrainer/fortis-trainer-frontend",
      technologies: ["React", "Java", "MySQL"],
    },
    {
      images: [taskEase],
      liveUrl: "https://taskease-front.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Task-Ease-Frontend",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      images: [notes1, notes2, notes3, notes4],
      liveUrl: "https://rsh-notesapp-react.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Notes-App-React",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    },
    {
      images: [carSales1, carSales2, carSales3],
      liveUrl: "https://rsh-car-sales-redux.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Car---Sales---React-Redux",
      technologies: ["React Redux"],
    },
    {
      images: [petExpo1, petExpo2],
      liveUrl: "https://rsh-pet-expo.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/PET-EXPO",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      images: [userManagement1, userManagement2],
      liveUrl: "https://usermanagement-redux.netlify.app/",
      githubUrl:
        "https://github.com/ramazan-shira/User-Manegement---React-Redux",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      images: [toDo1, toDo2],
      liveUrl: "https://rsh-to-do-list-redux.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/To-Do-List-React",
      technologies: ["React Redux"],
    },
    {
      images: [githubProfile1, githubProfile2, githubProfile3],
      liveUrl: "https://rsh-github-usercard.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Github-User-Card",
      technologies: ["React Redux"],
    },
    {
      images: [digitalMastery1, digitalMastery2, digitalMastery3],
      liveUrl: "https://digitalmastery.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/DigitalMastery",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      images: [tasteIt1, tasteIt2, tasteIt3],
      liveUrl: "https://tasteit-restaurant.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Restaurant-Website",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      images: [rollDice1, rollDice2],
      liveUrl: "https://rsh-roll-dice.netlify.app/",
      githubUrl: "https://github.com/ramazan-shira/Pig-Game",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      images: [guessNr1, guessNr2, guessNr3],
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

  const openModal = (index) => {
    setActiveProjectIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProjectIndex(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="projects"
        className={`py-20 transition-colors duration-300 ${
          theme === "dark" ? "bg-[#1F2937]" : "bg-gray-50"
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

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                onClick={() => openModal(index)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  theme === "dark"
                    ? "bg-[#1F2937] hover:bg-[#273345] hover:shadow-2xl hover:shadow-[#1F2937]/40"
                    : "bg-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/15"
                } hover:-translate-y-3`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={t(`projects.items.${index}.title`, language)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 ${
                      theme === "dark"
                        ? "bg-[#1F2937] opacity-30"
                        : "bg-[#CBD5E1] opacity-40"
                    }`}
                  ></div>
                </div>

                {/* CARD TEXT */}
                <div className="p-6 cursor-pointer">
                  <h3
                    className={`text-2xl font-bold mb-3 cursor-pointer ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t(`projects.items.${index}.title`, language)}
                  </h3>

                  <p
                    className={`mb-4 text-lg leading-relaxed line-clamp-2 cursor-pointer ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t(`projects.items.${index}.description`, language)}
                  </p>

                  {/* Divider */}
                  <div
                    className={`h-px mb-4 ${
                      theme === "dark" ? "bg-[#2D3A4A]" : "bg-gray-200"
                    }`}
                  ></div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all hover:scale-105 cursor-pointer ${
                          theme === "dark"
                            ? "bg-[#273345] text-cyan-300 hover:bg-[#324059]"
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

      {/* MODAL */}
      {modalOpen && activeProjectIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-0">
          <div className="bg-white dark:bg-[#1F2937] w-full max-w-6xl h-full md:h-[80vh] rounded-2xl flex flex-col md:flex-row overflow-hidden relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 dark:text-gray-200 z-50"
            >
              <X size={28} />
            </button>

            {/* Carousel */}
            <div className="w-full md:w-2/3 h-64 md:h-full relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{ hideOnClick: true }}
                pagination={{ clickable: true }}
                className="h-full"
              >
                {projects[activeProjectIndex].images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* MODAL INFO */}
            <div className="w-full md:w-1/3 p-6 overflow-y-auto">
              <h2
                className={`text-4xl font-bold mb-4 cursor-pointer ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {t(`projects.items.${activeProjectIndex}.title`, language)}
              </h2>

              <p
                className={`mb-6 text-lg cursor-pointer ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t(
                  `projects.items.${activeProjectIndex}.longDescription`,
                  language
                )}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProjectIndex].technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-semibold cursor-pointer ${
                      theme === "dark"
                        ? "bg-[#273345] text-cyan-300 hover:bg-[#324059]"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                {projects[activeProjectIndex].liveUrl && (
                  <a
                    href={projects[activeProjectIndex].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}

                {projects[activeProjectIndex].githubUrl && (
                  <a
                    href={projects[activeProjectIndex].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 dark:bg-gray-800 text-white rounded hover:bg-gray-800 dark:hover:bg-gray-700 transition flex items-center gap-1"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
