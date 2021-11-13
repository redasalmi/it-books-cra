import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Spinner from '../components/Spinner';
import Error from '../components/Error';
import BooksList from '../components/Books/List';
import Pagination from '../components/Pagination';

import fetchBooks from '../utils/fetchBooks';

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page') || '1';
  const hasSearched = !!(search && search?.length > 0);

  const {
    isLoading: newBooksLoading,
    isError: newBooksError,
    data: newBooksData,
  } = useQuery('NewBooks', async () => fetchBooks('/new'), {
    enabled: !hasSearched,
  });

  const {
    isLoading: searchLoading,
    isError: searchError,
    data: searchData,
  } = useQuery(
    ['books', search, page],
    async () => fetchBooks(`/search/${search}/${page}`),
    {
      enabled: hasSearched,
    },
  );

  const loadingMsg = hasSearched
    ? 'Loading Search Result...'
    : 'Loading New Released Books...';

  if (newBooksLoading || searchLoading) {
    return <Spinner textMessage={loadingMsg} />;
  }

  if (newBooksError || searchError) {
    return <Error />;
  }

  const { books, total } = hasSearched ? searchData : newBooksData;

  const handleChangePage = (page) => {
    setSearchParams({
      search,
      page,
    });
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return books && books?.length > 0 ? (
    <>
      <BooksList books={books} />

      {hasSearched ? (
        <Pagination
          activePage={parseInt(page, 10)}
          itemsCountPerPage={10}
          totalItemsCount={parseInt(total, 10)}
          handlePageChange={handleChangePage}
        />
      ) : null}
    </>
  ) : (
    <div className='text-center'>
      <h1>Sorry, No Books Found</h1>
    </div>
  );
};

export default Books;
