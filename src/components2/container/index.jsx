import React from "react";

import CompanyApproach from "../CompanyApproach";
import CompanyDocCategory from "../CompanyDocCategory";
import CompanyRepost from "../CompanyRepost";

import "./index.css";

const MyPage = () => {
  return (
    <div className="mypage-container">
      <CompanyRepost />
      <CompanyDocCategory />
      <CompanyApproach />
     
     
    </div>
  );
};

export default MyPage;
