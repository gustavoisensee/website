import chunk from 'lodash.chunk';
import React, { useEffect, useState } from 'react';
import { getMessage } from '../../helpers';
import { getPosts } from '../../services/posts';
import Loading from '../Loading';
import Post from '../Post/Post';
import './styles.scss';

const Blog = () => {
  const locale = getMessage(localStorage.market);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await getPosts();
    const chunks = chunk(data, 5);
    setPosts(chunks[0]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='Blog'>
      <h2>{locale.pages.blog.title}</h2>

      {loading && <Loading />}

      {posts?.map((post, i) => (
        <Post key={`post-${post.id}`} post={post} />
      ))}
    </div>
  );
};

export default Blog;
