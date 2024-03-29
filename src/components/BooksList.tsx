import { Link } from 'react-router-dom';

import type { Book } from '~/types/book';
import styles from '~/styles/components/books-list.module.scss';

interface BooksListProps {
  books: Book[];
}

const BooksList = ({ books }: BooksListProps) => {
  return (
    <div className={styles.list}>
      {books.map(({ title, image, isbn13 }) => (
        <div className={styles.book} key={isbn13}>
          <Link to={`/book/${isbn13}`}>
            <img src={image} alt={title} />
            <p>{title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
