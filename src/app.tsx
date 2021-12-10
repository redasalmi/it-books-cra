import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QueryClientProvider from './QueryClient';

import Main from './main';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';

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
