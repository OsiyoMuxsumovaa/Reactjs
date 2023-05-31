import React from "react";
import "./answers.css";
import answerService from '../MainDoctorsAnswer/answerService.png'

const MainDoctorsAnswer = () => {
  return (
    <div className="doc-answer">
     <h1>Post your questions <br/> our experts are ready to <br/> answer</h1>
     <p>We service to you 24/7 with ensure 100% care</p>
     <li>Development Facebook incubator stealth </li>
     <li>Development Facebook incubator stealth churn </li>
     <li>Development Facebook incubator stealth </li>
     <img src={answerService} alt="jkl" />
     <button>Book an Appointment</button>
    </div>
  );
};

export default MainDoctorsAnswer;