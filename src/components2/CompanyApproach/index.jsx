import React from "react";
import "./approach.css";
import { Link } from "react-router-dom";

const CompanyApproach = () => {
  return (
    <div className="backgrounddd">
      <h1>Our Approach</h1>
      <p>
        Receive your tailored health plan, created <br /> your Bravaa
        supplements, and more
      </p>

      <div class="letter-image">
        <div class="animated-mail">
          <div class="back-fold"></div>
          <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title"></div>
            <div class="letter-context"></div>
            <div class="letter-stamp">
              <div class="letter-stamp-inner"></div>
            </div>
          </div>
          <div class="top-fold"></div>
          <div class="body"></div>
          <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
      </div>
      <div className="conbox">
        {/* <div className="conbox1"></div>
    <div className="conbox2"></div>
    <div className="conbox3"></div> */}
        <h1>
          Getting to know you <br /> & your health.
        </h1>
        <h1>
          In-depth testing
          <br /> & analysis.
        </h1>
        <h1>
          Personalized
          <br /> health plan
        </h1>
      </div>
      <div className="conboxx">
        <p>
          Your Brava Care Team takes <br />
          the time to get to know you
        </p>
        <p>
          Your Brava Care Team takes <br />
          the time to get to know you
        </p>
        <p>
          Your Brava Care Team takes <br />
          the time to get to know you
        </p>
      </div>

      <div>
      
      </div>
    </div>
  );
};

export default CompanyApproach;
