import React from 'react';
import { getMessage } from '../../helpers';

const Projects = ({ loadMore }) => {
  const locale = getMessage(localStorage.market);

  return (
    <div className='flex justify-center mb-4'>
      <button
        onClick={loadMore}
        className='bg-transparent underline text-indigo-500'
      >
        {locale.pages.load_more}
      </button>
    </div>
  );
};

export default Projects;
