import React, { useEffect, useState }  from 'react'
import HomePage from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import Services from './components/pages/services/Services'
import OnlineOrder from './components/pages/online-order/OnlinePickUp'
import Portfolio from './components/pages/portfolio/Portfolio'
import './index.css';

function App() {
  return (
  <div className="">
    <div className="">
      <HomePage />
      {/* <Menu />
      <Services />
      <OnlineOrder />
      <Portfolio /> */}
    </div>
  </div>
  );
}

export default App;
