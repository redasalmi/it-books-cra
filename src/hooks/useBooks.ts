import { useQuery } from 'react-query';

import fetchBooks from '../utils/fetchBooks';
import { BooksData } from '../types/book';

export const useNewBooks = (enabled: boolean) =>
  useQuery<BooksData, Error>('NewBooks', async () => fetchBooks('/new'), {
    enabled,
  });

export const useSearchBooks = (
  search: string,
  page: string,
  enabled: boolean,
) =>
  useQuery<BooksData, Error>(
    ['books', search, page],
    async () => fetchBooks(`/search/${search}/${page}`),
    {
      enabled,
    },
  );
