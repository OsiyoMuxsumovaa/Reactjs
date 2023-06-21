import React, { Component } from 'react'
import "./peoplechoose.css"
import { Link } from "react-router-dom";
const PeopleChoose = () => {
  
    return (
      <div className='choosebg'>
     <h1>Why people choose us</h1>
     <p>Freemium advisor buzz rockstar graphical user <br/> interface client iPhone. Inftastructure customer<br/> assets pitch research</p>
    <div className="lines">
     <div className="textline1">
        <h1>Always online service </h1>
        <p>Leverage paradigm shift focus<br/> market infrastructure</p>
     </div>
     <div className="textline2">
        <h1>Instant medicine </h1>
        <p>Leverage paradigm shift focus<br/> market infrastructure</p>
     </div>
     </div>
     <div className="lines1">
     <div className="textline3">
        <h1> Easy make appointment</h1>
        <p>Leverage paradigm shift focus<br/> market infrastructure</p>
     </div>
     <div className="textline4">
        <h1> Always doctor</h1>
        <p>Leverage paradigm shift focus<br/> market infrastructure</p>
     </div>
     </div>
     <div className="animationboxx"><h1>Your health! </h1></div>
      </div>
    );
  };


export default PeopleChoose;