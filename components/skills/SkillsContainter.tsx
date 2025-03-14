import { skills } from "@/assets/assets";
import { StaticImageData } from "next/image";

type SkillCardProps={
    icon:StaticImageData;
    title:string;
    color:string;
    percentage:string;
}

const SkillCard=({color,icon,percentage,title}:SkillCardProps)=>{
    return <div className="border ">{title}</div>
}

const SkillsContainter = () => {
  return (
    <ul className="flex items-center justify-start flex-wrap gap-10 max-w-5xl mx-auto">
      {skills.map(({ icon, title,color,percentage }) => {
        return <SkillCard key={title} icon={icon} title={title} color={color} percentage={percentage} />;
      })}
    </ul>
  );
};

export default SkillsContainter;
