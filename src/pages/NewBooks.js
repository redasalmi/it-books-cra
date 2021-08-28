import React from 'react';
import { useQuery } from 'react-query';

import Spinner from '../components/Spinner';
import Error from '../components/Error';
import BooksList from '../components/books/List';

import fetchBooks from '../utils/fetchBooks';

const NewBooks = () => {
  const { isLoading, isError, data } = useQuery('NewBooks', async () =>
    fetchBooks('/new'),
  );

  if (isLoading) return <Spinner textMessage='Loading New Released Books...' />;
  if (isError) return <Error />;

  const { books } = data;

  return books.length === 0 ? (
    <div className='text-center'>
      <h1>Sorry, No Books Found</h1>
    </div>
  ) : (
    <div>
      <BooksList books={books} />
    </div>
  );
};

export default NewBooks;
