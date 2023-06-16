import React from "react";
import "./farn.css";
import  doctorTF from "../TFarn/doctorTF.png";
import { Link } from "react-router-dom";

const TFarn = () => {
  return (
 <div className="doctorTF-bg">
  <h1>What our patients say</h1>
 <p> Ammet minim mollit non deserunt ullamco est sit aliqua<br/> dolor  do emat sint. Velit officia consequat duis ennim <br/>velit mollit. Exercitation veniam</p> 
 <div className="logo-doctorTF">
        <img src={doctorTF} alt="logo" />
        <p>It is a long established fact that a reader will be <br/> istracted by the readabdle content of the page <br/> when lookng its layout. The point of using <br/> Lorem Impusim is That</p>
        </div>

        <div className="animationbox"><h1>Tasniks Farn</h1></div>
 </div>
  );
};
export default TFarn;