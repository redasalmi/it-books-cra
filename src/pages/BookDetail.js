import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Spinner from '../components/Spinner';
import Error from '../components/Error';
import Detail from '../components/Books/Detail';

import fetchBooks from '../utils/fetchBooks';

const BookDetail = () => {
  const { bookId } = useParams();

  const { isLoading, isError, data } = useQuery(
    ['bookDetail', bookId],
    async () => fetchBooks(`/books/${bookId}`),
  );

  if (isLoading) return <Spinner textMessage='Loading Book Detail...' />;
  if (isError) return <Error />;

  return <Detail book={data} />;
};

export default BookDetail;
