import React, { Component } from 'react'
import "./contactus.css"
import { Link } from "react-router-dom";
const ContactUs = () => {
  
    return (
        <div className="dr-backround">
        <h1>Contact Us</h1>
        <p>
          Get in touch to book your first <br /> appointment
        </p>
  
        <div className="background-btn">
          <form className="line-button">
            <input type="text" placeholder=" First Name"></input>
            <input placeholder="Last Name"></input>
            <input type="number" placeholder="Phone Number "></input>
            <input type="email" placeholder="Email"></input>
          </form>
        </div>
        <textarea
          rows="4"
          cols="50"
          name="comment"
          form="usrform"
          placeholder="Enter text here..."
        ></textarea>
        <button type="submit">Submit Now</button>
      </div>
    );
  };


export default ContactUs;