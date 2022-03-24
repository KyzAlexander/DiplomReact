import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header.js";
import RepositoryList from "./components/RepositoryList/RepositoryList.js";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RepositoryList />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
