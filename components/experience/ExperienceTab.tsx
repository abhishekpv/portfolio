import { experienceData } from "@/assets/assets";
import { Dispatch, SetStateAction } from "react";
import ExperienceTabCard from "./ExperienceTabCard";
import { motion } from "motion/react";

type ExperienceTabProps = {
  selectedCompany: number;
  setSelectedCompany: Dispatch<SetStateAction<number>>;
};

const ExperienceTab = ({
  selectedCompany,
  setSelectedCompany,
}: ExperienceTabProps) => {
  return (
    <div className="flex md:flex-col max-md:justify-center max-md:w-full max-md:overflow-x-auto md:min-h-80 mt-10 gap-6 md:gap-10 relative">
      {experienceData.map((company) => {
        return (
          <ExperienceTabCard
            key={company.companyId}
            selected={selectedCompany === company.companyId}
            company={company}
            setSelectedCompany={setSelectedCompany}
          />
        );
      })}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
          stiffness: 100,
        }}
        className="absolute -z-10 bg-gradient-to-r md:bg-gradient-to-b from-gray-100 max-md:via-gray-500 md:from-gray-500 to-gray-100 opacity-50 w-full md:w-0.5 h-0.5 md:h-full md:py-10 box-content  md:left-8 top-8 md:-top-10 rounded-full"
      ></motion.div>
    </div>
  );
};

export default ExperienceTab;
