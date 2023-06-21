import React from 'react';

const SideMenuButton = () => (
  <button className='mobile-menu-button p-3 focus:outline-none focus:bg-gray-200'>
    <svg
      className='h-7 w-7'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  </button>
);

export default SideMenuButton;
