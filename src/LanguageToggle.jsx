import { useTheme } from "./context/ThemeContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useTheme();

  return (
    <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 rounded-full p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full font-semibold transition-colors ${
          language === "en"
            ? "bg-blue-600 text-white"
            : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("al")}
        className={`px-3 py-1 rounded-full font-semibold transition-colors ${
          language === "al"
            ? "bg-blue-600 text-white"
            : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        }`}
      >
        AL
      </button>
    </div>
  );
}
