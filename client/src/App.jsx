import React, { useEffect, useState }  from 'react'
import Home from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import Services from './components/pages/services/Services'
import OnlineOrder from './components/pages/online-order/OnlinePickUp'
import Portfolio from './components/pages/portfolio/Portfolio'
import './App.css';

function App() {
  return (
  <div className="">
    <div className="">
      <Home />
      <Menu />
      <Services />
      <OnlineOrder />
      <Portfolio />
    </div>
  </div>
  );
}

export default App;
