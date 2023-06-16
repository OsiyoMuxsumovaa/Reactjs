import React from "react";
import "./testimonialis.css"
import drImage from "../MainTestimonials/drImg.png";
const MainTestimonialis = () => {
  
    return (
      <div className="testi-background">
         <h1>TESTIMONIALIS</h1>
         <h2><b>What our great customer say <br/> about Dr. Matthev</b></h2>
         <p>   <b>"</b><br/> Amer minim ollit non deseruntst <br/> sit aliqua dolor do emat sint offlila <br/> consequat duis enim mollit <br/> consequat duis enim mollit <br/>exercitation <br/> <b>"</b> </p>
         <h3><b>Lee Morgan, Slack,Inc</b></h3>
         <h4>New york, NY team</h4>
         <div className="blue-container">
            <div className="doctor-img">
            <img src={drImage} alt="jkl" />
            </div>
       
         </div>
      </div>
    );
  };


export default MainTestimonialis;