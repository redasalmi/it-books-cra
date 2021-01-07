import Axios from './axios';

const fetchBooks = async (search = '', page = 1) => {
  const url = !search ? '/new' : `/search/${search}/${page}`;
  const response = await Axios.get(url);
  const books = await response.data;

  return books;
};

const fetchBookDetail = async (bookId) => {
  const response = await Axios.get(`/books/${bookId}`);
  const bookDetail = await response.data;

  return bookDetail;
};

export { fetchBooks, fetchBookDetail };
