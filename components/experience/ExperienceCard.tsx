import { experienceData } from "@/assets/assets";
import PositionCardHeader from "./PositionCardHeader";
import PositionCardBody from "./PositionCardBody";
import { Fragment } from "react";

type ExperienceCardProps = {
  selectedCompany: number;
};

const ExperienceCard = ({ selectedCompany }: ExperienceCardProps) => {
  const company = experienceData.find((company) => {
    return company.companyId === selectedCompany;
  });
  return (
    <div className="min-h-96 border-2 border-gray-300 rounded-xl w-full max-w-xl bg-white">
      {company?.positions.map((position, index) => {
        return (
          <Fragment key={index}>
            <PositionCardHeader position={position} />
            <PositionCardBody responsobilities={position.responsobilities} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ExperienceCard;
