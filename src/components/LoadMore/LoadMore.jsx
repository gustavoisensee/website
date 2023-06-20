import React from 'react';
import { getMessage } from '../../helpers';

const LoadMore = ({ onClick, text }) => {
  const locale = getMessage();

  return (
    <div className='flex justify-center mb-2'>
      <button
        onClick={onClick}
        className='bg-transparent underline text-indigo-500 text-sm'
      >
        {text || locale.pages.load_more}
      </button>
    </div>
  );
};

export default LoadMore;