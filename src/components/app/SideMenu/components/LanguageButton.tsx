import { MouseEventHandler, ReactNode } from 'preact/compat';

type Props = {
  active: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
const LanguageButton = ({ active, children, onClick }: Props) => {
  const _active = active
    ? 'bg-slate-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold'
    : 'text-gray-700 dark:text-gray-300';

  return (
    <button
      type="button"
      className={`duration-200 hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:text-white p-2 rounded-md mr-1 transition-colors ${_active}`}
      onClick={onClick}
      aria-pressed={active}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};

export default LanguageButton;
