import { assets } from "@/assets/assets";
import Image from "next/image";

const techStack = [
  "Javascript",
  "HTML",
  "CSS",
  "Typescript",
  "Tailwind CSS",
  "ReactJS",
  "React Native",
];

const TechStackList = ({
  reverse,
  className,
}: {
  reverse?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`flex gap-2 items-center ${
        reverse ? "flex-col-reverse mt-8" : "flex-col"
      } ${className}`}
    >
      {techStack.map((item) => {
        return (
          <p
            key={item}
            className="bg-gray-100 whitespace-nowrap rounded-sm w-full text-center px-4 py-1.5"
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

const TechStack = () => {
  return (
    <li className="relative border w-80 pb-20 overflow-hidden">
      <Image className="" src={assets.code_icon} alt="language-icon" />
      <h3 className="">Tech stack</h3>
      <div className="absolute right-2 -z-10 -top-14 w-fit flex gap-2">
        <TechStackList />
        <TechStackList reverse={true} />
      </div>
    </li>
  );
};

export default TechStack;
