import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import Main from "./components/Main";
import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Main key="1" />, <Footer key="2" />
  </Provider>,
  document.getElementById("root")
);
