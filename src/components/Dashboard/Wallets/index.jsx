import React from "react";
import "./index.scss";

import { Button } from "@material-ui/core";

const Wallets = (props) => {
  return (
    <div className="wallets">
      <div className="title">
        <h3>Wallets</h3>
        <p>Total (08)</p>
      </div>
      <div className="viewList">
        <div className="item">
          <div className="contentLeft">
            <div className="avatar">
              <img alt="Remy Sharp" src="./assets/images/eth.png" />
            </div>

            <p className="name">ETH</p>
          </div>
          <div className="contentRight">
            <p>9999999999554 ETH</p>
          </div>
        </div>
        <div className="item">
          <div className="contentLeft">
            <div className="avatar">
              <img alt="Remy Sharp" src="./assets/images/lem.png" />
            </div>
            <p className="name">LEM</p>
          </div>
          <div className="contentRight">
            <p>9999999999554 LEM</p>
          </div>
        </div>
        <div className="item">
          <div className="contentLeft">
            <div className="avatar">
              <img alt="Remy Sharp" src="./assets/images/tether.png" />
            </div>
            <p className="name">TETHER</p>
          </div>
          <div className="contentRight">
            <p>9999999999554 TETHER</p>
          </div>
        </div>
        <div className="item">
          <div className="contentLeft">
            <div className="avatar">
              <img alt="Remy Sharp" src="./assets/images/bnb.png" />
            </div>
            <p className="name">BNB</p>
          </div>
          <div className="contentRight">
            <p>9999999999554 BNB</p>
          </div>
        </div>
      </div>
      <div className="actions">
        <Button
          className="btnAdd"
          startIcon={
            <img width={16} alt="" src="./assets/images/add-icon.png" />
          }
        >
          Add token
        </Button>
      </div>
    </div>
  );
};

export default Wallets;
