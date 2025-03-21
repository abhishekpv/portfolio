import { MouseContext } from "@/app/MouseProvider";
import { navItems } from "@/assets/assets";
import { useContext } from "react";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <>
      {navItems.map((item) => {
        return (
          <li key={item.href}>
            <a
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
              className={`font-Ovo text-black hover:text-gray-700 dark:text-white duration-200 ${item.class} `}
              onClick={onClick}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
