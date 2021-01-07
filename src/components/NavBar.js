import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import StyledNavbar from '../styles/Navbar.style';

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
    <StyledNavbar>
      <div className='container navbar-container'>
        <div className='navbar-logo'>
          <a href='/'>IT Books</a>
        </div>

        <form onSubmit={handleSearch} className='navbar-form'>
          <input
            id='search'
            type='text'
            value={bookSearch}
            onChange={handleSearchChange}
            aria-label='Search books by title, author, ISBN'
            placeholder='Search books by title, author, ISBN'
          />

          <button type='submit' aria-label='search book'>
            <FaSearch color='white' />
          </button>
        </form>
      </div>
    </StyledNavbar>
  );
};

export default NavBar;
