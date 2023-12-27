import React from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./../../assets/logo.png";

const NavbarComponent = () => {
  return (
    <nav className="container navcon">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="CoinBubble Logo" loading="lazy" />
        </div>

        <div className="navcenter">
          <select name="cars" id="cars">
            <option value="volvo">Features</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <a href="news.asp" className="navsp">
            Company
          </a>{" "}
          <select name="cars" id="cars">
            <option value="volvo">Company</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="r-btn">
          <small className=""></small>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className=""></button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
