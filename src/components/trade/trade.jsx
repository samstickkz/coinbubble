import React from "react";
import Trades from "./trades.css";
import { FaCheckCircle } from "react-icons/fa";

function trade() {
  return (
    <section id="tradesec">
      <div className="container trade">
        <div className="trade_up">
          <h2 className="tdt">
            Trade Bitcoin, Ethereum, Dogecoin <br /> and 50+ other coins.
          </h2>
        </div>
        <div className="trade_down">
          {" "}
          <div className="td_row">
            <FaCheckCircle />

            <div className="para">
              <h4 className="h4t">Buy and sell crypto in minutes</h4>
              <p className="para ptext">
                Lorem ipsum dolor sit amet consectetur.
                <br /> At cursus diam sagittis maecenas. Aliquam <br />{" "}
                ultricies tristique augue
              </p>
            </div>
          </div>
          <div className="td_row">
            <FaCheckCircle />

            <div className="para">
              <h4 className="h4t">Buy and sell crypto in minutes</h4>
              <p className="para ptext">
                Lorem ipsum dolor sit amet consectetur.
                <br /> At cursus diam sagittis maecenas. Aliquam <br />{" "}
                ultricies tristique augue
              </p>
            </div>
          </div>
          <div className="td_row">
            <FaCheckCircle />

            <div className="para">
              <h4 className="h4t">Buy and sell crypto in minutes</h4>
              <p className="para ptext">
                Lorem ipsum dolor sit amet consectetur.
                <br /> At cursus diam sagittis maecenas. Aliquam <br />{" "}
                ultricies tristique augue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default trade;
