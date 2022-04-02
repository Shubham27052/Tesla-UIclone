import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainApp from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <MainApp/>
  </Router>

 ,
  document.getElementById('root')
);
