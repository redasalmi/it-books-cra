import { useParams } from 'react-router-dom';

import Spinner from '~/components/Spinner';
import Error from '~/components/Error';
import Detail from '~/components/BookDetail';

import { useBookDetail } from '~/hooks/useBooks';

const BookDetail = () => {
  const { bookId } = useParams();
  const bookData = useBookDetail(bookId!);

  if (bookData.isLoading) {
    return <Spinner textMessage='Loading Book Detail...' />;
  }

  if (bookData.isError) {
    return <Error />;
  }

  if (bookData.isSuccess) {
    return <Detail book={bookData.data} />;
  }

  return (
    <div className='text-center'>
      <h1>Sorry, No Book Found</h1>
    </div>
  );
};

export default BookDetail;
