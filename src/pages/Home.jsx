import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import MainBrendContent from "../components/MainBrendContent";
import MainServices from "../components/MainSevices";
import MainDrAnderson from "../components/MainDrAnderson";
import MainDoctorsAnswer from "../components/MainDoctorsAnswer";
import MainArticles from "../components/MainArticles";
import MainTestimonialis from "../components/MainTestimonials/index";
import Footer from "../components/Footer/index.jsx"

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <MainBrendContent />
      <MainServices />
      <MainDrAnderson />
      <MainDoctorsAnswer />
      <MainArticles />
      <MainTestimonialis />
     
      <Footer/>
    </div>
  );
};

export default Home;
