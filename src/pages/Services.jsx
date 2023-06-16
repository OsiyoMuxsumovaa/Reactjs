import React from "react";
import Navbar from "../components/Navbar";
import ChooseService  from "../components3/ChooseService";
import OurService  from "../components3/OurService";
import ServiceData  from "../components3/ServiceData";
import TFarn  from "../components3/TFarn";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ChooseService/>
      <OurService/>
      <ServiceData/>
      <TFarn/>
      <Footer/>
    </div>
  );
};

export default Services;
