import React from "react";
import "./choose.css";
import { Link } from "react-router-dom";
import health from "../ChooseService/health.png";

const ChooseServise = () => {
 return(
 <div className="chooseservice">
  <h1>Why choose uidex <br/> health service</h1>
  <p>Amet Minim mollit non deserunt ullamco est sit aliqua <br/> dolor do emat sint. Vemit offica consequat duis enit<br/> vellit mollit. Exercitation veniam</p>
  <div className="text3">
    <h1>24/7 Medical Consultation</h1>
    <p>Amet Minim mollit non deserunt ullamco est sit<br/> aliqua  dolor do emat sint.</p>
    <h1>Healthcare Support</h1>
    <p>Amet Minim mollit non deserunt ullamco est sit<br/> aliqua  dolor do emat sint.</p>
    <h1>Proffesional Medical Team</h1>
    <p>Amet Minim mollit non deserunt ullamco est sit<br/> aliqua  dolor do emat sint.</p>
  </div>
  <div className="health-container">
  <img src={health} alt="logo" />
  </div>
</div>
 );
};

export default ChooseServise;