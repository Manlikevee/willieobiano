import React from "react";
import myImage from "./images/earlylife.png";
import Previousposition from "./Previousposition";

const EarlylifeAb = ({ title, text, texttwo,image }) => {
  return (
    <div>
      <section className=" skills" aria-label="our skills">
        <div className="">
          <p className="section-subtitle">Early Life</p>
          <div className="skills-wrapper">
            <div className="divside d-column fixedtop">
              {/* <img src={myImage} alt="" /> */}
              <img src={image} alt="" />
              <a href="mailto:info@Williebiano.com" className="btn has-before">
                info@Williebiano.com
              </a>
            </div>
            <div>
              <div className="earlylife">
                <h2 className=" h2 ">{title}</h2>
                <div className="splitline" />
                <br />
                <p className="section-text">{text}</p>
                <p className="section-text">{texttwo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlylifeAb;
