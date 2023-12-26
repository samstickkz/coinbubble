import React from "react";
import Down from "./down.css";
import Vector from "./../../assets/Vector.png";
import Vector2 from "./../../assets/Vector2.png";
import Vector3 from "./../../assets/vector3.png";

function download() {
  return (
    <section id="sdw">
      <div className="dw">
        <h2 className="dwh">
          Get the most out of <br /> your crypto
        </h2>

        <div className="ddw">
          {" "}
          <img src={Vector} className="dwlogo" />
          <img src={Vector2} className="dwlogo" />
        </div>

        <img src={Vector3} className="dwapp" />
      </div>
      ;
    </section>
  );
}

export default download;
