"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion, useCycle } from "motion/react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const [animate, cycle] = useCycle({ rotate: 0 }, { rotate: 360 });

  return (
    <motion.button
      animate={animate}
      onTap={() => cycle()}
      onClick={toggleTheme}
      className="focus:outline-none"
    >
      <Image
        alt="theme-moon"
        src={isDarkMode ? assets.sun_icon : assets.moon_icon}
        className="w-6"
      />
    </motion.button>
  );
};

export default ThemeToggle;
