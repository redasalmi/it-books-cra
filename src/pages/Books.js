import React from 'react';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CardImg, CardTitle, Card } from 'reactstrap';
import Pagination from 'react-js-pagination';
import LoadingBook from '../components/LoadingBook';
import Error from '../components/Error';
import { fetchBooks } from '../utils/fetchBooks';

const Books = () => {
  const { search, page } = useParams();
  let { pathname } = useLocation();
  const history = useHistory();

  const { isLoading, isError, data } = useQuery(
    ['bookDetail', search, page],
    () => fetchBooks(search, page)
  );

  if (isLoading) return <LoadingBook />;
  if (isError) return <Error />;

  const { books, total } = data;
  const booksPerPage = 10;

  const handleChangePage = (page) => {
    history.push(`/books/${search}/${page}`);
  };

  return (
    <div className='container mt-5'>
      {books.length === 0 ? (
        <div className='text-center'>
          <h1 className='font-weight-bold'>Sorry, No Books Found</h1>
        </div>
      ) : (
        <div>
          <div className='row d-flex justify-content-center'>
            {books.map((book) => (
              <Card
                className='col-10 col-sm-5 col-md-3 m-2 bookCard'
                key={book.isbn13}
              >
                <Link
                  to={{
                    pathname: `/book/detail/${book.isbn13}`,
                    state: { prevLink: pathname },
                  }}
                  className='card-link'
                >
                  <CardImg
                    top
                    width='100%'
                    src={book.image}
                    alt={book.isbn13}
                  />
                  <CardTitle className='text-center'>{book.title}</CardTitle>
                </Link>
              </Card>
            ))}
          </div>

          {search && total > booksPerPage && (
            <div className='row pagination-row'>
              <Pagination
                activePage={parseInt(page)}
                itemsCountPerPage={booksPerPage}
                totalItemsCount={parseInt(total)}
                onChange={handleChangePage}
                itemClass='page-item'
                linkClass='page-link'
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Books;
