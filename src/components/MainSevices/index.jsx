import React, { Component } from 'react'
import "./mainservices.css"
import { Link } from "react-router-dom";
const MainServices = () => {
  
    return (
      <div>
        <div className='services'>
         <h1>Services</h1>
          <p>Expriensed in multiple <br/>medical qratices </p>
          <div className='boxname'>
          <div className='mainbox'>
           <h1>Cavity Filling</h1>
           <p>inclubator stealth churn rate <br/>alpha partner network social <br/>proof business </p>
          </div>
          <div className='mainbox1'>
           <h1>Fluoride Treatment</h1>
           <p>inclubator stealth churn rate <br/>alpha partner network social <br/>proof business </p>
          </div>
          <div className='mainbox2'>
           <h1>Dental Prevention</h1>
           <p>inclubator stealth churn rate <br/>alpha partner network social <br/>proof business </p>
          </div>
          <div className='mainbox3'>
            <h1>Tooth Extraction</h1>
            <p>inclubator stealth churn rate <br/>alpha partner network social <br/>proof business </p>
            </div>
          </div>
      </div>
      </div>
    );
  };


export default MainServices;