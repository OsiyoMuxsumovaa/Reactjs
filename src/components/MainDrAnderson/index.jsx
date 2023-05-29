import React from "react";
import "./maindr.css";
import "./animation.css";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
const MainDrAnderson = () => {
  return (
    <div className="dr-backround">
      <h1>DR.MATTHEW ANDERSON </h1>
      <p>
        Watch video to learn why he <br /> is the rigth doctor for you{" "}
      </p>
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
  );
};

export default MainDrAnderson;
