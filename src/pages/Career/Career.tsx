import { cx } from '../../helpers/cx';
import { getLocale } from '../../helpers';
import styles from './Career.module.css';

import adyenLogo from '../../assets/logos/adyen.webp';
import dashLogo from '../../assets/logos/dash.webp';
import labtransLogo from '../../assets/logos/labtrans.webp';
import mediamonksLogo from '../../assets/logos/mediamonks.webp';
import personioLogo from '../../assets/logos/personio.webp';
import prosusLogo from '../../assets/logos/prosus.webp';
import tdsaLogo from '../../assets/logos/tdsa.webp';
import youngcapitalLogo from '../../assets/logos/youngcapital.webp';

const locale = getLocale();

const imageMapping: Record<string, string> = {
  adyen: adyenLogo,
  dash: dashLogo,
  labtrans: labtransLogo,
  mediamonks: mediamonksLogo,
  personio: personioLogo,
  prosus: prosusLogo,
  tdsa: tdsaLogo,
  youngcapital: youngcapitalLogo,
};

export default function Career() {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4 text-gray-900 dark:text-gray-100">
        {locale.pages.career.title}
      </h2>
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {locale.pages.career.description_1}
      </p>
      <p className="text-base leading-relaxed pb-8 text-gray-700 dark:text-gray-300">
        {locale.pages.career.description_2}
      </p>

      <ul className={styles.timeline}>
        {locale.pages.career.jobs.map(
          ({ id, period, company, title, description }, i) => {
            const isEven = i % 2 === 0;

            return (
              <li key={i} className={styles.item}>
                <div className={styles.marker} aria-hidden="true">
                  <span className={styles.dot} />
                </div>
                <div
                  className={cx(
                    styles.body,
                    isEven ? styles.bodyLeft : styles.bodyRight
                  )}
                >
                  <div className={styles.companyRow}>
                    {imageMapping[id] && (
                      <img
                        src={imageMapping[id]}
                        className={styles.logo}
                        alt={`${company} logo`}
                        width={28}
                        height={28}
                        loading="lazy"
                      />
                    )}
                    <span className={styles.company}>{company}</span>
                  </div>
                  <time className={styles.period} dateTime={period}>
                    {period}
                  </time>
                  <h3 className={styles.role}>{title}</h3>
                  <p className={styles.description}>{description}</p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
