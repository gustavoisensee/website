import { cx } from '../../../helpers/cx';

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
    <>
      <div className={styles.container}>
        <div className={styles.themeToggleContainer}>
          <ThemeToggle />
        </div>
        <div className={styles.buttonContainer}>
          <SideMenuButton />
        </div>
      </div>
      <nav
        className={cx('sidebar translate-x-56', styles.sidebar)}
        aria-label="Side navigation"
      >
        <Menu />
        <LanguageSwitcher />
        <Footer />
      </nav>
    </>
  );
};

export default SideMenu;
