import { ReactNode } from "react";

type Props = {
  active: boolean;
  href: string;
  children: ReactNode;
}

const MenuLink = ({ active, href, children }: Props) => {
  const _active = active ? 'bg-slate-200 ' : '';
  return (
    <a
      className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-500 hover:text-white ${_active}`}
      href={href}
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default MenuLink;
