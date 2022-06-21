import React, { useEffect, useState } from 'react';
import chunk from 'lodash.chunk';
import ProjectCard from './ProjectCard';
import Loading from '../Loading';
import { getProjects } from '../../services/projects';
import { getMessage } from '../../helpers';
import './styles.scss';

const Projects = () => {
  const locale = getMessage(localStorage.market);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await getProjects();
    const chunks = chunk(data, 5);
    setProjects(chunks[0]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='Projects' id='projects'>
      <h2>{locale.pages.projects.title}</h2>

      {loading && <Loading />}

      {projects?.map((p, i) => (
        <ProjectCard key={`project-${i}`} {...p} />
      ))}
    </div>
  );
};

export default Projects;
