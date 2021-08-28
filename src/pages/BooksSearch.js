import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import Spinner from '../components/Spinner';
import Error from '../components/Error';
import BooksList from '../components/Books/List';
import Pagination from '../components/Pagination';

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
  const booksTotal = parseInt(total, 10);
  const booksPerPage = 10;

  const handleChangePage = (page) => {
    history.push(`/books/${search}/${page}`);
  };

  return booksTotal > 0 ? (
    <>
      <BooksList books={books} />

      <Pagination
        activePage={parseInt(page)}
        itemsCountPerPage={booksPerPage}
        totalItemsCount={booksTotal}
        handlePageChange={handleChangePage}
      />
    </>
  ) : (
    <div className='text-center'>
      <h1>Sorry, No Books Found</h1>
    </div>
  );
};

export default BooksSearch;
