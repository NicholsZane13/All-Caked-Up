import React, { useEffect, useState } from "react";
import HomePage from "./components/pages/home/HomePage";
import Menu from "./components/pages/menu/Menu";
import ServicePage from "./components/pages/services/Services";
import OnlineOrder from "./components/pages/online-order/OnlinePickUp";
import Portfolio from "./components/pages/portfolio/Portfolio";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/pages/signup-login/LandingPage";

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route element={<LandingPage />} path="/loginorsignup" />
          <Route element={<Menu />} path="/menu" />
          <Route element={<ServicePage />} path="/services" />
          <Route element={<Portfolio />} path="/portfolio" />
          <Route element={<HomePage />} path="/" />
          <Route path="*" element={<div>Page Not Found!</div>} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
