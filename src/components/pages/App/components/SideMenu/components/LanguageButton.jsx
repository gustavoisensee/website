const LanguageButton = ({ active, children, onClick }) => {
  const _active = active ? 'bg-gray-300 bg-opacity-20' : '';

  return (
    <button className={`duration-200 hover:bg-blue-700 p-2 rounded-md mr-1 ${_active}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default LanguageButton;