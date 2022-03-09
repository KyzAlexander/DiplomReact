import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Header from "./components/header.js";
import CardRepository from "./components/cardRepository.js";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CardRepository />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
