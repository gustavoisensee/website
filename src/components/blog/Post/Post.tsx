import dayjs from "../../../helpers/dayjs";
import { PostType } from "../../../types";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => (
  <div className="flex flex-col rounded-md shadow-md hover:shadow-xl transition-all p-4 h-full bg-white dark:bg-gray-800 border dark:border-gray-700">
    <a
      className="underline hover:text-indigo-500 dark:hover:text-indigo-400"
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {post.title}
      </h3>
    </a>
    {post.description && (
      <p className="flex-grow mb-3 text-gray-700 dark:text-gray-300 line-clamp-4 break-words">
        {post.description}
      </p>
    )}
    <span className="italic text-sm mt-auto text-gray-600 dark:text-gray-400">
      {dayjs(post.published_at).format("LLL")}
    </span>
  </div>
);

export default Post;
