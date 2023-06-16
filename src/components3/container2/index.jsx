import React from "react";
import "./iindex.css";

import ChooseService from "../ChooseService";
import OurService from "../OurService";
import TFarn from "../TFarn";

const MyPagee = () => {
  return (
    <div className="mypage-containerr">
      <ChooseService />
      <OurService />
      <TFarn />
      <h1>my pagee</h1>
    </div>
  );
};

export default MyPagee;