import React from "react";
import Navbar from "../components/Navbar";
import CompanyApproach  from "../components2/CompanyApproach";
import CompanyRepost  from "../components2/CompanyRepost";
import CompanyDocCategory  from "../components2/CompanyDocCategory";
import Footer from "../components/Footer";


const Company = () => {
  return (
    <div>
      <Navbar />
      <CompanyRepost/>
      <CompanyDocCategory/>
      <CompanyApproach/>
     
      <Footer/>
    </div>
  );
};

export default Company;
