import { navItems } from "@/assets/assets";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      {navItems.map((item) => {
        return (
          <li key={item.href}>
            <a
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

export default NavLinks