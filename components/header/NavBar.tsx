import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import MobileNavBar from "./MobileNavBar";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const openMenuBar = () => {
    setIsMenuOpen(true);
  };

  const closeMenubar = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-full duration-200 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header-bg"
          className="w-full"
        />
      </div>
      <nav
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between duration-300 z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-opacity-50 dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a
          href="#top"
          className="w-28 text-3xl cursor-pointer whitespace-nowrap font-medium mr-16"
        >
          Abhishek<span className="text-pink-600 text-4xl">.</span>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:border  duration-300 bg-white  shadow-sm  ${
            isScroll
              ? "bg-opacity-80  dark:bg-darkTheme/70 dark:border-white/5"
              : "bg-opacity-50 dark:bg-transparent dark:border-white/30"
          }`}
        >
          <NavLinks />
        </ul>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="/abhishek-sde-cv.pdf"
            download
            className="hidden font-Ovo lg:flex items-center text-black dark:text-white gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 duration-200 hover:shadow-sm dark:hover:border-white/70 hover:border-gray-800 "
          >
            Resume
            <Image
              alt="download-icon"
              src={assets.download_icon}
              className="w-4 duration-200 dark:invert"
            />
          </a>
          <button className="block md:hidden ml-4">
            <Image
              alt="hamburger-menu"
              src={assets.menu_black}
              className="w-6 duration-200 dark:invert"
              onClick={openMenuBar}
            />
          </button>
        </div>
        <MobileNavBar closeMenubar={closeMenubar} isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
};

export default NavBar;
