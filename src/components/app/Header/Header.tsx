import profile from '../../../assets/images/profile.jpg';
import donut from '../../../assets/images/donut.png';
import { getLocale } from '../../../helpers';
import styles from './Header.module.css';

const locale = getLocale();

const Header = () => (
  <header className={styles.header}>
    <img className={styles.profilePicture} src={profile} alt="Gustavo Isensee profile picture" />
    <div className={styles.titleContainer}>
      <h1 className="text-3xl leading-relaxed font-bold">Gustavo Isensee</h1>
      <div className={styles.title}>
        <h2 className="text-center leading-relaxed text-white">{locale.content.title}</h2>
        <img className={styles.icon} src={donut} alt="Donut icon" loading="lazy" />
      </div>
    </div>
  </header>
);

export default Header;
