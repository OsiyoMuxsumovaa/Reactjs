import React from "react";
import "./iiindex.css";

import ContactBrend from "../ContactBrend";
import ContactUs from "../ContactUs";
import Location from "../Location";
import PeopleChoose from "../PeopleChoose";

const MyPageee = () => {
  return (
    <div className="mypage-containerrr">
      <ContactBrend />
      <ContactUs />
      <Location />
      <PeopleChoose />
      <h1>my pagee</h1>
    </div>
  );
};

export default MyPageee;