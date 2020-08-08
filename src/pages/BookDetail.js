import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookDetail, resetBookDetail } from "../features/books/booksSlice";
import { useParams, Link } from "react-router-dom";
import LoadingBook from "../components/LoadingBook";
import Error from "../components/Error";

const BookDetail = ({ location }) => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const { bookDetail, bookDetail_loading, bookDetail_error } = useSelector(
    (state) => state.books
  );
  const amazonUrl = `https://itbook.store/go/buy/${bookId}`;
  const prevLocation = location.state.prevLink;
  const {
    title,
    image,
    subtitle,
    authors,
    publisher,
    year,
    pages,
    language,
    rating,
    isbn10,
    isbn13,
    desc,
  } = bookDetail;

  useEffect(() => {
    dispatch(fetchBookDetail(bookId));

    return () => {
      dispatch(resetBookDetail());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mt-5">
      {bookDetail_loading ? (
        <LoadingBook />
      ) : bookDetail_error ? (
        <Error />
      ) : (
        <div>
          <Breadcrumb className="bookBreadcrump">
            <BreadcrumbItem>
              <Link to={prevLocation} className="breadcrumb-link">
                It Books
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{title}</BreadcrumbItem>
          </Breadcrumb>

          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 text-center">
                <img src={image} alt={title} className="border bg-light" />
                <h5 className="m-2 book-detail-subtitle">{title}</h5>
                <h5 className="m-2">{subtitle}</h5>
                <a
                  href={amazonUrl}
                  className="amazonLink btn bg-dark mb-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Amazon
                </a>
              </div>
              <div className="col-12 col-lg-8">
                <Table striped borderless>
                  <tbody>
                    <tr>
                      <td>Title</td>
                      <td>{title}</td>
                    </tr>
                    <tr>
                      <td>Subtitle</td>
                      <td>{subtitle}</td>
                    </tr>
                    <tr>
                      <td>Authors</td>
                      <td>{authors}</td>
                    </tr>
                    <tr>
                      <td>Publisher</td>
                      <td>{publisher}</td>
                    </tr>
                    <tr>
                      <td>Year</td>
                      <td>{year}</td>
                    </tr>
                    <tr>
                      <td>Pages</td>
                      <td>{pages}</td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td>{language}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>{rating}/5</td>
                    </tr>
                    <tr>
                      <td>ISBN-10</td>
                      <td>{isbn10}</td>
                    </tr>
                    <tr>
                      <td>ISBN-13</td>
                      <td>{isbn13}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{desc}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
