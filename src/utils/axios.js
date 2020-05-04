import axios from "axios";

// Url used to activate CORS on the website because the API doesn't support it
const corsUrl = "https://cors-server-proxy.herokuapp.com/";
// API URL
const apiUrl = "https://api.itbook.store/1.0/";
const baseUrl =
  process.env.NODE_ENV === "development" ? corsUrl + apiUrl : apiUrl;

const Axios = axios.create({
  baseURL: baseUrl,
});

export default Axios;
