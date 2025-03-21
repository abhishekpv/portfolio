import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import Greeting from "./Greeting";
import HeroButtons from "./HeroButtons";
import { MouseContext } from "@/app/MouseProvider";
import { useContext } from "react";

const Header = () => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <div
      id="top"
      className="w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="w-32 aspect-square overflow-hidden rounded-full"
      >
        <Image
          className="w-32 -mt-6"
          src={assets.user_image}
          alt="profile-img"
        />
      </motion.div>
      <Greeting />
      <motion.h1
        onMouseEnter={() => setCursorType("textLarge")}
        onMouseLeave={() => setCursorType("default")}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl sm:text-6xl font-Ovo"
      >
        frontend web developer
      </motion.h1>
      <motion.p
      onMouseEnter={() => setCursorType("textNormal")}
      onMouseLeave={() => setCursorType("default")}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-2xl mx-auto font-Ovo px-1"
      >
        I am a frontend developer from Kerala, India, with over a year of
        experience building dynamic and user-friendly web applications.
      </motion.p>
      <HeroButtons />
    </div>
  );
};

export default Header;
