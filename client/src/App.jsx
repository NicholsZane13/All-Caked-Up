import React, { useEffect, useState }  from 'react'
import HomePage from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import ServicePage from './components/pages/services/Services'
import OnlineOrder from './components/pages/online-order/OnlinePickUp'
import Portfolio from './components/pages/portfolio/Portfolio'

function App() {
  return (
  <div className="">
    <div className="">
      {/*<HomePage />
       <Menu />*/}
      <ServicePage />
      {/*<OnlineOrder />
      <Portfolio /> */}
    </div>
  </div>
  );
}

export default App;
