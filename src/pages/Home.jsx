import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import MainBrendContent from "../components/MainBrendContent";
import MainServices from "../components/MainSevices";
import MainDrAnderson from "../components/MainDrAnderson";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainContent/>
      <MainBrendContent/>
      <MainServices/>
      <MainDrAnderson/>
    </div>
  );
};

export default Home;
