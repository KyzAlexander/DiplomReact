import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import MemoizedHeader from "./components/header.js";
import RepositoryList from "./components/RepositoryList.js";

ReactDOM.render(
  <React.StrictMode>
    <MemoizedHeader />
    <RepositoryList />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
