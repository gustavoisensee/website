import { getLocale } from '../../helpers';
import useFetchAndLoadMore from '../../hooks/useFetchAndLoadMore';
import { getPosts } from '../../services/posts';
import Loading from '../../components/shared/Loading';
import LoadMore from '../../components/shared/LoadMore';
import Post from '../../components/blog/Post';
import { PostType } from '../../types';

const locale = getLocale();

const Blog = () => {
  const { loading, data, loadMore, showLoadMore } = useFetchAndLoadMore('blog', getPosts);

  return (
    <div className="Blog">
      <h2 className="text-2xl font-semibold my-4 text-gray-900 dark:text-gray-100">
        {locale.pages.blog.title}
      </h2>

      {loading && <Loading />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(data as Array<PostType>)?.map?.((post) => (
          <Post key={`post-${post.id}`} post={post} />
        ))}
      </div>

      {showLoadMore && <LoadMore onClick={loadMore} className="mt-4" />}
    </div>
  );
};

export default Blog;
