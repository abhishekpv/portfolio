import { MouseContext } from "@/app/MouseProvider";
import { motion } from "motion/react";
import { useContext } from "react";

type PositionCardHeaderProps = {
  position: {
    position: string;
    startDate: string;
    endDate: string;
    duration: string;
    location: string;
    locationHref: string;
    responsobilities: string[];
  };
};

const PositionCardHeader = ({ position }: PositionCardHeaderProps) => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <div className="flex items-center justify-between w-full p-5 border-b dark:border-gray-600">
      <h3
        onMouseEnter={() => setCursorType("textNormal")}
        onMouseLeave={() => setCursorType("default")}
        className="text-xl"
      >
        {position.position}
      </h3>
      <div className="text-xs text-gray-700 dark:text-white/75 text-right">
        <p
          onMouseEnter={() => setCursorType("textNormal")}
          onMouseLeave={() => setCursorType("default")}
          className="mb-1"
        >
          {position.startDate + " - " + position.endDate}
        </p>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          onMouseEnter={() => setCursorType("pointer")}
          onMouseLeave={() => setCursorType("default")}
          href={position.locationHref}
          target="_blank"
          className="block origin-right"
        >
          {position.location}
        </motion.a>
      </div>
    </div>
  );
};

export default PositionCardHeader;
