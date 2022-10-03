import React, { useState } from "react";
import indicator from "./contactless-indicator.png";
import chip from "./chip.png";
import visa from "./visa.png";
import "./Card.css";

function Card() {
  const [cardStyle, setCardStyle] = useState("black");

  const changeToSilver = () => {
    setCardStyle("gray");
  };
  const changeToRed = () => {
    setCardStyle("red");
  };
  const changeToBlack = () => {
    setCardStyle("black");
  };
  return (
    <div className="container">
      <div className="color" style={{ background: cardStyle }}>
        <div className="card">
          <h3 className="bank">bank</h3>
          <img className="chip" src={chip} alt="." />
          <img className="indicator" src={indicator} alt="." />
          <h3 className="number">1998 0922 2211 2211</h3>
          <h5 className="card-holder">
            <span>card holder</span>
            <br />
            usmon usmon
          </h5>
          <h5 className="valid">
            <span>expiry date</span>
            <br />
            20/30
          </h5>
          <img className="logo" src={visa} alt="visa" />
        </div>
      </div>
      <button onClick={changeToSilver}>silver</button>
      <button onClick={changeToRed}>red</button>
      <button onClick={changeToBlack}>black</button>
    </div>
  );
}

export default Card;
