import { createSearchParams, useSearchParams } from 'react-router-dom';

import Spinner from '~/components/Spinner';
import Error from '~/components/Error';
import BooksList from '~/components/BooksList';
import Pagination from '~/components/Pagination';

import { useNewBooks, useSearchBooks } from '~/hooks/useBooks';

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page') || '1';
  const hasSearched = !!(search && search?.length > 0);

  const newBooks = useNewBooks(!hasSearched);
  const searchedBooks = useSearchBooks(search!, page, hasSearched);
  const isLoading = newBooks.isLoading || searchedBooks.isLoading;
  const isError = newBooks.isError || searchedBooks.isError;

  const loadingMsg = hasSearched
    ? 'Loading Search Result...'
    : 'Loading New Released Books...';

  const handleChangePage = (newPage: number) => {
    setSearchParams(
      createSearchParams({
        search: search!,
        page: newPage.toString(10),
      }),
    );
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isLoading) {
    return <Spinner textMessage={loadingMsg} />;
  }

  if (isError) {
    return <Error />;
  }

  if (hasSearched && searchedBooks.isSuccess) {
    const { books, total } = searchedBooks.data;

    if (books && books.length > 0) {
      return (
        <>
          <BooksList books={books} />
          <Pagination
            activePage={parseInt(page, 10)}
            itemsCountPerPage={10}
            totalItemsCount={parseInt(total, 10)}
            handlePageChange={handleChangePage}
          />
        </>
      );
    }
  }

  if (!hasSearched && newBooks.isSuccess) {
    const { books } = newBooks.data;

    if (books && books.length > 0) {
      return <BooksList books={books} />;
    }
  }

  return (
    <div className='text-center'>
      <h1>Sorry, No Books Found</h1>
    </div>
  );
};

export default Books;
