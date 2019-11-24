import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

ReactDOM.render(
  [<Main key="1" />, <Footer key="2" />],
  document.getElementById("root")
);
