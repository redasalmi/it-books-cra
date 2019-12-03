import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../actions/fetchBooks";

import LoadingBook from "./LoadingBook";
import Booklist from "./BookList";
import BookDetail from "./BookDetail";
import Error from "./Error";

const Books = () => {
  const [
    books,
    bookdetail,
    showBookDetail,
    loading,
    api_error
  ] = useSelector(state => [
    state.books.books,
    state.books.bookDetail,
    state.books.showBookDetail,
    state.books.loading,
    state.books.api_error
  ]);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBooks()), [dispatch]);

  return (
    <div className="container mt-5">
      {!loading && !api_error && !showBookDetail && (
        <Booklist books={books} dispatch={dispatch} />
      )}
      {!loading && !api_error && showBookDetail && bookdetail.length !== 0 && (
        <BookDetail bookdetail={bookdetail} dispatch={dispatch} />
      )}
      {loading && <LoadingBook />}
      {api_error && <Error />}
    </div>
  );
};

export default Books;
