import { Link, useLocation } from 'react-router-dom';

import styles from './List.module.scss';

const BooksList = ({ books }) => {
  let { pathname } = useLocation();

  return (
    <div className={styles.list}>
      {books.map(({ title, image, isbn13 }) => (
        <div className={styles.book} key={isbn13}>
          <Link
            to={{
              pathname: `/book/${isbn13}`,
              state: { prevLink: pathname },
            }}
          >
            <img src={image} alt={title} />
            <p>{title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
