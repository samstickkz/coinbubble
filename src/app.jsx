import React from "react";
import NavbarComponent from "./components/nav/NavbarComponent.js";
import Homepage from "./components/homepage/homepage.jsx";
import Trade from "./components/trade/trade.jsx";
import Portfolio from './components/portfolio/portfolio.jsx'

const app = () => {
  return (
    <>
      <NavbarComponent />
      <Homepage />
      <Trade />
      <Portfolio/>
    </>
  );
};

export default app;
