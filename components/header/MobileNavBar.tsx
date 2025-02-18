import { assets } from "@/assets/assets";
import Image from "next/image";
import NavLinks from "./NavLinks";

type MobileNavBarProps = {
  isMenuOpen: boolean;
  closeMenubar: () => void;
};

const MobileNavBar = ({ closeMenubar, isMenuOpen }: MobileNavBarProps) => {
  return (
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
  );
};

export default MobileNavBar;
