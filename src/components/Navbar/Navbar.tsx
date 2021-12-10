import React, { useState } from 'react';
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import styles from './Navbar.module.scss';

const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    if (searchValue) {
      setSearch(searchValue);
    } else {
      setSearch('');
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (search) {
      if (pathname === '/') {
        setSearchParams(
          createSearchParams({
            search,
            page: '1',
          }),
        );
      } else {
        navigate(`/?search=${search}&page=1`);
      }
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
            value={search}
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
