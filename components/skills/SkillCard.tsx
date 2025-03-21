import Image, { StaticImageData } from "next/image";
import SkillSlider from "./SkillSlider";
import { motion } from "motion/react";
import { useContext } from "react";
import { MouseContext } from "@/app/MouseProvider";

type SkillCardProps = {
  icon: StaticImageData;
  blackIcon?: boolean;
  index: number;
  title: string;
  color: string;
  offsetColor: string;
  percentage: string;
};

const SkillCard = ({
  title,
  icon,
  percentage,
  blackIcon,
  index,
}: SkillCardProps) => {
  const { setCursorType } = useContext(MouseContext);
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.01, duration: 0.4 }}
      className="border dark:border-gray-700 min-w-32 max-w-40 w-full mx-auto sm:w-40 rounded-lg overflow-hidden shadow-sm flex flex-col"
    >
      <div className="min-h-20 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          className={`w-16 ${blackIcon && "dark:invert"}`}
        />
      </div>
      <div className="bg-gradient-to-br from-gray-50 dark:from-darkHover to-gray-100  px-4 py-1">
        <p
          onMouseEnter={() => setCursorType("textNormal")}
          onMouseLeave={() => setCursorType("default")}
          className="text-sm text-gray-700 dark:text-white w-fit mb-3"
        >
          {title}
        </p>
        <SkillSlider
          percentage={percentage}
          colorEnd="#61DAFB"
          colorStart="#61DA0B"
        />
      </div>
    </motion.li>
  );
};

export default SkillCard;
