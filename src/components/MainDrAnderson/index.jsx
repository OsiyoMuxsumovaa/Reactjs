import React from "react";
import "./maindr.css";
import "./animation.css";
import helplogo from "../MainDrAnderson/help.jpg"
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
const MainDrAnderson = () => {
  return (
    <div className="dr-backround">
      <h1>DR.MATTHEW ANDERSON </h1>
      <p>
      These doctors are the right <br/>choice for you
      </p>
      <div className="helplogoo">
      <img src={helplogo} alt="jkl" />
      <motion.div 
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
    </div>
  );
};

export default MainDrAnderson;
