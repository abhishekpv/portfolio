import React from "react";
import ExperienceBody from "./ExperienceBody";
import SectionHeader from "../SectionHeader";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full px-5 md:px-[12%] py-20 scroll-mt-20 z-10"
    >
      <SectionHeader
        heading="Professional Journey"
        subHeading="Experience"
        description="Bringing ideas to life through impactful development and real-world experience."
      />
      <ExperienceBody />
    </div>
  );
};

export default Experience;
