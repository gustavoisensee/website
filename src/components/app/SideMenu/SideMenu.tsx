import cn from 'classnames';

import Footer from './components/Footer';
import SideMenuButton from './components/SideMenuButton';
import LanguageSwitcher from './components/LanguageSwitcher';
import Menu from './components/Menu';
import ThemeToggle from './components/ThemeToggle';
import { useSideMenu } from './hooks';
import styles from './SideMenu.module.css';

const SideMenu = () => {
  useSideMenu();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.themeToggleContainer}>
          <ThemeToggle />
        </div>
        <div className={styles.buttonContainer}>
          <SideMenuButton />
        </div>
      </div>

      <nav className={cn('sidebar translate-x-56', styles.sidebar)} aria-label="Main navigation">
        <Menu />
        <LanguageSwitcher />
        <Footer />
      </nav>
    </div>
  );
};

export default SideMenu;
