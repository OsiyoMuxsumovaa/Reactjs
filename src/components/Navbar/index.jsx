import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from  "../Navbar/logotip.png"

const Navbar = () => {
  return (
    <header className="header">
      <div className="logotip">
      <img src={logo} alt="jkl" />
        <h1 className="logoname">PHG</h1>
       
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/company"}>Company</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contacts"}>Contactlar</Link>

          <p>(123)45-67-890</p>
          <button className="btn">Book Now</button>
        </div>
        </div>
    </header>
  );
};
export default Navbar;
