import React from 'react';

const PillGroup = ({ title, children }) => (
  <div className='mt-6'>
    <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
    {children}
  </div>
);

export default PillGroup;
