import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../utils/translations";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { theme, language } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ramazanshira1@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            {t("contact.title", language)}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("contact.subtitle", language)}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3
              className={`text-2xl font-bold cursor-pointer mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {t("contact.contactInfo", language)}
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start group">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300 ${
                    theme === "dark" ? "bg-gray-700" : "bg-blue-100"
                  }`}
                >
                  <Mail
                    className={`group-hover:text-white transition-colors duration-300 ${
                      theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    }`}
                    size={24}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t("contact.email", language)}
                  </h4>
                  <a
                    href="mailto:ramazanshira1@gmail.com"
                    className={`hover:text-blue-600 transition-colors ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    ramazanshira1@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300 ${
                    theme === "dark" ? "bg-gray-700" : "bg-blue-100"
                  }`}
                >
                  <Phone
                    className={`group-hover:text-white transition-colors duration-300 ${
                      theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    }`}
                    size={24}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t("contact.phone", language)}
                  </h4>
                  <a
                    href="tel:+355686081940"
                    className={`hover:text-blue-600 transition-colors ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    (+355) 686081940
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start group">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300 ${
                    theme === "dark" ? "bg-gray-700" : "bg-blue-100"
                  }`}
                >
                  <MapPin
                    className={`group-hover:text-white transition-colors duration-300 ${
                      theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    }`}
                    size={24}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t("contact.location", language)}
                  </h4>
                  <p
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    Kamez, Tirana, Albania
                  </p>
                </div>
              </div>
            </div>

            {/* Connect Info */}
            <div
              className={`mt-8 p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-700" : "bg-blue-50"
              }`}
            >
              <h4
                className={`font-bold cursor-pointer mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {t("contact.connect", language)}
              </h4>
              <p
                className={`leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t("contact.connectMsg", language)}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className={`rounded-xl shadow-lg p-8 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {t("contact.name", language)}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  placeholder={t("contact.namePlaceholder", language)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {t("contact.email", language)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  placeholder={t("contact.emailPlaceholder", language)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className={`block font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {t("contact.subject", language)}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  placeholder={t("contact.subjectPlaceholder", language)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {t("contact.message", language)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  placeholder={t("contact.messagePlaceholder", language)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group"
              >
                {t("contact.sendMessage", language)}
                <Send
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
