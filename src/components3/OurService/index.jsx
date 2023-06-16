import React from "react";
import "./ourservice.css";
import { Link } from "react-router-dom";
const OurService = () =>{
    return(
      <div className="our-service-bg">
        <h1>Our Service</h1>
    <p> Ammet minim mollit non deserunt ullamco est sit aliqua dolor <br/> do emat sint. Velit officia consequat</p>

    <div className="cd-line">
     <div className="cardioligy">
      <h1>Cardioligy</h1>
    <p> Ammet minim mollit non deserunt<br/> ullamco est sit aliqua dolor  do emat<br/> sint. Velit officia consequat</p>    <Link to={"/home/MainArticles"}>Learn more</Link>
    </div>
     <div className="neurology">
      <h1>Neurology</h1>
    <p> Ammet minim mollit non deserunt<br/> ullamco est sit aliqua dolor do emat <br/>sint. Velit officia consequat</p>    <Link to={"/home/MainArticles"}>Learn more</Link>
    </div>
     <div className="dents">
      <h1>Dentist</h1>
    <p> Ammet minim mollit non deserunt <br/>ullamco est sit aliqua dolor  do emat <br/>sint. Velit officia consequat</p>    <Link to={"/home/MainArticles"}>Learn more</Link>
    </div>
    </div>

    <div className="mu-line">
     <div className="medicine">
      <h1>Medicine</h1>
    <p> Ammet minim mollit non deserunt <br/>ullamco est sit aliqua dolor  do emat<br/> sint. Velit officia consequat</p>    <Link to={"/home/MainArticles"}>Learn more</Link>
    </div>
     <div className="orthopedic">
      <h1>Orthopedic</h1>
    <p> Ammet minim mollit non deserunt<br/> ullamco est sit aliqua dolor do emat <br/>sint. Velit officia consequat</p>    <Link to={"/home/MainArticles"}>Learn more</Link>
    </div>
    <div className="urology">
      <h1>Urology</h1>
    <p> Ammet minim mollit non deserunt<br/> ullamco est sit aliqua dolor do emat<br/> sint. Velit officia consequat</p>    <Link to={"/home/MainArticles"}>Learn more</Link>
    </div>
  
    </div>

      </div>
       );
};

export default OurService;