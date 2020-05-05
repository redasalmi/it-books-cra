import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, Table } from "reactstrap";
import { fetchBookDetail, resetBookDetail } from "../redux/actions/fetchBooks";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import LoadingBook from "../components/LoadingBook";
import Error from "../components/Error";

const BookDetail = ({ location }) => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const { bookDetail, bookDetail_loading, bookDetail_error } = useSelector(
    (state) => state.books
  );
  const amazonUrl = `https://itbook.store/go/buy/1/${bookId}`;
  const prevLocation = location.state.prevLink;
  useEffect(() => {
    dispatch(fetchBookDetail(bookId));

    return () => {
      dispatch(resetBookDetail());
    };
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
              <Link to={prevLocation}>It Books</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{bookDetail.title}</BreadcrumbItem>
          </Breadcrumb>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 text-center">
                <img
                  src={bookDetail.image}
                  alt={bookDetail.title}
                  className="border bg-light"
                />
                <h5 className="m-2 text-primary">{bookDetail.title}</h5>
                <h5 className="m-2 text-primary">{bookDetail.subtitle}</h5>

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
                      <td>{bookDetail.title}</td>
                    </tr>
                    <tr>
                      <td>Subtitle</td>
                      <td>{bookDetail.subtitle}</td>
                    </tr>
                    <tr>
                      <td>Authors</td>
                      <td>{bookDetail.authors}</td>
                    </tr>
                    <tr>
                      <td>Publisher</td>
                      <td>{bookDetail.publisher}</td>
                    </tr>
                    <tr>
                      <td>Year</td>
                      <td>{bookDetail.year}</td>
                    </tr>
                    <tr>
                      <td>Pages</td>
                      <td>{bookDetail.pages}</td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td>{bookDetail.language}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>{bookDetail.rating}/5</td>
                    </tr>
                    <tr>
                      <td>ISBN-10</td>
                      <td>{bookDetail.isbn10}</td>
                    </tr>
                    <tr>
                      <td>ISBN-13</td>
                      <td>{bookDetail.isbn13}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{bookDetail.desc}</td>
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
