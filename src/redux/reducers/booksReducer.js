import {
  FETCH_BOOKS_SUCCEEDED,
  FETCH_BOOKS_FAILED,
  RESET_BOOKS,
  FETCH_BOOK_DETAIL_SUCCEEDED,
  FETCH_BOOK_DETAIL_FAILED,
  RESET_BOOK_DETAIL,
} from "../actions/types";

const initialState = {
  books: [],
  books_loading: true,
  books_error: false,
  bookDetail: [],
  bookDetail_loading: true,
  bookDetail_error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCEEDED:
      return {
        ...state,
        books: action.payload,
        books_loading: false,
        books_error: false,
      };
    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        books: [],
        books_loading: false,
        books_error: true,
      };
    case RESET_BOOKS:
      return {
        ...state,
        books: [],
        books_loading: true,
        books_error: false,
      };
    case FETCH_BOOK_DETAIL_SUCCEEDED:
      return {
        ...state,
        bookDetail: action.payload,
        bookDetail_loading: false,
        bookDetail_error: false,
      };
    case FETCH_BOOK_DETAIL_FAILED:
      return {
        ...state,
        bookDetail: [],
        bookDetail_loading: false,
        bookDetail_error: true,
      };
    case RESET_BOOK_DETAIL:
      return {
        ...state,
        bookDetail: [],
        bookDetail_loading: true,
        bookDetail_api_error: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
