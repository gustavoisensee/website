import { MouseEventHandler } from 'react';
import { getLocale } from '../../../helpers';

const locale = getLocale();

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

const LoadMore = ({ onClick, text }: Props) => (
  <div className='flex justify-center mb-2'>
    <button
      onClick={onClick}
      className='bg-transparent underline text-indigo-500 text-sm'
    >
      {text || locale.pages.load_more}
    </button>
  </div>
);

export default LoadMore;
