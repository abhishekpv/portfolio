import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import CompanyHeader from "./CompanyHeader";
import { motion } from "motion/react";

type ExperienceTabCardProps = {
  setSelectedCompany: Dispatch<SetStateAction<number>>;
  selected: boolean;
  company: {
    companyId: number;
    companyName: string;
    CompanyLogo: StaticImageData;
    startDate: string;
    companyLink: string;
    endDate: string;
  };
};

const ExperienceTabCard = ({
  company,
  setSelectedCompany,
  selected,
}: ExperienceTabCardProps) => {
  const handleClick = () => {
    setSelectedCompany(company.companyId);
  };
  return (
    <div
      className={`flex flex-col md:flex-row gap-2 max-md:items-center relative`}
      onClick={handleClick}
    >
      <div
        className={` px-1 py-1 ml-[6px] overflow-hidden h-fit duration-300 w-fit border-2 bg-white  border-gray-300 rounded-full ${
          selected ? "" : " scale-95"
        }`}
      >
        <Image
          className="w-10 min-w-10 aspect-square"
          src={company.CompanyLogo}
          alt={company.companyName}
        />
      </div>
      <div
        className={`duration-300 ${
          selected ? "opacity-100" : " scale-95 -translate-x-1 opacity-75"
        }`}
      >
        <CompanyHeader
          companyLink={company.companyLink}
          companyName={company.companyName}
          endDate={company.endDate}
          startDate={company.startDate}
        />
      </div>
      <motion.div
        initial={{ x: 70 }}
        whileInView={{ x: 0 }}
        transition={{ delay: 1, duration: 0.6, type: "tween" }}
        className={`left-full ml-2 h-0.5 w-24 hidden md:block  duration-500 top-4 bg-gradient-to-l from-gray-500 -z-10 to-transparent   absolute ${
          selected ? "" : "translate-x-28"
        }`}
      ></motion.div>
    </div>
  );
};

export default ExperienceTabCard;
