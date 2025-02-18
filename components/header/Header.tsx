import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div
      id="top"
      className="w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <div className="w-32 aspect-square overflow-hidden rounded-full">
        <Image
          className="w-32 -mt-6"
          src={assets.user_image}
          alt="profile-img"
        />
      </div>
      <h3 className="text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I am Abhishek P V
      </h3>
      <h1 className="text-3xl sm:text-6xl font-Ovo">frontend web developer</h1>
      <p className="max-w-2xl mx-auto font-Ovo px-1">
        I am a frontend developer from Kerala, India, with over a year of
        experience building dynamic and user-friendly web applications.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-white bg-black text-white flex items-center gap-2"
        >
          connect with me
          <Image
            src={assets.right_arrow_white}
            className="w-4"
            alt="right-arrow"
          />
        </a>
        <a
          href="/abhishek-sde-cv.pdf"
          download
          className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            src={assets.download_icon}
            className="w-4"
            alt="download-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
