import { skills } from "@/assets/assets";
import SkillCard from "./SkillCard";
import { useEffect, useMemo, useState } from "react";

const SkillsContainter = () => {
  const [isShowMore, setIsShowMore] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const formattedSkills = useMemo(() => {
    if (isShowMore) return skills;
    return skills.slice(0, 6);
  }, [isShowMore]);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setIsShowMore(false);
    } else {
      setIsShowMore(true);
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ul className="grid xl:grid-cols-5 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 flex-wrap gap-5 max-w-6xl mx-auto">
        {formattedSkills.map(
          ({ icon, title, color, percentage, offsetColor }) => {
            return (
              <SkillCard
                key={title}
                icon={icon}
                title={title}
                color={color}
                offsetColor={offsetColor}
                percentage={percentage}
              />
            );
          }
        )}
      </ul>
      <button
        className="w-max mx-auto mt-10 md:hidden py-1 px-8 flex items-center justify-between gap-2 bg-white dark:bg-transparent border dark:text-white dark:border-white/50 duration-300 text-black rounded-full"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </button>
    </>
  );
};

export default SkillsContainter;
