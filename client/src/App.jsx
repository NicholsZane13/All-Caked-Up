import React, { useEffect, useState }  from 'react'
import HomePage from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import ServicePage from './components/pages/services/Services'
import OnlineOrder from './components/pages/online-order/OnlinePickUp'
import Portfolio from './components/pages/portfolio/Portfolio'
import { Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
  // <div className="">
  //   <div className="">
  //     {/*<HomePage />
  //      <Menu />*/}
  //     <ServicePage />
  //     {/*<OnlineOrder />
  //     <Portfolio /> */}
  //   </div>
  // </div>
<Switch>
  <Routes>  
         <Route path="/menu">
           <Menu />
         </Route>
         <Route path="/services">
           <ServicePage />
         </Route>
         <Route path="/portfolio">
           <Portfolio />
         </Route>
         <Route path="/">
           <HomePage />
         </Route>
         <Route path="*" element={<div>Page Not Found!</div>}></Route>
  </Routes>
</Switch>
  );
}

export default App;
