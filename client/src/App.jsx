import React, { useEffect, useState }  from 'react'
import HomePage from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import ServicePage from './components/pages/services/Services'
import OnlineOrder from './components/pages/online-order/OnlinePickUp'
import Portfolio from './components/pages/portfolio/Portfolio'
import {  Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
  
  <Router>
    <Header />
  <Routes>
         <Route element={<Menu />} path="/menu" />
         <Route element={<ServicePage />}path="/services" />
         <Route element={<Portfolio />}path="/portfolio" />
         <Route element={<HomePage />} path="/" />
         <Route path="*" element={<div>Page Not Found!</div>} />
  </Routes>
    {/* <Footer /> */}
  </Router>
  );
}

export default App;
