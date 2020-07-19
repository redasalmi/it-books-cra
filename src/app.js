import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path={["/", "/books", "/books/:search", "/books/:search/:page"]}
          component={Books}
        />
        <Route path="/book/detail/:bookId" component={BookDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
