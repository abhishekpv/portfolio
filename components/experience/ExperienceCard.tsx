import { experienceData } from "@/assets/assets";
import PositionCardHeader from "./PositionCardHeader";
import PositionCardBody from "./PositionCardBody";
import { Fragment } from "react";
import { motion } from "motion/react";

type ExperienceCardProps = {
  selectedCompany: number;
};

const ExperienceCard = ({ selectedCompany }: ExperienceCardProps) => {
  const company = experienceData.find((company) => {
    return company.companyId === selectedCompany;
  });
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="min-h-96 border-2 border-gray-300 rounded-xl w-full max-w-xl bg-white dark:border-gray-600 dark:bg-[#260d3a]"
    >
      {company?.positions.map((position, index) => {
        return (
          <Fragment key={index}>
            <PositionCardHeader position={position} />
            <PositionCardBody responsobilities={position.responsobilities} />
          </Fragment>
        );
      })}
    </motion.div>
  );
};

export default ExperienceCard;
