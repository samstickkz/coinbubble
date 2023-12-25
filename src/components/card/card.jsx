import React from "react";
import Cards from "./cards.css";
import Cardimg from "./../../assets/cardimg.png";

function card() {
  return (
    <section id="card">
      <div className="card-box">
        <div className="bxh">
          <div className="tt">
            <h2 className="card-title">Pay with your crypto card</h2>
            <p className="card-text">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Ornare facilisi tempus
              feugiat ornare pretium. Justo{" "}
            </p>
          </div>
          <img src={Cardimg} className="card-con" />
        </div>
      </div>
    </section>
  );
}

export default card;
