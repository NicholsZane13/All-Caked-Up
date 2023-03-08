import React, { useEffect, useState } from "react";
import HomePage from "./components/pages/home/HomePage";
import Menu from "./components/pages/menu/Menu";
import ServicePage from "./components/pages/services/Services";
import OnlineOrder from "./components/pages/online-order/OnlinePickUp";
import Portfolio from "./components/pages/portfolio/Portfolio";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import Login from "../src/components/pages/signup-login/Login";
import Signup from "../src/components/pages/signup-login/Signup";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
        <div align="center">
          {checked ? (
            <Chip
              icon={<LockIcon />}
              label="Log In"
              variant="outlined"
              color="info"
            />
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="info"
            />
          )}
          <br />

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        {checked ? <Login /> : <Signup />}
      </Paper>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Menu />} path="/menu" />
            <Route element={<ServicePage />} path="/services" />
            <Route element={<Portfolio />} path="/portfolio" />
            <Route element={<HomePage />} path="/" />
            <Route path="*" element={<div>Page Not Found!</div>} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
