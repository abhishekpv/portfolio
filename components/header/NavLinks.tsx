import { navItems } from "@/assets/assets";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      {navItems.map((item) => {
        return (
          <li key={item.href}>
            <a
              className={`font-Ovo hover:text-gray-700 duration-200 ${item.class} `}
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

export default NavLinks