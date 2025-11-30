import { getLocale } from "../../../../helpers";
import { hashtags } from "../../../../consts";
import useHash from "../../../../hooks/useHash";
import MenuLink from "./MenuLink";
import styles from "../SideMenu.module.css";

const locale = getLocale();

const menus = [
  { hashName: hashtags.about, text: locale.hashtags.about },
  { hashName: hashtags.projects, text: locale.hashtags.projects },
  { hashName: hashtags.blog, text: locale.hashtags.blog },
  { hashName: hashtags.career, text: locale.hashtags.career },
];

const Menu = () => {
  const hash = useHash();

  return (
    <ul role="menu" aria-label="Navigation menu">
      {menus.map(({ hashName, text }) => (
        <li key={hashName} className={styles.menuItem} role="none">
          <MenuLink active={hash.includes(hashName)} href={hashName}>
            {text}
          </MenuLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
