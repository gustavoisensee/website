const Pill = ({ children, className }) => (
  <div
    className={`${className} rounded-2xl shadow-md max-w-fit px-3 py-2 mr-2 mb-2 flex align-middle justify-center`}
  >
    <span className='text-gray-700 text-sm font-medium'>{children}</span>
  </div>
);

export default Pill;
