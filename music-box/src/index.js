import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import './assets/css/reset.css';
import './assets/css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <HomePage/>
  </React.StrictMode>,
  document.getElementById('root')
);


