import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { loading_book, fetchBookDetail } from "../actions/fetchBooks";
import { useDispatch } from "react-redux";

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  if (books.length === 0) {
    return (
      <div className="text-center">
        <h1 className="font-weight-bold">Sorry, No Books Found</h1>
      </div>
    );
  } else {
    let bookList = books.map((book) => (
      <Card
        className="col-10 col-sm-5 col-md-3 m-2 bookCard"
        key={book.isbn13}
        onClick={() => {
          dispatch(loading_book());
          dispatch(fetchBookDetail(book.isbn13));
        }}
      >
        <CardImg top width="100%" src={book.image} alt={book.isbn13} />
        <CardTitle className="text-center">{book.title}</CardTitle>
      </Card>
    ));
    return (
      <div>
        <div className="row d-flex justify-content-center">{bookList}</div>
      </div>
    );
  }
};

export default BookList;
