import React from "react";
import Trades from "./trades.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

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
            <div className="ch">
              <FaCheck className="chb" />
            </div>

            <div className="para">
              <h4 className="h4t">Buy and sell crypto in minutes</h4>
              <small className="para ptext">
                Lorem ipsum dolor sit amet consectetur.
                <br /> At cursus diam sagittis maecenas. Aliquam <br />{" "}
                ultricies tristique augue
              </small>
            </div>
          </div>
          <div className="td_row">
            <div className="ch">
              <FaCheck className="chb" />
            </div>

            <div className="para">
              <h4 className="h4t">Buy and sell crypto in minutes</h4>
              <small className="para ptext">
                Lorem ipsum dolor sit amet consectetur.
                <br /> At cursus diam sagittis maecenas. Aliquam <br />{" "}
                ultricies tristique augue
              </small>
            </div>
          </div>
          <div className="td_row">
            <div className="ch">
              <FaCheck className="chb" />
            </div>

            <div className="para">
              <h4 className="h4t">Buy and sell crypto in minutes</h4>
              <small className="para ptext">
                Lorem ipsum dolor sit amet consectetur.
                <br /> At cursus diam sagittis maecenas. Aliquam <br />{" "}
                ultricies tristique augue
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default trade;
