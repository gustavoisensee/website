import profile from "../../../assets/images/profile.jpg";
import donut from "../../../assets/images/donut.png";
import { getLocale } from "../../../helpers";
import styles from "./Header.module.css";

const locale = getLocale();

const Header = () => (
  <div className={styles.header}>
    <img className={styles.profilePicture} src={profile} alt="" />
    <div className={styles.titleContainer}>
      <h1 className="text-3xl leading-relaxed font-bold">Gustavo Isensee</h1>
      <div className={styles.title}>
        <h2 className="text-center leading-relaxed">{locale.content.title}</h2>
        <img className={styles.icon} src={donut} alt="" loading="lazy" />
      </div>
    </div>
  </div>
);

export default Header;
