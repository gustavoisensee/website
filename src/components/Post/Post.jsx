import React from 'react';
import dayjs from '../../helpers/dayjs';

const Post = ({ post }) => (
  <div className='mb-4'>
    <a className='underline' href={post.url} target='_blank' rel='noopener noreferrer'>
      <h3 className='text-xl font-semibold'>{post.title}</h3>
    </a>
    {post.description && <p>{post.description}</p>}
    <span className='italic'>{dayjs(post.created_at).format('LLL')}</span>
  </div>
);

export default Post;
