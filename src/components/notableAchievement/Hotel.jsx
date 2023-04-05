import React,{useState} from "react";


import imageOne from "./images/Rectangle 100.png";
import imageTwo from "./images/Rectangle 103 (1).png";
import imageThree from "./images/Rectangle 104 (1).png";
import imageFour from "./images/Rectangle 105 (1).png";
import imageFive from "./images/Rectangle 106 (1).png";
import { Helmet } from "react-helmet";
function Hotel() {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="notable hotel">

<Helmet>
    <meta name="description" content="Willie Obiano is from Aguleri, a rural community in the Anambra river valley. It is the largest town in the area and the headquarters of Anambra East Local Council. His parents, Philip and Christiana, are both Catholics and from the same town. Philip, a catechist, was also a teacher, who taught in schools across Igboland." />
      <meta name="keywords" content="Willie Obiano,
Aguleri,
Anambra State,
Anambra State Governor,
Governors of anambra State,
Fidelity Bank,
Anambra State Airport,
Anambra State International Airport,
umuleri Cargo  Airport,
Anambra State Oxygen Production Plant,
International Conference Center Awka,
Anambra Health insurance Agency,
Willie Maduabuchukwu Obiano,
Willie Maduabuchukwu Obiano early life,
Willie Maduabuchukwu Obiano educational background,
Willie Maduabuchukwu Obiano public service,
Umueri Cargo Airport,
Peter Obi,
Akpokuedike,
Anambra State Social Identity Number,
ANSSID" />

      <meta property="og:title" content="Willie Obiano - Notable Achievements" />
      <meta property="og:description" content="Willie Obiano is from Aguleri, a rural community in the Anambra river valley. It is the largest town in the area and the headquarters of Anambra East Local Council. His parents, Philip and Christiana, are both Catholics and from the same town. Philip, a catechist, was also a teacher, who taught in schools across Igboland." />
 
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://willieobiano.com/" />
      <meta property="og:type" content="website" />
    </Helmet>

      {/* <div className="img">
          <img src={image6} alt="" />
        </div> */}
      <div>
        <ul>
          <li>An International hotel</li>
        </ul>
        <div className="texts">
          <div>
            <p>
              Chief Willie Obiano is a man who thinks sustainability, in his
              modus operandi, he sought for one of the best hotel brands in the
              world—Golden Tulip — signed an MOU with this intercontinental
              brand, thus removing any bureaucratic incursion for ease and
              profitable business.
            </p>
            <p>
              You just need to visit this hotel which is planted majestically on
              a 14-hectare piece of and the three-storey building has 81
              standard rooms and presidential suite, a conference centre, a gym,
              a spa, an outdoor pool bar, a bush bar and six meeting rooms with
              lovely swimming pool. Other facilities are clinic and a nine-hole
              golf course which will soon be upgraded to 18 holes.
            </p>
          </div>
          <div>
            <p>
              Manned by a competent team of thoroughbred professionals under
              James Ochei General Manager, the hotel has been able to absorb
              over 200 applicants from the unemployment market while almost all
              the building articles were sourced locally.
            </p>
            <p>
              According to Lola Itayemi, a visitor to Anambra, “The only thing
              that consoled me when my flight was cancelled until the next day
              was the fact that I was going back to Golden Tulip Hotel and
              Resort, Agulu Lake Amobia. The blissful experience I had the
              previous night sweetened my spirit. There hotel has a blissful
              aura. It is a place where you can consummate your holiday in
              quietude and serenity.
            </p>
          </div>
        </div>
        <div className="images">
          <img src={imageTwo} alt="" />
          <img src={imageOne} alt="" />
          <img src={imageThree} alt="" />
          <img src={imageFour} alt="" />
          <img src={imageFive} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hotel;
