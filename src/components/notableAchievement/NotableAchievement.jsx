import React from "react";
import image from "./images/Rectangle 92.png";
import image1 from "./images/Rectangle 94.png";
import image2 from "./images/Rectangle 93.png";
import image3 from "./images/Rectangle 95.png";
import image4 from "./images/Rectangle 96.png";
import image5 from "./images/Rectangle 97.png";
import image6 from "./images/Rectangle 98.png";
import LayoutLight from "../../component/Layoutlight/Layoutlight";
import imageOne from "./images/Group 60.png";

import Convention from "./Convention";
import Stadium from "./Stadium";
import Hotel from "./Hotel";
import Honour from "./Honour";
import International from "./International";
import "./style/style.css";
function NotableAchievement() {
  return (
    <LayoutLight>
      <div className="container achievedPage">
        <International />
        <Convention />
        <Stadium />
        <Hotel />
        <Honour />
      </div>
    </LayoutLight>
    // <>
    //   notable
    //   <div className="container">

    //   </div>
    // </>
  );
}

export default NotableAchievement;
