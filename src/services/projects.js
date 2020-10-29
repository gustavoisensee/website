export const getProjects = async() => {
  const url = 'https://api.github.com/users/gustavoisensee/repos?sort=updated';
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();

      return [];
    } catch (err) {
      return [];
    }
};
