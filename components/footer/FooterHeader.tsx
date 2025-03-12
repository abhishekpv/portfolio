import { assets } from "@/assets/assets";
import Image from "next/image";

const FooterHeader = () => {
  return (
    <>
      <a
        href="#top"
        className="w-fit text-4xl mx-auto block text-center cursor-pointer whitespace-nowrap font-medium mb-2"
      >
        Abhishek<span className="text-pink-600 text-4xl">.</span>
      </a>
      <div className="w-max flex items-center justify-center mx-auto gap-2">
        <Image src={assets.mail_icon} alt="mail-icon" className="w-6" />
        pvabhishek26@gmail.com
      </div>
    </>
  );
};

export default FooterHeader;
