import React from 'react';
import { getMessage } from '../../helpers';
import useFetchAndLoadMore from '../../hooks/useFetchAndLoadMore';
import { getPosts } from '../../services/posts';
import Loading from '../Loading';
import LoadMore from '../LoadMore';
import Post from '../Post/Post';

const Blog = () => {
  const locale = getMessage();
  const { loading, data, loadMore, showLoadMore } = useFetchAndLoadMore(getPosts);

  return (
    <div className='Blog'>
      <h2 className='text-2xl font-semibold my-4'>{locale.pages.blog.title}</h2>

      {loading && <Loading />}

      {data?.map((post, i) => (
        <Post key={`post-${post.id}`} post={post} />
      ))}

      {showLoadMore && <LoadMore onClick={loadMore} />}
    </div>
  );
};

export default Blog;
