import React from "react";
import NavbarComponent from "./components/nav/NavbarComponent.js";
import Homepage from "./components/homepage/homepage.jsx";
import Trade from "./components/trade/trade.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Bnsell from "./components/bnsell/bnsell.jsx";
import Cj from "./components/cj/cj.jsx";
import Cards from "./components/card/card.jsx";
import Download from "./components/download/download.jsx";
import Foot from "./components/footer/footer.jsx";
import ReactGA from "react-ga";
ReactGA.initialize("G-X4W820CCKX");
ReactGA.pageview(window.location.pathname + window.location.search);

const app = () => {
  return (
    <>
      <NavbarComponent />
      <Homepage />
      <Trade />
      <Portfolio />
      <Bnsell />
      <Cj />
      <Cards />
      <Download />
      <Foot />
    </>
  );
};

export default app;
