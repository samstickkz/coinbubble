import React from "react";
import Foot from "./foot.css";
import Logo from "./../../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function footer() {
  return (
    <section id="hlop">
      <div className="hlo"></div>
      <footer className="footer">
        <div className="column lg">
          <img src={Logo} alt="CoinBubble Logo" className="logo" />

          <div className="sub-logos">
            {/* Additional CoinBubble logos can be added here */}
            <small className="ftsmall">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </small>
            <div className="ftlogo">
              <FaFacebook className="lgn" />
              <FaTwitter className="lgn" />
              <FaInstagramSquare className="lgn" />
              <FaLinkedin className="lgn" />
              <IoLogoYoutube className="lgn" />
            </div>
            {/* Add more as needed */}
          </div>
        </div>

        <div className="column">
          <h4>Product</h4>
          <ul>
            <li>Buy & Sell</li>
            <li>Cards</li>
            {/* Add more features as needed */}
          </ul>
        </div>

        <div className="column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Blog</li>
            {/* Add more company-related links as needed */}
          </ul>
        </div>

        <div className="column">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Report a bug</li>
            <li>Bounty</li>
            {/* Add more support-related links as needed */}
          </ul>
        </div>

        <div className="column">
          <h4>Contact Us</h4>
          <ul>
            <li>© 2023 Your Company Name. All Rights Reserved.</li>
            <li>win@coinubble.com</li>
            <li>+2347032346910</li>
          </ul>
        </div>

        {/* horizontal line*/}
      </footer>
      <div className="hlo"></div>
      <div className="hloup">
        <small className="hlpbg">Copyright © 2024 Coinbubblr</small>
        <small className="hlpbg">
          All Rights Reserved |{" "}
          <span className="spc">Terms and Conditions</span> |{" "}
          <span className="spc">Privacy Policy</span>
        </small>
      </div>
    </section>
  );
}

export default footer;
