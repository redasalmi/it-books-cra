import { Link, useLocation } from 'react-router-dom';
import StyledBooksList from '../../styles/BooksList.style';

const BooksList = ({ books }) => {
  let { pathname } = useLocation();

  return (
    <StyledBooksList>
      {books.map((book) => {
        const { title, image, isbn13 } = book;

        return (
          <div className='book-card' key={isbn13}>
            <Link
              to={{
                pathname: `/book/detail/${isbn13}`,
                state: { prevLink: pathname },
              }}
            >
              <img src={image} alt={title} />
              <p>{title}</p>
            </Link>
          </div>
        );
      })}
    </StyledBooksList>
  );
};

export default BooksList;
