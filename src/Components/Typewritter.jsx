import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 100,
  className = "",
  repeatDelay = 15000, // 15s default
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // finished typing — wait for repeatDelay and restart
    if (currentIndex === text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, repeatDelay);
      return () => clearTimeout(timeout);
    }

    // typing next character
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, repeatDelay]);

  return <span className={className}>{displayedText}</span>;
}
