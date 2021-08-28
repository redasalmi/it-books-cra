const fetchBooks = async (resource) => {
  // Url used to activate CORS on the website because the API doesn't support it
  const corsUrl = 'https://cors-server-proxy.herokuapp.com/';

  // API URL
  const apiUrl = 'https://api.itbook.store/1.0';
  const baseURL = corsUrl + apiUrl;

  const res = await fetch(`${baseURL}${resource}`, {
    headers: {
      origin: '*',
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();

  return json;
};

export default fetchBooks;
