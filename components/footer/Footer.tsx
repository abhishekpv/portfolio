import { MouseContext } from "@/app/MouseProvider";
import FooterHeader from "./FooterHeader";
import SocialIcons from "./SocialIcons";
import { motion } from "motion/react";
import { useContext } from "react";

const Footer = () => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mt-20"
    >
      <FooterHeader />
      <div className="text-center sm:flex items-center justify-between gap-4 mt-12 py-6 border-t border-gray-400 mx-[10%]">
        <p
          onMouseEnter={() => setCursorType("textNormal")}
          onMouseLeave={() => setCursorType("default")}
        >
          &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>
        <SocialIcons />
      </div>
    </motion.div>
  );
};

export default Footer;
