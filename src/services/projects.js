export const getProjects = async() => {
  const url = 'https://api.github.com/users/gustavoisensee/repos?sort=updated';
    try {
      const response = await fetch(url);
      const projects = await response.json();

      return projects;
    } catch (err) {
      return [];
    }
};
