import FooterHeader from "./FooterHeader";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="mt-20">
      <FooterHeader />
      <div className="text-center sm:flex items-center justify-between gap-4 mt-12 py-6 border-t border-gray-400 mx-[10%]">
        <p>&copy; {new Date().getFullYear()} Abhishek. All rights reserved.</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Footer;
