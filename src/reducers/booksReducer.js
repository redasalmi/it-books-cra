import {
  FETCH_BOOKS,
  FETCH_BOOK_DETAIL,
  HIDE_BOOK_DETAIL,
  LOADING_BOOK,
  API_ERROR
} from "../actions/types";

const initialState = {
  books: [],
  bookDetail: [],
  showBookDetail: false,
  loading: true,
  api_error: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        showBookDetail: false,
        loading: false
      };
    case FETCH_BOOK_DETAIL:
      return {
        ...state,
        bookDetail: action.payload,
        showBookDetail: true,
        loading: false
      };
    case HIDE_BOOK_DETAIL:
      return { ...state, showBookDetail: false, loading: false };
    case LOADING_BOOK:
      return { ...state, loading: action.payload };
    case API_ERROR:
      return {
        ...state,
        books: [],
        bookDetail: [],
        showBookDetail: false,
        loading: false,
        api_error: true
      };
    default:
      return state;
  }
};

export default rootReducer;
