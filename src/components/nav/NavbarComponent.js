import React from "react";
//import nav css file
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./../../assets/logo.png"; //

const NavbarComponent = () => {
  return (
    <nav className="container navcon">
      <div className="navbar">
        <div className="logo">
          <img
            src={logo}
            // height="30"

            alt="CoinBubble Logo"
          />
        </div>

        <div className="navcenter">
          <a href="default.asp" className="navsp">
            Features
          </a>

          <a href="news.asp" className="navsp">
            Company
          </a>

          <a href="contact.asp" className="navsp">
            Support
          </a>
        </div>

        <div className="r-btn">
          <small className="">samuel joseph is a big man </small>
          <button className=""></button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
