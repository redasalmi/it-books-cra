import {
  FETCH_BOOKS,
  FETCH_BOOK_DETAIL,
  LOADING_BOOK,
  HIDE_BOOK_DETAIL,
  API_ERROR,
} from "./types";
import axios from "axios";

// Url used to activate CORS on the website because the API doesn't support it
const corsUrl = "https://cors-anywhere.herokuapp.com/";
// API URL
const apiUrl = "https://api.itbook.store/1.0/";
const baseUrl = corsUrl + apiUrl;

// fetching & searching for books
export const fetchBooks = (search = "") => async (dispatch) => {
  if (search === "") {
    // fetching latest books
    try {
      let url = `/new`;
      const response = await axios.get(url, { baseURL: baseUrl });
      const books = await response.data.books;
      dispatch({
        type: FETCH_BOOKS,
        payload: books,
      });
    } catch (error) {
      dispatch({
        type: API_ERROR,
      });
    }
  } else {
    // searching for books
    try {
      let url = `${baseUrl}/search/${search}`;
      let getUrl = [];
      for (let page = 1; page <= 5; page++) {
        getUrl.push(`${url}/${page}`);
      }
      const response = await axios.all(getUrl.map((url) => axios.get(url)));
      let bookResult = [];
      response.forEach((res) => {
        bookResult.push(...res.data.books);
      });
      dispatch({
        type: FETCH_BOOKS,
        payload: bookResult,
      });
    } catch (error) {
      dispatch({
        type: API_ERROR,
      });
    }
  }
};

// fetching a specific book details (title, description, Isbn13...)
export const fetchBookDetail = (bookIsbn13) => async (dispatch) => {
  try {
    let url = `/books/${bookIsbn13}`;
    const response = await axios.get(url, { baseURL: baseUrl });
    const book = await response.data;
    dispatch({
      type: FETCH_BOOK_DETAIL,
      payload: book,
    });
  } catch (error) {
    dispatch({
      type: API_ERROR,
    });
  }
};

// hide a book details to show the list of books
export const hide_bookDetail = () => (dispatch) => {
  dispatch({
    type: HIDE_BOOK_DETAIL,
    payload: false,
  });
};

// loading spinner
export const loading_book = () => (dispatch) => {
  dispatch({
    type: LOADING_BOOK,
    payload: true,
  });
};
