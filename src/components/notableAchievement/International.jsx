import React from "react";
import image1 from "./images/Rectangle 97 (1).png";
import image2 from "./images/Rectangle 98 (1).png";
import image3 from "./images/Rectangle 92 (1).png";
import image4 from './images/Rectangle 93 (1).png'
import image5 from './images/Rectangle 94 (1).png'
import image6 from './images/Rectangle 95 (1).png'
import image7 from './images/Rectangle 96 (1).png'
function International() {
  return (
    <div className="notable top">
      <div>
        <div className="content">
          <div className="texts">
            <ul>
              <li>Highly acclaimed International Cargo/Passenger Airport</li>
            </ul>
            <div>
              <p>
                When one of the largest airports in Nigeria – Anambra
                International Cargo and Passenger Airport – successfully
                concluded its maiden test flights on April 30, 2021, the feat
                was  described as “a dream come true.” The dream of building an
                airport in Anambra conceived 30 years ago was faithfully
                fulfilled by a man with a resolute and clear ambition.
              </p>
              <p>
                A visit to the four major airports in Nigeria and other state
                airports will make you conclude that the Anambra airport is
                indeed a treasure bestowed upon the people. It is a symbol of a
                man, who stood against all odds. Having received several
                cautions, discouragements and backlash from people, Governor
                Obiano knew this was a project that had to be accomplished.
                Building the airport was considered a dream too big to
                accomplish, a mountain too great to climb, a river too deep to
                swim. 
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="name">
              <div>
                <img src={image1} alt="" />
              </div>
              <div>
                <img src={image2} alt="" />
              </div>
            </div>
            <div className="two">
              <div className="gridImg">
                <img src={image3} alt="image" />
              </div>
              <div>
                <img src={image4} alt="" />
              </div>
            </div>
            <div className="three">
              <div><img src={image5} alt="" /></div>
              <div><img src={image6} alt="" /></div>
              <div><img src={image7} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default International;
