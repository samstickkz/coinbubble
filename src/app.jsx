import React from "react";
import NavbarComponent from "./components/nav/NavbarComponent.js";
import Homepage from "./components/homepage/homepage.jsx";
import Trade from "./components/trade/trade.jsx";

const app = () => {
  return (
    <>
      <NavbarComponent />
      <Homepage />
      <Trade />
    </>
  );
};

export default app;
