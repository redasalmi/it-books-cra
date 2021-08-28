import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import Pagination from 'react-js-pagination';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import BooksList from '../components/books/List';
import StyledPagination from '../styles/Pagination.style';
import fetchBooks from '../utils/fetchBooks';

const BooksSearch = () => {
  const { search, page } = useParams();
  const history = useHistory();

  const { isLoading, isError, data } = useQuery(
    ['books', search, page],
    async () => fetchBooks(`/search/${search}/${page}`),
  );

  if (isLoading) return <Spinner textMessage='Loading Search Result...' />;
  if (isError) return <Error />;

  const { books, total } = data;
  const booksPerPage = 10;

  const handleChangePage = (page) => {
    history.push(`/books/${search}/${page}`);
  };

  return books.length === 0 ? (
    <div className='text-center'>
      <h1>Sorry, No Books Found</h1>
    </div>
  ) : (
    <div>
      <BooksList books={books} />

      {search && total > booksPerPage && (
        <StyledPagination>
          <Pagination
            activePage={parseInt(page)}
            itemsCountPerPage={booksPerPage}
            totalItemsCount={parseInt(total)}
            onChange={handleChangePage}
            itemClass='page-item'
            linkClass='page-link'
          />
        </StyledPagination>
      )}
    </div>
  );
};

export default BooksSearch;
