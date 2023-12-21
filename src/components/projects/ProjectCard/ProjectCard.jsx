import dayjs from 'dayjs';

const ProjectCard = ({
  full_name,
  description,
  html_url,
  homepage,
  pushed_at
}) => (
  <div className='flex flex-col rounded-md shadow-md hover:shadow-xl transition-all my-5 p-4'>
    <h2 className='underline text-xl mb-2 font-semibold'>
      <a href={html_url} target='_blank' rel='noopener noreferrer'>
        {full_name}
      </a>
    </h2>
    <p className='mb-1'>{description}</p>
    <a
      href={homepage}
      target='_blank'
      rel='noopener noreferrer'
      className='text-indigo-500 mb-1'
    >
      {homepage}
    </a>
    <div>
      <span className='italic text-sm'>
        Last pushed at {dayjs(pushed_at).format('LLL')}
      </span>
    </div>
  </div>
);

export default ProjectCard;
