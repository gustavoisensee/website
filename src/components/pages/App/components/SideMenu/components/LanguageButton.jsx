import React from 'react';

const LanguageButton = ({ active, children, onClick }) => {
  const _active = active ? 'bg-slate-200 ' : '';

  return (
    <button className={`duration-200 hover:bg-indigo-500 hover:text-white p-2 rounded-md mr-1 ${_active}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default LanguageButton;