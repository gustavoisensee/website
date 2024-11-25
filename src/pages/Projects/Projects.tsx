import ProjectCard from '../../components/projects/ProjectCard';
import Loading from '../../components/shared/Loading';
import { getOrgProjects, getProjects } from '../../services/projects';
import { getLocale } from '../../helpers';
import useFetchAndLoadMore from '../../hooks/useFetchAndLoadMore';
import LoadMore from '../../components/shared/LoadMore';
import { ProjectType } from '../../types';

const locale = getLocale();

const Projects = () => {
  const { loading, data, loadMore, showLoadMore } = useFetchAndLoadMore(
    'projects',
    () => Promise.all([getOrgProjects(), getProjects()])
  );

  return (
    <div id='content'>
      <h2 className='text-2xl font-semibold my-4'>
        {locale.pages.projects.title}
      </h2>

      {loading && <Loading />}

      {(data as Array<ProjectType>)?.map?.((p, i) => (
        <ProjectCard key={`project-${i}`} project={p} />
      ))}

      {showLoadMore && <LoadMore onClick={loadMore} />}
    </div>
  );
};

export default Projects;
