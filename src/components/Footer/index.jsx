import React from "react";
import "./footer.css";
import logo from "../Footer/logotipp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
        
    <div className="logo-container">
        <img src={logo} alt="logo" />
        <h1>PHG</h1>
        <p>Build a website for your medical <br /> and healthcare business today. </p>
    </div>

    <div className="footer-links">
        <ul>
            <li>PRODUCT
                <li>Home</li>
                <li>Company</li>
                <li>Services</li>
                <li>Blog</li>
            </li>
            <li>RESOURCET
                <li>Service Page</li>
                <li>Blog Past</li>
                <li>404</li>
                <li>Passvord</li>
            </li>
            <li>COMPANY
                <li>Contact</li>
                <li>Style Guide</li>
                <li>More Temlates</li>
            </li>
            <li>CONTACT US
                <p>+008 112 345 67</p>
                <li>info@admin.com</li>
            </li>
        </ul>
    </div>
      {/* <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/company"}>Company</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contacts"}>Contact</Link>
      </div> */}
    </footer>
  );
};
export default Footer;
