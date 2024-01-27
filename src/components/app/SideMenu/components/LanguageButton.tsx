import { MouseEventHandler, ReactNode } from "react";

type Props = {
  active: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>
}
const LanguageButton = ({ active, children, onClick }: Props) => {
  const _active = active ? 'bg-slate-200 ' : '';

  return (
    <button
      className={`duration-200 hover:bg-indigo-500 hover:text-white p-2 rounded-md mr-1 ${_active}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LanguageButton;
