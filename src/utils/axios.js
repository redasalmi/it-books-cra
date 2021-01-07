import axios from 'axios';

// Url used to activate CORS on the website because the API doesn't support it
const corsUrl = 'https://cors-server-proxy.herokuapp.com/';
// API URL
const apiUrl = 'https://api.itbook.store/1.0';
const baseURL = corsUrl + apiUrl;

const Axios = axios.create({
  baseURL,
});

export default Axios;
