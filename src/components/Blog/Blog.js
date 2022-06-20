import React from 'react';
import { getMessage } from '../../helpers';

const Blog = () => {
  const locale = getMessage(localStorage.market);
  return (
    <div className='Blog'>
      <h2>{locale.pages.blog.title}</h2>

      <h3>{locale.pages.blog.description}</h3>
    </div>
  );
};

export default Blog;
