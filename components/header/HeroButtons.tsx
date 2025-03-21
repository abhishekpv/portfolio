import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import { useContext } from "react";
import { MouseContext } from "@/app/MouseProvider";

const HeroButtons = () => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
      <motion.a
        onMouseEnter={() => setCursorType("pointer")}
        onMouseLeave={() => setCursorType("default")}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        href="#contact"
        className="px-8 py-3 rounded-full border duration-200 border-white dark:border-gray-500 bg-black dark:bg-transparent text-white flex items-center gap-2"
      >
        connect with me
        <Image
          src={assets.right_arrow_white}
          className="w-4"
          alt="right-arrow"
        />
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorType("pointer")}
        onMouseLeave={() => setCursorType("default")}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        href="/abhishek-sde-cv.pdf"
        download
        className="px-10 py-3 rounded-full duration-200 border border-gray-500 dark:border-black bg-white text-black flex items-center gap-2"
      >
        my resume
        <Image src={assets.download_icon} className="w-4" alt="download-icon" />
      </motion.a>
    </div>
  );
};

export default HeroButtons;
