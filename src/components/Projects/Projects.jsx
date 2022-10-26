import React from 'react';
import ProjectCard from './ProjectCard';
import Loading from '../Loading';
import { getOrgProjects, getProjects } from '../../services/projects';
import { getMessage } from '../../helpers';
import useFetchAndLoadMore from '../../hooks/useFetchAndLoadMore';
import LoadMore from '../LoadMore';

const Projects = () => {
  const locale = getMessage(localStorage.market);
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

      {showLoadMore && <LoadMore loadMore={loadMore} />}
    </div>
  );
};

export default Projects;
