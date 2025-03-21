import { MouseContext } from "@/app/MouseProvider";
import { motion } from "motion/react";
import { useContext } from "react";

const icons = [
  {
    title: "GitHub",
    link: "https://github.com/abhishekpv",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-p-v",
  },
];

const SocialIcons = () => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <ul className="flex justify-center items-center gap-10 mt-4 sm:mt-0">
      {icons.map(({ link, title }, index) => {
        return (
          <motion.li
            key={index}
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
          >
            <a href={link} target="_blank">
              {title}
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
