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
    <section>
      <footer className="footer">
        <div className="column">
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
              <FaLinkedin />
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
            {/* Add more company-related links as needed */}
          </ul>
        </div>

        <div className="column">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            {/* Add more support-related links as needed */}
          </ul>
        </div>

        <div className="column">
          <h4>Footer</h4>
          <p>© 2023 Your Company Name. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default footer;
