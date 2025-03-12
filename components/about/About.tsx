import TechStack from "./TechStack";
import EducationStack from "./EducationStack";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ToolsList from "./ToolsList";
import SectionHeader from "../SectionHeader";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20 z-10">
      <SectionHeader heading="Introduction" subHeading="About me" />
      <div className="flex w-full justify-center flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 sm:min-w-72 rounded-3xl overflow-hidden">
          <Image
            className="sm:min-w-72"
            src={assets.user_image}
            alt="profile-img"
          />
        </div>
        <div className="fle">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced Frontend Developer with over a year of
            expertise, collaborating with prestigious organizations. Proficient
            in JavaScript, I build web and mobile frontend solutions using
            modern frameworks and best practices.
          </p>
          <ul className="flex gap-6 max-xl:flex-wrap max-w-3xl ">
            <TechStack />
            <EducationStack />
          </ul>
          <h4 className="mt-6 mb-3 text-gray-700 font-Ovo">Tools I use</h4>
          <ToolsList />
        </div>
      </div>
    </div>
  );
};

export default About;
