import React from "react";
import SectionHeader from "../SectionHeader";
import SkillsContainter from "./SkillsContainter";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full px-[12%] py-20 scroll-mt-20 z-10 min-h-screen"
    >
      <SectionHeader
        heading="What I Bring to the Table"
        subHeading="Skills"
        description="Crafting seamless and high-performance web experiences with modern
        technologies."
      />
      <SkillsContainter />
    </div>
  );
};

export default Skills;
