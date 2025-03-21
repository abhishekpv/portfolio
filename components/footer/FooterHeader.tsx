import { MouseContext } from "@/app/MouseProvider";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useContext } from "react";

const FooterHeader = () => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <>
      <a
        onMouseEnter={() => setCursorType("pointer")}
        onMouseLeave={() => setCursorType("default")}
        href="#top"
        className="w-fit text-4xl mx-auto block text-center whitespace-nowrap font-medium mb-2"
      >
        Abhishek<span className="text-pink-600 text-4xl">.</span>
      </a>
      <div
        onMouseEnter={() => setCursorType("textNormal")}
        onMouseLeave={() => setCursorType("default")}
        className="w-max flex items-center justify-center mx-auto gap-2"
      >
        <Image
          onMouseEnter={() => setCursorType("default")}
          onMouseLeave={() => setCursorType("textNormal")}
          src={assets.mail_icon}
          alt="mail-icon"
          className="w-6"
        />
        pvabhishek26@gmail.com
      </div>
    </>
  );
};

export default FooterHeader;
