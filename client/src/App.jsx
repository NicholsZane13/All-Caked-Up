import React, { useEffect, useState }  from 'react'
import HomePage from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import ServicePage from './components/pages/services/Services'
import OnlineOrder from './components/pages/online-order/OnlinePickUp'
import Portfolio from './components/pages/portfolio/Portfolio'
import {  Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
  );
}

export default App;
