import { ReactNode } from "react";

type Props = {
  active: boolean;
  href: string;
  children: ReactNode;
};

const MenuLink = ({ active, href, children }: Props) => {
  const _active = active
    ? "bg-slate-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold"
    : "text-gray-700 dark:text-gray-300";

  return (
    <a
      className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:text-white ${_active}`}
      href={href}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default MenuLink;
