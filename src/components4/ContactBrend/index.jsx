import React, { Component } from 'react'
import "./brend.css"
import doctorbrend from "../ContactBrend/doctorbrend.png"

import { Link } from "react-router-dom";
const ContactBrend = () => {
  
    return (
      <div className='brend-bg'>
     <h1> We find the best doctors for <br/> your health in area</h1>
     <p>Leverage paradigam shift focus market infrastructure termsheet </p>
     <button>Book Now</button>
     <div className="logo-doctor-brend">
        <img src={doctorbrend} alt="logo" />
        </div>
        <div className="fonts">
        <h1>AMAZON</h1>
         <h1>NETFLIX</h1>
         <h1>GOOGLE</h1>
         <h1>MICROSOFT</h1>
         <h1>INSTAGRAM</h1>
        </div>
         

      
      </div>
    );
  };


export default ContactBrend;