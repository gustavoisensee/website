import React from 'react';

const MenuLink = ({ active, href, children }) => {
  const _active = active ? 'bg-gray-100 bg-opacity-40 ' : '';
  return (
    <a
      className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 ${_active}`}
      href={href}
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default MenuLink;
