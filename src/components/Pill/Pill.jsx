import React from 'react';

const Pill = ({ children, className }) => (
  <div
    className={`${className} rounded-2xl shadow-md max-w-fit px-3 py-2 mr-2 mb-2 flex align-middle justify-center`}
    // style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.14)' }}
  >
    <span className='text-gray-800 text-sm font-medium'>{children}</span>
  </div>
);

export default Pill;
