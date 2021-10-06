import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {FcApproval } from "react-icons/fc";

ReactDOM.render(
  <React.StrictMode>  
    <App />
    <h1>being rsk {window.screen.width}</h1>
    <FcApproval/>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
