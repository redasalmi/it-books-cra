import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import styles from './Navbar.module.scss';

const NavBar = () => {
  const [bookSearch, setBookSearch] = useState('');
  const history = useHistory();

  const handleSearchChange = (event) => setBookSearch(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();
    if (bookSearch) {
      history.push(`/books/${bookSearch}/1`);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link to='/'>IT Books</Link>
        </div>

        <form onSubmit={handleSearch} className={styles.form}>
          <input
            id='search'
            type='text'
            value={bookSearch}
            onChange={handleSearchChange}
            aria-label='Search books by title, author, ISBN'
            placeholder='Search books by title, author, ISBN'
          />

          <button type='submit' aria-label='search book'>
            <SearchIcon className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
