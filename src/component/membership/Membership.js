import React from 'react'
import './member.css'
import image from './images/first.png'
import secImage from './images/Frame 15.png'
import thirdImg from './images/Frame 16.png'
function Membership() {
  return (
    <div className="container memmberInformation">
      <div className="memberInfo">
        <h3>Membership in Professional associations</h3>
        <p>
          Willie Obaino is one of Africa’s leading investors and
          philanthropists. He is the Founder.
        </p>
      </div>
      <div className="images">
        <img src={image} alt="" />
        <img src={thirdImg} alt="" />
        <img src={secImage} alt="" />
      </div>
    </div>
  );
}

export default Membership