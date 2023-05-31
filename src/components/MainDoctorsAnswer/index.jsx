import React from "react";
import "./answers.css";
import answerService from '../MainDoctorsAnswer/answerService.png'

const MainDoctorsAnswer = () => {
  return (
    <div className="doc-answer">
     <h1>Post your questions <br/> our experts are ready to <br/> answer</h1>
     <p>We service to you 24/7 with ensure 100% care</p>
     <div className="li_line">
     <li>Development Facebook incubator stealth </li>
     <li>Development Facebook incubator stealth churn </li>
     <li>Development Facebook incubator stealth </li>
     </div>
     <div className="answerslogo">
     <img src={answerService} alt="jkl" />
     </div>
     <button className="button">Book an Appointment</button>
     
     <div className="doc-answerr">
        <h1>Schedule an imperson or <br/>virtual  appointment today </h1>
        <button className="buttonn">Book an Appointment</button>
     </div>
    </div>
  );
};

export default MainDoctorsAnswer;