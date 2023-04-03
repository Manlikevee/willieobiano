import React from "react";

import LayoutLight from "../../component/Layoutlight/Layoutlight";


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
  );
}

export default NotableAchievement;
