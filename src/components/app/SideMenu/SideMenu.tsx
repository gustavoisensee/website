import cn from "classnames";

import Footer from "./components/Footer";
import SideMenuButton from "./components/SideMenuButton";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Menu from "./components/Menu";
import ThemeToggle from "./components/ThemeToggle";
import { useSideMenu } from "./hooks";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  useSideMenu();

  return (
    <div>
      <div className={styles.container}>
        <ThemeToggle />
        <div className={styles.buttonContainer}>
          <SideMenuButton />
        </div>
      </div>

      <div className={cn("sidebar translate-x-56", styles.sidebar)}>
        <Menu />
        <LanguageSwitcher />
        <Footer />
      </div>
    </div>
  );
};

export default SideMenu;
