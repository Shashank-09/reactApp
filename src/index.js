import React from "react";
import  ReactDOM  from "react-dom";
import App from "./project3/App";
import { BrowserRouter } from "react-router-dom";
import "./project3/index.css"


ReactDOM.render(
  <>
  <BrowserRouter>
     <App />
  </BrowserRouter>
  </>,document.getElementById('root')

);