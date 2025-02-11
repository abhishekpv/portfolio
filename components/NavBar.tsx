import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <li>
        <a className="font-Ovo" onClick={onClick} href="#top">
          Home
        </a>
      </li>
      <li>
        <a className="font-Ovo" onClick={onClick} href="#about">
          About
        </a>
      </li>
      <li>
        <a className="font-Ovo" onClick={onClick} href="#experience">
          Experience
        </a>
      </li>
      <li>
        <a className="font-Ovo" onClick={onClick} href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a className="font-Ovo" onClick={onClick} href="#works">
          Works
        </a>
      </li>
      <li>
        <a className="font-Ovo" onClick={onClick} href="#contact">
          Contact
        </a>
      </li>
    </>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuBar = () => {
    setIsMenuOpen(true);
  };

  const closeMenubar = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header-bg"
          className="w-full"
        />
      </div>
      <nav className="fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a
          href="#top"
          className="w-28 text-3xl cursor-pointer whitespace-nowrap font-medium mr-16"
        >
          Abhishek <span className="text-red-700 text-4xl">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <NavLinks />
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image alt="theme-moon" src={assets.moon_icon} className="w-6" />
          </button>
          <a
            href=""
            className="hidden font-Ovo lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Resume
            <Image
              alt="download-icon"
              src={assets.download_icon}
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-4">
            <Image
              alt="hamburger-menu"
              src={assets.menu_black}
              className="w-6"
              onClick={openMenuBar}
            />
          </button>
        </div>

        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ${
            isMenuOpen && "-translate-x-[16rem]"
          }`}
        >
          <div className="absolute right-6 top-6">
            <Image
              alt="hamburger-close"
              src={assets.close_black}
              className="w-5 cursor-pointer"
              onClick={closeMenubar}
            />
          </div>
          <NavLinks onClick={closeMenubar} />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
