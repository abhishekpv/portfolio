import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      <Image
        alt="theme-moon"
        src={isDarkMode ? assets.sun_icon : assets.moon_icon}
        className="w-6"
      />
    </button>
  );
};

export default ThemeToggle;
