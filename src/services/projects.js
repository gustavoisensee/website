export const getProjects = async() => {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const url = 'https://api.github.com/users/gustavoisensee/repos?sort=updated';
  const options = {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    }
  }

  try {
    const response = await fetch(url, options);
    if (response.ok) return response.json();

    return [];
  } catch (err) {
    return [];
  }
};
