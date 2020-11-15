import React, { useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import ProjectCard from './ProjectCard';
import Transition from '../Transition';
import Loading from '../Loading';
import { getProjects } from '../../services/projects';
import './styles.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async() => {
    const data = await getProjects();
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => { getData(); }, []);

  return (
    <div className='Projects' id='projects'>
      <h1>Github Projects</h1>

      {loading && <Loading />}

      <TransitionGroup>
        {projects?.map((p, i) => (
          <Transition id={i} key={i} show={!loading}>
            <ProjectCard {...p} />
          </Transition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Projects;
