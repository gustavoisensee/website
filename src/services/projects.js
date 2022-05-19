export const getProjects = async() => {
  const url = 'https://api.github.com/users/gustavoisensee/repos?sort=updated';
  const options = {
    headers: {
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
