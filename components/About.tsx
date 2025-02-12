import { assets } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div id='about' className="w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl overflow-hidden">
            <Image className="" src={assets.user_image} alt='profile-img'/>
        </div>
        <div className="flex-1">
            <p>
                I am a 
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
