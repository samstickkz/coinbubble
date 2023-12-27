import React from "react";
import and from "./../../assets/and.png";
import andios from "./../../assets/andios.png";
import cbbhome from "./cbbhome.css";
import homephone from "./../../assets/homephone.png";

const Homepage = () => {
  return (
    <section id="homepage">
      <div className=" container homepagec">
        <div className="home_left">
          <h1 className="homeh1">
            Make crypto your <br /> superpower
          </h1>
          <small className="hss">
            Lorem ipsum dolor sit amet consectetur. At cursus diam <br />{" "}
            sagittis maecenas. Aliquam ultricies tristique augue <br /> pulvinar
            tristique auctor.
          </small>

          <div className="home_btn">
            <img src={and} />
            <img src={andios} />
          </div>
        </div>

        <div className="home_right">
          <img src={homephone} loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
