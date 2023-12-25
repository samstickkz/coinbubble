// CJ.js
import React from "react";
import Ref from "./../../assets/coin/ref.png";
import Cjs from "./cjs.css"; // Assuming this is the correct import path for your CSS file

function CJ() {
  return (
    <section id="scj">
      <div className="main">
        <div className="cjt">
          <h2 className="crypto-journey-title">
            Starting your crypto journey <br /> in easy steps
          </h2>
        </div>

        <div className="feat">
          <div className="hoimg">
            <img src={Ref} alt="Reference" className="refn" />
          </div>
          <div className="dashed-line horizontal"></div>
          <div className="hoimg">
            <img src={Ref} alt="Reference" className="refn" />
          </div>
          <div className="dashed-line horizontal"></div>
          <div className="hoimg">
            <img src={Ref} alt="Reference" className="refn" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CJ;
