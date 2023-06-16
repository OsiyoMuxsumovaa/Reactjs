import React from "react";
import "./articles.css";
import Avatar from "../MainArticles/docImg.png";
import Ava from "../MainArticles/docImg1.png"
import Avatarr from "../MainArticles/docImg2.png"


const MainArticles = () => {
  return (
    <div className="backround-articles">
     <p>ARTICLES & NEWS</p>
     <h1>Our articles on health nd <br/> personal wellness </h1>

   
    <div className="cards-container">
        <div className="cards">
            <img src={Avatar} alt="avatar" />
            <h1>ARTICLES</h1>
            <p><b>Should you be tested post <br/> covid?</b></p>
            <ul>Link Arrow </ul>
        </div>
    </div>

    <div className="cards-container2">
        <div className="cards2">
            <img src={Ava} alt="avatar" />
            <h1>ARTICLES</h1>
            <p><b>Overeatine? Mindfullnes <br/> exercises can support</b> </p>
            <ul>Link Arrow </ul>
        </div>
    </div>

    <div className="cards-container3">
        <div className="cards3">
            <img src={Avatarr} alt="avatar" />
            <h1>ARTICLES</h1>
            <p><b>Can vitamin Dssuplements <br/> prevent health issues?</b></p>
            <ul>Link Arrow </ul>
        </div>
        </div>
    </div>


     
   
  );
};

export default MainArticles;