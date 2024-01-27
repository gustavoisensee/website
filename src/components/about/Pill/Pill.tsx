import cn from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
};

const Pill = ({ children, className }: Props) => (
  <div
    className={cn(
      'flex align-middle justify-center',
      'rounded-2xl max-w-fit px-3 py-1 mr-2 mb-2',
      'duration-200 border-2 text-gray-700 hover:text-white',
      className
    )}
  >
    <span className='text-sm font-medium'>{children}</span>
  </div>
);

export default Pill;
