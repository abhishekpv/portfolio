import { assets } from "@/assets/assets";
import Image from "next/image";

const EducationStack = () => {
  return (
    <li className="relative border border-gray-400 hover:border-gray-700 hover:-translate-y-1 hover:shadow-black duration-300 p-6 cursor-pointer rounded-xl max-w-80 mx-auto lg:m-0 w-full overflow-hidden">
      <Image className="w-7 mt-3" src={assets.edu_icon} alt="language-icon" />
      <h3 className="my-4 font-semibold text-gray-700">Education</h3>
      <p className="text-gray-600 text-sm">B.Tech in Computer Science</p>
    </li>
  );
};

export default EducationStack;
