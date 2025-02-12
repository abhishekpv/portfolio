import { assets } from "@/assets/assets";
import Image from "next/image";
import TechStack from "./TechStack";
import EducationStack from "./EducationStack";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20 z-10">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl overflow-hidden">
          <Image className="" src={assets.user_image} alt="profile-img" />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced Frontend Developer with over a year of
            expertise, collaborating with prestigious organizations. Proficient
            in JavaScript, I build web and mobile frontend solutions using
            modern frameworks and best practices.
          </p>
          <ul className="flex ">
            <TechStack />
            <EducationStack/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
