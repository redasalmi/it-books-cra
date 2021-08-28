import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QueryClientProvider from './QueryClient';

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import NewBooks from './pages/NewBooks';
import BooksSearch from './pages/BooksSearch';
import BookDetail from './pages/BookDetail';
import Footer from './components/Footer';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <QueryClientProvider>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
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
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
