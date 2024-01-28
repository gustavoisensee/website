import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { ProjectType } from '../../../types';

dayjs.extend(localizedFormat);

type Props = {
  project: ProjectType
}

const ProjectCard = ({ project }: Props) => (
  <div className='flex flex-col rounded-md shadow-md hover:shadow-xl transition-all my-5 p-4'>
    <h2 className='underline text-xl mb-2 font-semibold'>
      <a href={project.html_url} target='_blank' rel='noopener noreferrer'>
        {project.full_name}
      </a>
    </h2>
    <p className='mb-1'>{project.description}</p>
    <a
      href={project.homepage}
      target='_blank'
      rel='noopener noreferrer'
      className='text-indigo-500 mb-1'
    >
      {project.homepage}
    </a>
    <div>
      <span className='italic text-sm'>
        Last pushed at {dayjs(project.pushed_at).format('LLL')}
      </span>
    </div>
  </div>
);

export default ProjectCard;
