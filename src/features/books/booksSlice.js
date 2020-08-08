import { createSlice } from "@reduxjs/toolkit";
import Axios from "../../utils/axios";

const initialState = {
  books: [],
  booksPerPage: 10,
  totalBooks: null,
  books_loading: true,
  books_error: false,
  bookDetail: [],
  bookDetail_loading: true,
  bookDetail_error: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchBooksSucceeded(state, action) {
      const { books, total } = action.payload;
      const totalBooks = parseInt(total);
      return {
        ...state,
        books,
        totalBooks,
        books_loading: false,
        books_error: false,
      };
    },
    fetchBooksFailed(state, action) {
      return {
        ...state,
        books: [],
        books_loading: false,
        books_error: true,
      };
    },
    resetBooks(state, action) {
      return {
        ...state,
        books: [],
        books_loading: true,
        books_error: false,
      };
    },

    fetchBookDetailSucceeded(state, action) {
      return {
        ...state,
        bookDetail: action.payload,
        bookDetail_loading: false,
        bookDetail_error: false,
      };
    },
    fetchBookDetailFailed(state, action) {
      return {
        ...state,
        bookDetail: [],
        bookDetail_loading: false,
        bookDetail_error: true,
      };
    },
    resetBookDetail(state, action) {
      return {
        ...state,
        bookDetail: [],
        bookDetail_loading: true,
        bookDetail_error: false,
      };
    },
  },
});

const fetchBooks = (search = "", page = 1) => async (dispatch) => {
  try {
    const url = !search ? "/new" : `/search/${search}/${page}`;
    const response = await Axios.get(url);
    const books = await response.data;
    dispatch(fetchBooksSucceeded(books));
  } catch (error) {
    dispatch(fetchBooksFailed());
  }
};

const fetchBookDetail = (bookIsbn13) => async (dispatch) => {
  try {
    const response = await Axios.get(`/books/${bookIsbn13}`);
    const book = await response.data;
    dispatch(fetchBookDetailSucceeded(book));
  } catch (error) {
    dispatch(fetchBookDetailFailed());
  }
};

export const {
  fetchBooksSucceeded,
  fetchBooksFailed,
  resetBooks,
  fetchBookDetailSucceeded,
  fetchBookDetailFailed,
  resetBookDetail,
} = booksSlice.actions;

export { fetchBooks, fetchBookDetail };

export default booksSlice.reducer;
