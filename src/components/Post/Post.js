import React from 'react';
import dayjs from '../../helpers/dayjs';

const Post = ({ post }) => (
  <div className='card'>
    <a href={post.url} target='_blank' rel='noopener noreferrer'>
      <h3>{post.title}</h3>
    </a>
    {post.description && <p>{post.description}</p>}
    <span>{dayjs(post.created_at).format('LLL')}</span>
  </div>
);

export default Post;
