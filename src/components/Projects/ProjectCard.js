import React from 'react';

const ProjectCard = ({ name, description, html_url, homepage }) => (
  <div className='shadow-lg hover:shadow-xl transition-all my-5 p-4'>
    <h2 className='underline text-xl mb-2 font-semibold'>
      <a href={html_url} target='_blank' rel="noopener noreferrer">
        {name}
      </a>
    </h2>
    <p>{description}</p>
    <a href={homepage} target='_blank' rel="noopener noreferrer" className="second_link">
      {homepage}
    </a>
  </div>
);

export default ProjectCard;
