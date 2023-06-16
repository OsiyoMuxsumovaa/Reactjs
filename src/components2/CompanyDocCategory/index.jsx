import React, { Component } from "react";
import "./category.css";
import doctr1 from "../CompanyDocCategory/doctr1.png";
import doctr2 from "../CompanyDocCategory/doctr2.png";
import doctr3 from "../CompanyDocCategory/doctr3.png";
import doctr4 from "../CompanyDocCategory/doctr4.png";
import { Link } from "react-router-dom";
const CompanyDocCategory = () => {
  return (
    <div className="background-doc">
      <h1>
        Our Top Doctor's List <br /> With Categories
      </h1>
      <li>Gastroenteroogists</li>
      <p>
        Nutrition and lifestyle changes give you the clearest <br />
        path forward with succeed{" "}
      </p>
      <div className="imgHolder">
        <div className="logtipHolder">
          <div className="logotipNum0">
            <img src={doctr1} alt="" />
            <img src={doctr2} alt="" />
          </div>
        </div>
        <div className="logotipHolder">
          <div className="logotipNum0">
            <img src={doctr3} alt="" />
            <img src={doctr4} alt="" />
          </div>
        </div>
      </div>
      <div className="words-li">
      <li>Dermotologists</li>
      <li>Cardiologists</li>
      <li>Ophthalmologists</li>
      <li>Allergists</li>
      <li>Endocrinologists</li>
      </div>
      <button className="btndoc">View All Doctor</button>
    
    </div>
  );
};

export default CompanyDocCategory;
