import { BrowserRouter, Routes, Route } from 'react-router-dom';

import QueryClientProvider from '~/QueryClient';
import Main from '~/main';
import Books from '~/routes/books';
import BookDetail from '~/routes/book-detail';

const App = () => (
  <QueryClientProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Books />} />
          <Route path='book/:bookId' element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
