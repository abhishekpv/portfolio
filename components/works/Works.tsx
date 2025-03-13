import React from "react";
import WorkContainer from "./WorkContainer";
import SectionHeader from "../SectionHeader";

const Works = () => {
  return (
    <div
      id="works"
      className="w-full px-[10%] py-20 scroll-mt-20 z-10 min-h-screen"
    >
      <SectionHeader
        heading="Bringing Ideas to Life"
        subHeading="Works"
        description="Welcome to my development portfolio! Explore a collection of projects showcasing my expertise in front-end development."
      />
      <WorkContainer />
    </div>
  );
};

export default Works;
