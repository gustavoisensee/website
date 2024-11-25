import cn from 'classnames';
import Check from '../../components/svgs/Check';
import { getLocale } from '../../helpers';

const locale = getLocale();

const url = 'https://media.licdn.com/dms/image/v2';
const path = 'company-logo_100_100/company-logo_100_100/0';
const imageMapping = {
  personio: `${url}/D4E0BAQHqZToSLhjV9Q/${path}/1666252443857/personio_logo?e=1740614400&v=beta&t=WB25oyhHAfclRNr09BLdYLzK9qrtqKjjXWEx3-2yk88`,
  dash: `${url}/C4D0BAQHccKUtwO6pVA/${path}/1645699712536?e=1740614400&v=beta&t=-RQWZqk54ofvzavFGCjwgZquORIRq_hUie4_AT8w5DQ`,
  adyen: `${url}/D4E0BAQGCuaSq8TqalA/${path}/1664880076052/adyen_logo?e=1740614400&v=beta&t=oGBddpGUJZ-93AZSVCPjTcZoEczRgh8C1yONk3eb3Xc`,
  youngcapital: `${url}/C4D0BAQESPhY8jIyzaQ/${path}/1646119963896/youngcapital_logo?e=1740614400&v=beta&t=cwqO7fMMRP9tjcVvQuuqOtS_0Q8MpaIfEruQE2Erjyk`,
  mediamonks: `${url}/D560BAQEI-gxFLQF3nQ/${path}/1721303718951/mediamonks_logo?e=1740614400&v=beta&t=LKJhxSt4GcIPX5t_Nmaj7ysYPMXOR5cfIemNWArgStM`,
  labtrans: `${url}/C4D0BAQHu818Q8LwIBw/${path}/1630576232764/labtrans_logo?e=1740614400&v=beta&t=W-QjYUG2OLhUBwkAWqi-85dnENocrGtGQa305EdVBEA`,
  tdsa: `${url}/D4D0BAQHiM_GFY4nEhA/${path}/1730820263623/tdsa_sistemas_logo?e=1740614400&v=beta&t=Q2ZC7zWULsjJlFNXwxyabDhwY_thC7jZpOHbAEK8Q5w`,
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
                <time className='text-sm italic'>{period}</time>
                <div
                  className={cn(
                    'text-sm italic flex items-center',
                    i % 2 == 0
                      ? 'justify-start md:justify-end'
                      : 'justify-start'
                  )}
                >
                  {imageMapping[id] && (
                    <div className='size-6 mr-2'>
                      <img src={imageMapping[id] as string} className='rounded-md border' />
                    </div>
                  )}
                  <label>{company}</label>
                </div>
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
