import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QueryClientProvider from './QueryClient';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import NewBooks from './pages/NewBooks';
import BooksSearch from './pages/BooksSearch';
import BookDetail from './pages/BookDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <QueryClientProvider>
      <Router>
        <Navbar />
        <Welcome />

        <main className='container content'>
          <Switch>
            <Route exact path='/' component={NewBooks} />
            <Route path={['/books/:search/:page']} component={BooksSearch} />
            <Route path='/book/:bookId' component={BookDetail} />
          </Switch>
        </main>

        <Footer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
