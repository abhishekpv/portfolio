import { experienceData } from "@/assets/assets";
import ExperienceCard from "./ExperienceCard";
import ExperienceTab from "./ExperienceTab";
import { useState } from "react";

const ExperienceBody = () => {
  const [selectedCompany, setSelectedCompany] = useState(
    experienceData[0].companyId
  );
  return (
    <div className="flex w-full max-w-5xl mx-auto justify-center items-start flex-col md:flex-row gap-20 my-10 md:my-20">
      <ExperienceTab
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
      <ExperienceCard selectedCompany={selectedCompany} />
    </div>
  );
};

export default ExperienceBody;
