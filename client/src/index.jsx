import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import ServicePage from './components/pages/services/Services'
import OnlineOrder from './components/pages/online-order/OnlinePickUp'
import Portfolio from './components/pages/portfolio/Portfolio'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/'>
        <HomePage />
      </Route>
    </BrowserRouter>

    <BrowserRouter>
      <Route path='/services'>
        <ServicePage />
      </Route>
    </BrowserRouter>

    <BrowserRouter>
      <Route path='/menu'>
        <Menu />
      </Route>
    </BrowserRouter>

    <BrowserRouter>
      <Route path='/portfolio'>
        <Portfolio />
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
