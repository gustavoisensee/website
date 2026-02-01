import { ProjectType } from '../types';

/**
 * Fetches public repositories for the user from GitHub.
 * @returns {Promise<ProjectType[]>} Array of project objects.
 */
export const getProjects = async (): Promise<ProjectType[]> => {
  const url = 'https://api.github.com/users/gustavoisensee/repos?sort=pushed&direction=desc';
  const options = {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) return response.json();
    console.error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
    return [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

/**
 * Fetches public repositories for the organization from GitHub.
 * @returns {Promise<ProjectType[]>} Array of project objects.
 */
export const getOrgProjects = async (): Promise<ProjectType[]> => {
  const url = 'https://api.github.com/users/tipy/repos?sort=pushed&direction=desc';
  const options = {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) return response.json();
    console.error(`Failed to fetch org projects: ${response.status} ${response.statusText}`);
    return [];
  } catch (error) {
    console.error('Error fetching org projects:', error);
    return [];
  }
};
