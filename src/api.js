const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async (type) => {
  const url = `${API_URL}/${type}`;
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error('Something went wrong');
    return null;
  }
};

export const postNewPost = async (userId, title, body) => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) return true;
  else return false;
};
