import cn from 'classnames';
import Check from '../../components/svgs/Check';
import { getMessage } from '../../helpers';

const locale = getMessage();

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
          ({ period, company, companyImg, title, description }, i) => (
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
                  {companyImg && (
                    <div className='size-6 mr-2'>
                      <img src={companyImg} className='rounded-md border' />
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
