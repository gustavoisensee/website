import React, { PureComponent } from 'react';
import ProjectCard from './ProjectCard';
import './styles.scss';

class Projects extends PureComponent {
  state = {
    projects: []
  }

  async componentDidMount() {
    const url = 'https://api.github.com/users/gustavoisensee/repos?sort=updated';
    try {
      const response = await fetch(url);
      const projects = await response.json();

      this.setState({ projects });
    } catch (err) {
      this.setState({ projects: [] });
    }
  }

  render() {
    const { projects } = this.state;
    return (
      <div className='Projects' id='projects'>
        <h1>Projects</h1>
        {projects && projects.length > 0
          && projects.map((p, i) => (<ProjectCard key={i} {...p} />))}
      </div>
    )
  }
}

export default Projects;
