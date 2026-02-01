import { PostType } from '../types';

/**
 * Fetches blog posts from the dev.to API for the user.
 * @returns {Promise<PostType[]>} Array of post objects.
 */
export const getPosts = async (): Promise<PostType[]> => {
  const url = 'https://dev.to/api/articles?username=gustavoisensee';
  const options = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) return response.json();
    console.error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    return [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
