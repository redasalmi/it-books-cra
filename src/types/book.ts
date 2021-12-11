export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface BooksData {
  books: Book[];
  error: string;
  page?: string;
  total: string;
}

export interface BookData extends Book {
  authors: string;
  desc: string;
  error: string;
  isbn10: string;
  language: string;
  pages: string;
  publisher: string;
  rating: string;
  year: string;
}
