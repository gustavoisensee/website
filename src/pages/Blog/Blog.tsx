import { getMessage } from '../../helpers';
import useFetchAndLoadMore from '../../hooks/useFetchAndLoadMore';
import { getPosts } from '../../services/posts';
import Loading from '../../components/shared/Loading';
import LoadMore from '../../components/shared/LoadMore';
import Post from '../../components/blog/Post';
import { PostType } from '../../types';

const locale = getMessage();

const Blog = () => {
  const { loading, data, loadMore, showLoadMore } = useFetchAndLoadMore(
    'blog',
    getPosts
  );

  return (
    <div className='Blog'>
      <h2 className='text-2xl font-semibold my-4'>{locale.pages.blog.title}</h2>

      {loading && <Loading />}

      {(data as Array<PostType>)?.map?.((post) => (
        <Post key={`post-${post.id}`} post={post} />
      ))}

      {showLoadMore && <LoadMore onClick={loadMore} />}
    </div>
  );
};

export default Blog;
