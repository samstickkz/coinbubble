// CJ.js
import React from "react";
import Ref from "./../../assets/coin/ref.png";
import Cjs from "./cjs.css"; // Assuming this is the correct import path for your CSS file

function CJ() {
  return (
    <div className="main">
      <div className="cjt">
        <h2 className="crypto-journey-title">
          Starting your crypto journey <br /> in easy steps
        </h2>
      </div>

      <div className="feat">
        <div className="hoimg">
          <img src={Ref} alt="Reference" className="refn" />
          <div className="feat-box">
            <h3 className="feat-title">Create an account</h3>
            <small className="feat-desc">
              Choose the right account type and verify your identity.
            </small>
          </div>
        </div>
        <div className="dashed-line horizontal"></div>
        <div className="hoimg">
          <img src={Ref} alt="Reference" className="refn" />

          <div className="feat-box">
            <h3 className="feat-title">Create an account</h3>
            <small className="feat-desc">
              Choose the right account type and verify your identity.
            </small>
          </div>
        </div>
        <div className="dashed-line horizontal"></div>
        <div className="hoimg">
          <img src={Ref} alt="Reference" className="refn" />{" "}
          <div className="feat-box">
            <h3 className="feat-title">Create an account</h3>
            <small className="feat-desc">
              Choose the right account type and verify your identity.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CJ;
