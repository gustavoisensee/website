import ProjectCard from './ProjectCard';
import Loading from '../../shared/Loading';
import { getOrgProjects, getProjects } from '../../../services/projects';
import { getMessage } from '../../../helpers';
import useFetchAndLoadMore from '../../../hooks/useFetchAndLoadMore';
import LoadMore from '../../shared/LoadMore';

const locale = getMessage();

const Projects = () => {
  const { loading, data, loadMore, showLoadMore } = useFetchAndLoadMore(() =>
    Promise.all([getOrgProjects(), getProjects()])
  );

  return (
    <div id='content'>
      <h2 className='text-2xl font-semibold my-4'>
        {locale.pages.projects.title}
      </h2>

      {loading && <Loading />}

      {data?.map((p, i) => (
        <ProjectCard key={`project-${i}`} {...p} />
      ))}

      {showLoadMore && <LoadMore onClick={loadMore} />}
    </div>
  );
};

export default Projects;
