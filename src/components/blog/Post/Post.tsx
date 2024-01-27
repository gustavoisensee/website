import dayjs from '../../../helpers/dayjs';
import { PostType } from '../../../types';

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => (
  <div className='flex flex-col rounded-md shadow-md hover:shadow-xl transition-all my-5 p-4 mb-4'>
    <a
      className='underline'
      href={post.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <h3 className='text-xl font-semibold'>{post.title}</h3>
    </a>
    {post.description && <p>{post.description}</p>}
    <span className='italic'>{dayjs(post.created_at).format('LLL')}</span>
  </div>
);

export default Post;
