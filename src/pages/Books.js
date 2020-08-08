import React, { useEffect } from "react";
import { CardImg, CardTitle, Card } from "reactstrap";
import Pagination from "react-js-pagination";
import LoadingBook from "../components/LoadingBook";
import Error from "../components/Error";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks, resetBooks } from "../features/books/booksSlice";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";

const Books = () => {
  const {
    books,
    booksPerPage,
    totalBooks,
    books_loading,
    books_error,
  } = useSelector((state) => state.books);
  const { search, page } = useParams();
  let { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(resetBooks());
    if (search || page) {
      dispatch(fetchBooks(search, page));
    } else {
      dispatch(fetchBooks());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  const handleChangePage = (page) => {
    history.push(`/books/${search}/${page}`);
  };

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
                <Link
                  to={{
                    pathname: `/book/detail/${book.isbn13}`,
                    state: { prevLink: pathname },
                  }}
                  className="card-link"
                >
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

          {totalBooks > booksPerPage ? (
            <div className="row pagination-row">
              <Pagination
                activePage={parseInt(page)}
                itemsCountPerPage={booksPerPage}
                totalItemsCount={totalBooks}
                onChange={handleChangePage}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Books;
