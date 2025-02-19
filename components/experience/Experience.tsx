import React from "react";
import ExperienceBody from "./ExperienceBody";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full px-5 md:px-[12%] py-20 scroll-mt-20 z-10"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Professional Journey
      </h4>
      <h2 className="text-center text-5xl font-Ovo">Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Bringing ideas to life through impactful development and real-world
        experience.
      </p>
      <ExperienceBody />
    </div>
  );
};

export default Experience;
