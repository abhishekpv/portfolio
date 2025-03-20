import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const techStack = [
  "Javascript",
  "HTML",
  "CSS",
  "Typescript",
  "Tailwind CSS",
  "ReactJS",
  "React Native",
];

const TechStackList = ({
  reverse,
  className,
}: {
  reverse?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`flex gap-2 items-center ${
        reverse ? "flex-col-reverse mt-8 " : "flex-col"
      } ${className}`}
    >
      {techStack.map((item) => {
        return (
          <p
            key={item}
            className="bg-gray-100 duration-200 dark:bg-darkHover/35 text-gray-400 dark:text-gray-600 whitespace-nowrap rounded-sm w-full text-center px-4 py-1.5"
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

const TechStack = () => {
  return (
    <motion.li
      whileInView={{ scale: 1 }}
      className="relative border border-gray-400 hover:border-gray-700 dark:hover:border-white dark:hover:bg-darkHover/25 hover:-translate-y-1 hover:shadow-black duration-300 p-6 cursor-pointer rounded-xl max-w-80 mx-auto lg:m-0 w-full pb-20 overflow-hidden "
    >
      <Image className="w-7 mt-3" src={assets.code_icon} alt="language-icon" />
      <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
        Tech stack
      </h3>
      <div className="absolute right-2 -z-10 -top-14 w-fit flex gap-2">
        <TechStackList />
        <TechStackList reverse={true} />
      </div>
    </motion.li>
  );
};

export default TechStack;
