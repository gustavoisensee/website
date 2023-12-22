import React from 'react';
import cn from 'classnames';

import Footer from './components/Footer';
import SideMenuButton from './components/SideMenuButton';
import LanguageSwitcher from './components/LanguageSwitcher';
import Menu from './components/Menu';
import { useSideMenu } from './hooks';

const SideMenu = () => {
  useSideMenu();

  return (
    <div>
      <div
        className={cn(
          'fixed right-0 top-0 bg-gray-100',
          'text-gray-800 h-fit rounded-bl-md z-10'
        )}
      >
        <SideMenuButton />
      </div>

      <div
        className={cn(
          'fixed shadow-lg top-0 right-0 translate-x-56 h-screen',
          'sidebar bg-slate-50 text-gray-900 py-7 px-2',
          'inset-y-0 transform transition duration-200 ease-in-out z-10'
        )}
      >
        <Menu />
        <LanguageSwitcher />
        <Footer />
      </div>
    </div>
  );
};

export default SideMenu;
