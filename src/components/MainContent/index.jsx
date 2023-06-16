import React from "react";
import "./hcomp.css";
import help1 from "..//MainContent/help1.png";

const MainContent = () => {
  return (
    <div className="home-container">
      <h1>
        Health is your <br /> greatest asset
      </h1>
      <p>
        Lorem ipsum dolor sit amet. consectetur <br /> adipiscing elit, sed do
        elismod.
      </p>
      <button className="maincontents-btn">Book an Appointment</button>
      <div className="help1">
        <img src={help1} alt="jkll" />
      </div>
    </div>
  );
};

export default MainContent;
