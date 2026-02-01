import ProjectCard from '../../components/projects/ProjectCard';
import Loading from '../../components/shared/Loading';
import { getOrgProjects, getProjects } from '../../services/projects';
import { getLocale } from '../../helpers';
import useFetchAndLoadMore from '../../hooks/useFetchAndLoadMore';
import LoadMore from '../../components/shared/LoadMore';
import { ProjectType } from '../../types';

const locale = getLocale();

const Projects = () => {
  const { loading, data, loadMore, showLoadMore } = useFetchAndLoadMore('projects', () =>
    Promise.all([getOrgProjects(), getProjects()]),
  );

  return (
    <div id="content">
      <h2 className="text-2xl font-semibold my-4 text-gray-900 dark:text-gray-100">
        {locale.pages.projects.title}
      </h2>

      {loading && <Loading />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(data as Array<ProjectType>)?.map?.((p, i) => (
          <ProjectCard key={`project-${i}`} project={p} />
        ))}
      </div>

      {showLoadMore && <LoadMore onClick={loadMore} className="mt-4" />}
    </div>
  );
};

export default Projects;
