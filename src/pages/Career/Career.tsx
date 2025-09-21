import cn from 'classnames';
import Check from '../../components/svgs/Check';
import { getLocale } from '../../helpers';

// Import all logo images
import adyenLogo from '../../assets/logos/adyen.jpeg';
import dashLogo from '../../assets/logos/dash.jpeg';
import labtransLogo from '../../assets/logos/labtrans.jpeg';
import mediamonksLogo from '../../assets/logos/mediamonks.jpeg';
import personioLogo from '../../assets/logos/personio.jpeg';
import prosusLogo from '../../assets/logos/prosus.jpeg';
import tdsaLogo from '../../assets/logos/tdsa.jpeg';
import youngcapitalLogo from '../../assets/logos/youngcapital.jpeg';

const locale = getLocale();

const imageMapping = {
  adyen: adyenLogo,
  dash: dashLogo,
  labtrans: labtransLogo,
  mediamonks: mediamonksLogo,
  personio: personioLogo,
  prosus: prosusLogo,
  tdsa: tdsaLogo,
  youngcapital: youngcapitalLogo,
} as {
  [x: string]: string;
};

export default function Career() {
  return (
    <div>
      <h2 className='text-2xl font-semibold my-4'>
        {locale.pages.career.title}
      </h2>
      <p className='text-base leading-relaxed'>
        {locale.pages.career.description_1}
      </p>
      <p className='text-base leading-relaxed pb-8'>
        {locale.pages.career.description_2}
      </p>

      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        {locale.pages.career.jobs.map(
          ({ id, period, company, title, description }, i) => (
            <li key={i}>
              {i > 0 && <hr className='!w-0 !h-0' />}
              <div className='timeline-middle'>
                <Check className='text-indigo-500' />
              </div>
              <div
                className={cn(
                  '!mb-8',
                  i % 2 == 0
                    ? 'timeline-start text-start md:text-end'
                    : 'timeline-end text-start'
                )}
              >
                
                <div
                  className={cn(
                    'flex items-center',
                    i % 2 == 0
                      ? 'justify-start md:flex-row-reverse'
                      : 'justify-start'
                  )}
                >
                  {imageMapping[id] && (
                    <div className='size-7 mx-1'>
                      <img src={imageMapping[id] as string} className='rounded-md border' />
                    </div>
                  )}
                  <label className='mx-2 text-lg font-semibold'>{company}</label>
                </div>
                <time className='text-sm italic'>{period}</time>
                <div className='text-lg font-semibold py-1'>{title}</div>
                <div className='text-sm'>
                  {description}
                  <a
                    className='link-primary'
                    href='https://www.linkedin.com/in/gustavoisensee/details/experience/'
                    target='_blank'
                  >
                    {' '}
                    ...
                  </a>
                </div>
              </div>
              {i != locale.pages.career.jobs.length - 1 && <hr />}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
