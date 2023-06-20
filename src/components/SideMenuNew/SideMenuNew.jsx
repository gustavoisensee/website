import React, { useEffect } from 'react';
import Footer from '../Footer';
import locales from '../../enum/locales';
import { getMessage } from '../../helpers';
import { hashtags } from '../../consts';
import useHash from '../../hooks/useHash';

const Link = ({ active, href, children }) => {
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

const Button = ({ active, children, onClick }) => {
  const _active = active ? 'bg-gray-300 bg-opacity-20' : '';

  return (
    <button className={`duration-200 hover:bg-blue-700 p-2 rounded-md mr-1 ${_active}`} onClick={onClick}>
      {children}
    </button>
  );
};

const SideMenuNew = () => {
  const hash = useHash();
  console.log(hash);
  const locale = getMessage();

  const handleChangeLocale = (_locale) => {
    localStorage.locale = _locale;
    document.location.reload();
  };

  useEffect(() => {
    const btn = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');

    btn.addEventListener('click', () => {
      sidebar.classList.remove('translate-x-56');
    });

    document.addEventListener('click', (event) => {
      if (!btn.contains(event.target)) {
        sidebar.classList.add('translate-x-56');
        return;
      }
    });
  }, []);

  return (
    <div className='fixed right-0 top-0'>
      <div className='bg-gray-100 text-gray-800 w-fit absolute top-0 right-0 rounded-bl-md'>
        <button className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'>
          <svg
            className='h-5 w-5'
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
      </div>

      <div className='translate-x-56 w-56 h-screen sidebar bg-indigo-500 text-white py-7 px-2 inset-y-0 transform transition duration-200 ease-in-out'>
        <ul>
          <li>
            <Link active={hash.includes(hashtags.about)} href={hashtags.about}>
              {locale.hashtags.about}
            </Link>
          </li>
          <li>
            <Link
              active={hash.includes(hashtags.projects)}
              href={hashtags.projects}
            >
              {locale.hashtags.projects}
            </Link>
          </li>
          <li>
            <Link active={hash.includes(hashtags.blog)} href={hashtags.blog}>
              {locale.hashtags.blog}
            </Link>
          </li>
        </ul>
        <div className='flex justify-center mt-4 px-2 pt-4 border-t-2 border-opacity-5'>
          <Button
            active={localStorage.locale === locales.PT_BR}
            onClick={() => handleChangeLocale(locales.PT_BR)}
          >
            {locale.content.portuguese}
          </Button>

          <Button
            active={localStorage.locale === locales.EN_US}
            onClick={() => handleChangeLocale(locales.EN_US)}
          >
            {locale.content.english}
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SideMenuNew;
