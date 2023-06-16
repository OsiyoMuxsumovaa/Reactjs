import React from "react";
import "./data.css";
import serviceHelp from "../ServiceData/serviceHelp.png";
import { Link } from "react-router-dom";

const ServiceData = () => {
  return (
    <div className="ServiceData-bg">
      <h1>We are ready to <br/> help you</h1>
 <p> Ammet minim mollit non deserunt ullamco est sit aliqua<br/> dolor  do emat sint. Velit officia consequat duis ennim <br/>velit mollit. Exercitation veniam</p> 
 <h4>Presriptions & treatment plans</h4>
 <h4>Always avallable for amergency service</h4>
 <button className="ServiceData-btnn">Book an Appointment</button>
 <button className="ServiceData-btn">+2390 576 1475</button>
 <div className="logo-ServiceData">
 <img src={serviceHelp} alt="logo" />
 </div>
    </div>
 );
};
export default ServiceData;