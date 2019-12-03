import {
  FETCH_BOOKS,
  FETCH_BOOK_DETAIL,
  LOADING_BOOK,
  HIDE_BOOK_DETAIL,
  API_ERROR
} from "./types";
import axios from "axios";

// Url used to activate CORS on the website because the API doesn't support it
const corsUrl = "https://cors-anywhere.herokuapp.com/";
// API URL
const apiUrl = "https://api.itbook.store/1.0/";
const baseUrl = corsUrl + apiUrl;

// fetching & searching for books
export const fetchBooks = (search = "") => dispatch => {
  if (search === "") {
    // fetching latest books
    let url = `/new`;
    axios
      .get(url, {
        baseURL: baseUrl
      })
      .then(res => {
        dispatch({
          type: FETCH_BOOKS,
          payload: res.data.books
        });
      })
      .catch(() =>
        dispatch({
          type: API_ERROR
        })
      );
  } else {
    // searching for books
    let url = `${baseUrl}/search/${search}`;
    let getUrl = [];
    for (let page = 1; page <= 5; page++) {
      getUrl.push(`${url}/${page}`);
    }
    axios
      .all(getUrl.map(url => axios.get(url)))
      .then(
        axios.spread((...response) => {
          let bookResult = [];
          response.forEach(res => {
            bookResult.push(...res.data.books);
          });
          dispatch({
            type: FETCH_BOOKS,
            payload: bookResult
          });
        })
      )
      .catch(() =>
        dispatch({
          type: API_ERROR
        })
      );
  }
};

// fetching a specific book details (title, description, Isbn13...)
export const fetchBookDetail = bookIsbn13 => dispatch => {
  let url = `/books/${bookIsbn13}`;
  axios
    .get(url, {
      baseURL: baseUrl
    })
    .then(res => {
      dispatch({
        type: FETCH_BOOK_DETAIL,
        payload: res.data
      });
    })
    .catch(() =>
      dispatch({
        type: API_ERROR
      })
    );
};

// hide a book details to show the list of books
export const hide_bookDetail = () => dispatch => {
  dispatch({
    type: HIDE_BOOK_DETAIL,
    payload: false
  });
};

// loading spinner
export const loading_book = () => dispatch => {
  dispatch({
    type: LOADING_BOOK,
    payload: true
  });
};
