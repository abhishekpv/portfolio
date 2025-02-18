import { assets } from "@/assets/assets";
import Image from "next/image";
type CompanyHeaderProps = {
  companyName: string;
  startDate: string;
  companyLink: string;
  endDate: string;
};
const CompanyHeader = ({
  companyLink,
  startDate,
  companyName,
  endDate,
}: CompanyHeaderProps) => {
  return (
    <>
      <div className="flex text-xl max-md:text-center text-nowrap items-center gap-2">
        <h3>{companyName}</h3>
        <a
          className="hidden md:block hover:scale-110"
          href={companyLink}
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Image
            className="w-3 min-w-3"
            alt={"open link"}
            src={assets.open_link_black}
          />
        </a>
      </div>
      <p className="text-xs mt-1">{startDate + " - " + endDate}</p>
      <a
        className="md:hidden text-xs  hover:scale-110"
        href={companyLink}
        target="_blank"
        onClick={(e) => {
          e.stopPropagation();
        }}
      > Go to website 
        <Image
          className="w-3 min-w-3 -mt-0.5 ml-2 inline"
          alt={"open link"}
          src={assets.open_link_black}
        />
      </a>
    </>
  );
};

export default CompanyHeader;
