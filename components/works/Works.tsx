import React from "react";
import WorkContainer from "./WorkContainer";

const Works = () => {
  return (
    <div
      id="works"
      className="w-full px-[12%] py-20 scroll-mt-20 z-10 min-h-screen"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Bringing Ideas to Life
      </h4>
      <h2 className="text-center text-5xl font-Ovo">Works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my development portfolio! Explore a collection of projects
        showcasing my expertise in front-end development.
      </p>
      <WorkContainer />
    </div>
  );
};

export default Works;
