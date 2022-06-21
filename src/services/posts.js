export const getPosts = async() => {
  const url = 'https://dev.to/api/articles?username=gustavoisensee';
  const options = {
    headers: {
      Accept: 'application/json',
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
