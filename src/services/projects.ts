export const getProjects = async () => {
  const url =
    "https://api.github.com/users/gustavoisensee/repos?sort=pushed&direction=desc";
  const options = {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) return response.json();

    return [];
  } catch {
    return [];
  }
};

export const getOrgProjects = async () => {
  const url =
    "https://api.github.com/users/tipy/repos?sort=pushed&direction=desc";
  const options = {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) return response.json();

    return [];
  } catch {
    return [];
  }
};
