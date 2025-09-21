import dayjs from '../../../helpers/dayjs';
import { PostType } from '../../../types';

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => (
  <div className='flex flex-col rounded-md shadow-md hover:shadow-xl transition-all p-4 h-full'>
    <a
      className='underline'
      href={post.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
    </a>
    {post.description && <p className='flex-grow mb-3'>{post.description}</p>}
    <span className='italic text-sm mt-auto'>{dayjs(post.created_at).format('LLL')}</span>
  </div>
);

export default Post;
