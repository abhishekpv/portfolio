import { toolsData } from "@/assets/assets";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const ToolCard = ({
  icon,
  title,
}: {
  icon: StaticImageData;
  title: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <li
      className="border w-full rounded-md border-gray-400 overflow-hidden cursor-pointer duration-500 max-w-28 py-3 relative hover:border-gray-600"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className={`aspect-square w-8 mx-auto duration-500 ${isHover ? "opacity-50" : "opacity-100"}`}
        src={icon}
        alt={title}
      />
      <p
        className={`w-full font-Outfit h-full absolute text-gray-700 flex items-center duration-700 bg-transparent backdrop-blur-sm  justify-center top-0 ${
          isHover ? "opacity-100 scale-100" : "opacity-0 scale-150"
        }`}
      >
        {title}
      </p>
    </li>
  );
};

const ToolsList = () => {
  return (
    <ul className="flex items-center justify-start flex-wrap gap-3 sm:gap-6 ml-1 max-w-3xl lg:max-w-lg xl:max-w-3xl">
      {toolsData.map((tool) => {
        return (
          <ToolCard key={tool.title} title={tool.title} icon={tool.icon} />
        );
      })}
    </ul>
  );
};

export default ToolsList;
