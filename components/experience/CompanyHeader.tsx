import { assets } from "@/assets/assets";
import Image from "next/image";
import { MouseContext } from "@/app/MouseProvider";
import { motion } from "motion/react";
import { useContext } from "react";

type CompanyHeaderProps = {
  companyName: string;
  startDate: string;
  companyLink: string;
  endDate: string;
};
const CompanyHeader = ({
  companyLink,
  startDate,
  companyName,
  endDate,
}: CompanyHeaderProps) => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <>
      <div className="flex text-xl max-md:text-center text-nowrap items-center gap-2">
        <h3
          onMouseEnter={() => setCursorType("textNormal")}
          onMouseLeave={() => setCursorType("default")}
          className="w-fit"
        >
          {companyName}
        </h3>
        <motion.a
          onMouseEnter={() => setCursorType("pointer")}
          onMouseLeave={() => setCursorType("default")}
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ rotate: 360, scale: 1.5 }}
          className="hidden md:flex items-center w-fit justify-center hover:scale-110"
          href={companyLink}
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Image
            className="w-3 min-w-3 dark:hover"
            alt={"open link"}
            src={assets.open_link_black}
          />
        </motion.a>
      </div>
      <p
        onMouseEnter={() => setCursorType("textNormal")}
        onMouseLeave={() => setCursorType("default")}
        className="text-xs text-nowrap mt-1"
      >
        {startDate + " - " + endDate}
      </p>
      <a
        className="md:hidden text-xs max-md:ml-1  hover:scale-110"
        href={companyLink}
        target="_blank"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Go to website
        <Image
          className="w-3 min-w-3 -mt-0.5 ml-2 inline"
          alt={"open link"}
          src={assets.open_link_black}
        />
      </a>
    </>
  );
};

export default CompanyHeader;
