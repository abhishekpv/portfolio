import { assets } from "@/assets/assets";
import Image from "next/image";

const EducationStack = () => {
  return (
    <li className="relative border w-80 pb-20">
      <Image className="" src={assets.edu_icon} alt="language-icon" />
      <h3 className="">Education</h3>
      <p>B.Tech in Computer Science</p>
    </li>
  );
};

export default EducationStack;
