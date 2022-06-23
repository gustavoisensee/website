import React, { useEffect, useState } from 'react';
import chunk from 'lodash.chunk';
import ProjectCard from './ProjectCard';
import Loading from '../Loading';
import { getProjects } from '../../services/projects';
import { getMessage, scrollToTheBottom } from '../../helpers';

const Projects = () => {
  const [chunks, setChunks] = useState({
    index: 0,
    total: 0,
    allChunks: [],
  });
  const locale = getMessage(localStorage.market);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMore = () => {
    if (chunks.index < chunks.total) {
      setProjects([...projects, ...chunks.allChunks[chunks.index + 1]]);
      setChunks({ ...chunks, index: chunks.index + 1 });
      setTimeout(scrollToTheBottom, 200);
    }
  };

  const getData = async () => {
    const data = await getProjects();
    const _chunks = chunk(data, 5);
    setProjects(_chunks[0]);
    setChunks({
      index: 0,
      total: _chunks?.length || 0,
      allChunks: _chunks,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className='text-2xl font-semibold mt-4 mb-6'>
        {locale.pages.projects.title}
      </h2>

      {loading && <Loading />}

      {projects?.map((p, i) => (
        <ProjectCard key={`project-${i}`} {...p} />
      ))}

      {chunks.index < chunks.total - 1 && (
        <div className='flex justify-center mb-4'>
          <button
            onClick={loadMore}
            className='bg-transparent underline text-indigo-500'
          >
            {locale.pages.projects.loadMore}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
