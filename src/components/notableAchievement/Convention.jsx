import React from "react";
import image7 from "./images/Rectangle 45.png";
import "./style/style.css";

function Convention() {
  return (
    <div className="notable convention">
      <div className="img">
        <img src={image7} alt="" />
      </div>
      <div>
        <ul className="move">
          <li>A 12,000-seater International Convention Center</li>
        </ul>
        <p>
          As part of the build-up to his exit from office after eight years,
          Governor Willie Obiano has today commissioned the ten thousand
          capacity International Convention Centre built tastefully and
          furnished to standard. With only minor finishing touches left,
          Governor Obiano decided to commission the project which is one of his
          signature projects. The commissioning of the Convention Centre was
          also marked with a merit award to deserving Anambra State indigenes
          and other non-indigenes who have partnered with the governor to make
          his modest contributions in the people’s collective drive to move the
          state forward. Obiano also recognized the efforts of his Executive
          Council Members in his efforts governing Anambra State in the past
          eight years.{" "}
        </p>
      </div>
    </div>
  );
}

export default Convention;
