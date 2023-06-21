import { getMessage } from '../../../helpers';

const locale = getMessage();

const LoadMore = ({ onClick, text }) => (
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
