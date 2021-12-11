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
