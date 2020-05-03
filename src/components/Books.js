import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../actions/fetchBooks";

import LoadingBook from "./LoadingBook";
import Booklist from "./BookList";
import BookDetail from "./BookDetail";
import Error from "./Error";

const Books = () => {
  const { books, bookDetail, showBookDetail, loading, api_error } = useSelector(
    (state) => state.books
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="container mt-5">
      {!loading && !api_error && !showBookDetail && <Booklist books={books} />}
      {!loading && !api_error && showBookDetail && bookDetail.length !== 0 && (
        <BookDetail bookdetail={bookDetail} />
      )}
      {loading && <LoadingBook />}
      {api_error && <Error />}
    </div>
  );
};

export default Books;
