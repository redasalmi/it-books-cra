import React, { useEffect } from "react";
import { CardImg, CardTitle, Card } from "reactstrap";
import LoadingBook from "../components/LoadingBook";
import Error from "../components/Error";
import { fetchBooks, resetBooks } from "../redux/actions/fetchBooks";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Books = () => {
  const { books, books_loading, books_error } = useSelector(
    (state) => state.books
  );
  const { search } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (search) {
      dispatch(resetBooks());
      dispatch(fetchBooks(search));
    } else if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [search]);

  return (
    <div className="container mt-5">
      {books_loading ? (
        <LoadingBook />
      ) : books_error ? (
        <Error />
      ) : books.length === 0 ? (
        <div className="text-center">
          <h1 className="font-weight-bold">Sorry, No Books Found</h1>
        </div>
      ) : (
        <div>
          <div className="row d-flex justify-content-center">
            {books.map((book) => (
              <Card
                className="col-10 col-sm-5 col-md-3 m-2 bookCard"
                key={book.isbn13}
              >
                <Link to={`/book/detail/${book.isbn13}`} className="card-link">
                  <CardImg
                    top
                    width="100%"
                    src={book.image}
                    alt={book.isbn13}
                  />
                  <CardTitle className="text-center">{book.title}</CardTitle>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
