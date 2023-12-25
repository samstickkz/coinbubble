import React from "react";
import BTC from "./../../assets/coin/btc.png";
import ETH from "./../../assets/coin/eth.png";
import LTC from "./../../assets/coin/ltc.png";
import XRP from "./../../assets/coin/xrp.png";
import BCH from "./../../assets/coin/bch.png";
import BNB from "./../../assets/coin/bnb.png";
import EOS from "./../../assets/coin/eos.png";
import XLM from "./../../assets/coin/xlm.png";
import TRX from "./../../assets/coin/trx.png";
import ADA from "./../../assets/coin/ada.png";
import XMR from "./../../assets/coin/xmr.png";
import DASH from "./../../assets/coin/dash.png";

import Bns from "./bns.css";

function bnsell() {
  return (
    <section>
      <div className="bncon">
        <h2 className="bnsellh2">
          Buy, sell and store these plus 1500+ more assets
        </h2>
        <div className="coins">
          <div className="coinsgrp">
            <img src={BTC} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={ETH} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={LTC} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <smal className="sbg" l>
              $12,000
            </smal>
          </div>
          <div className="coinsgrp">
            <img src={XRP} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={BCH} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={BNB} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={EOS} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={BTC} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={BTC} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={BTC} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={XLM} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={TRX} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={DASH} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={XMR} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
          <div className="coinsgrp">
            <img src={ADA} className="cnsize" />
            <p>Bitcoin (BTC)</p>
            <small className="sbg">$12,000</small>
          </div>
        </div>

        <div className="lined"></div>
      </div>
    </section>
  );
}

export default bnsell;
