import React, { Component } from "react";
import "./repost.css";
import logo99 from "../CompanyRepost/health-images-fb.webp"
import { Link } from "react-router-dom";
const CompanyRepost = () => {
  return (
    <div className="backgroundd">
      <div className="logo-containerr">
        <img src={logo99} alt="logo" />
      </div>

      <h1>
        We Take Care Of <br /> our Health{" "}
      </h1>
      <div className="linep">
        <p> No waiting period</p>
        <p>Instant Health Repost </p>
      </div>

      <h3>
        We provides always our best services for our clients and new <br />{" "}
        listening what they saying about me and about my care and <br />
        services
      </h3>
      <button>Book for Schedule</button>

      <div className="boxnum">
        <div className="numbers">
          <p>1k+</p>
          <p>09</p>
          <p>450</p>
        </div>
        <div className="words">
          <p>Satisfy</p>
          <p>Expert Doctors</p>
          <p>Pantients</p>
        </div>
      </div>

      <h2>
        How To Get Help <br /> From Us
      </h2>
      <div className="tree-boxs">
        <div className="box1">
          <h1>Book an Appointment</h1>
          <p>
            Online or n-center, we take the time to
            <br /> learn all about you and go beyond the <br /> syptoms to find
            the root of your <br /> condition{" "}
          </p>
        </div>
        <div className="box2">
          <h1>Get Personalized lab work</h1>
          <p>
            Online or n-center, we take the time to
            <br /> learn all about you and go beyond the <br /> syptoms to find
            the root of your <br /> condition{" "}
          </p>
        </div>
        <div className="box3">
          <h1>Start your Plan</h1>
          <p>
            Online or n-center, we take the time to
            <br /> learn all about you and go beyond the <br /> syptoms to find
            the root of your <br /> condition{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyRepost;
