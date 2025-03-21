import TechStack from "./TechStack";
import EducationStack from "./EducationStack";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ToolsList from "./ToolsList";
import SectionHeader from "../SectionHeader";
import { motion } from "motion/react";
import { useContext } from "react";
import { MouseContext } from "@/app/MouseProvider";

const About = () => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20 z-10"
    >
      <SectionHeader heading="Introduction" subHeading="About me" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full justify-center flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 sm:min-w-72 rounded-3xl overflow-hidden"
        >
          <Image
            className="sm:min-w-72"
            src={assets.user_image}
            alt="profile-img"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="fle"
        >
          <p
            onMouseEnter={() => setCursorType("textNormal")}
            onMouseLeave={() => setCursorType("default")}
            className="mb-10 max-w-2xl max-md:text-justify font-Ovo"
          >
            I am an experienced Frontend Developer with over a year of
            expertise, collaborating with prestigious organizations. Proficient
            in JavaScript, I build web and mobile frontend solutions using
            modern frameworks and best practices.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6 max-xl:flex-wrap max-w-3xl "
          >
            <TechStack />
            <EducationStack />
          </motion.ul>
          <motion.h4
            onMouseEnter={() => setCursorType("textNormal")}
            onMouseLeave={() => setCursorType("default")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mt-6 mb-3 text-gray-700 font-Ovo"
          >
            Tools I use
          </motion.h4>
          <ToolsList />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
