"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { motion } from "motion/react";

type MouseProviderProps = {
  children: ReactNode;
};

export const MouseContext = createContext({
  setCursorType: (cursorType: string) => {
    if (cursorType) {
    }
  },
});

const MouseProvider = ({ children }: MouseProviderProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
    },
    pointer: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      width: 30,
      height: 30,
      backgroundColor: "#db2777",
      opacity: 0.9,
    },
    textLarge: {
      x: mousePosition.x - 2.5,
      y: mousePosition.y - 20,
      width: 5,
      height: 40,
      backgroundColor: "#db2777",
    },
    textNormal: {
      x: mousePosition.x - 2.5,
      y: mousePosition.y - 12.5,
      width: 5,
      height: 25,
      backgroundColor: "#db2777",
    },
  };

  return (
    <>
      <motion.div
        className="cursor duration-100 fixed w-4 h-4 bg-pink-500/50 border border-pink-500 rounded-full pointer-events-none "
        style={{ zIndex: 1000 }}
        variants={variants}
        animate={cursorType}
        transition={{ type: "spring", duration: 0 }}
      ></motion.div>
      <MouseContext.Provider value={{ setCursorType }}>
        {children}
      </MouseContext.Provider>
    </>
  );
};

export default MouseProvider;
