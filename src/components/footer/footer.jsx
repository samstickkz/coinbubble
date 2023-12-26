import React from "react";
import Foot from "./foot.css";
import Logo from "./../../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function footer() {
  return (
    <footer className="footer">
      <div className="column">
        <LazyLoadImage
          src={Logo}
          alt="CoinBubble Logo"
          className="logo"
          effect="blur"
        />
        <div className="sub-logos">
          {/* Additional CoinBubble logos can be added here */}
          <LazyLoadImage
            src={Logo}
            alt="CoinBubble Logo"
            className="sub-logo"
            effect="blur"
          />
          <LazyLoadImage
            src={Logo}
            alt="CoinBubble Logo"
            className="sub-logo"
            effect="blur"
          />
          {/* Add more as needed */}
        </div>
      </div>

      <div className="column">
        <h4>Product</h4>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
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
  );
}

export default footer;
