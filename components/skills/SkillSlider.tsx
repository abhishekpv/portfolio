import React from "react";

interface SkillSliderProps {
  percentage: string;
  colorStart: string;
  colorEnd: string;
}

const SkillSlider = ({
  percentage,
  colorStart,
  colorEnd,
}: SkillSliderProps) => {
  return (
    <div className="w-full border-[0.5px] dark:border-gray-700 rounded overflow-hidden my-2">
      <div
        className="h-1 rounded-full"
        style={{
          width: percentage,
          background: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
        }}
      ></div>
    </div>
  );
};

export default SkillSlider;
