import Image, { StaticImageData } from "next/image";
import SkillSlider from "./SkillSlider";

type SkillCardProps = {
  icon: StaticImageData;
  blackIcon?: boolean;
  title: string;
  color: string;
  offsetColor: string;
  percentage: string;
};

const SkillCard = ({ title, icon, percentage, blackIcon }: SkillCardProps) => {
  return (
    <li className="border dark:border-gray-700 min-w-32 max-w-40 w-full mx-auto sm:w-40 rounded-lg overflow-hidden shadow-sm flex flex-col">
      <div className="min-h-20 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          className={`w-16 ${blackIcon && "dark:invert"}`}
        />
      </div>
      <div className="bg-gradient-to-br from-gray-50 dark:from-darkHover to-gray-100  px-4 py-1">
        <p className="text-sm text-gray-700 dark:text-white mb-3">{title}</p>
        <SkillSlider
          percentage={percentage}
          colorEnd="#61DAFB"
          colorStart="#61DA0B"
        />
      </div>
    </li>
  );
};

export default SkillCard;
