import React from 'react'
import myImage from "./images/Rectangle 87.png"
import firstbank from "./images/First-Bank 1.png"
import myImage1 from "./images/Rectangle 58 (1).png"
import myImage2 from "./images/Rectangle 87.png"
import myImage3 from "./images/Rectangle 58 (2).png"
import Biographyslide from './Biographyslide'
import Biographyslides from './Biographyslides'



const Previousposition = () => {
  return (
    <div>
<section className="slidefrombottom">
  <div className="container">
    <h2 className="herosub-title h2 han">Previous &amp; current positions</h2>
    <div className="positionflex">
     

      <div className="positionposition">

      <div className="timelines">
  <div className="timeline education">
    <div className="timeline-items">
      <div className="timeline-item" id="sec1">
        <h3 className="" />
        <a href="#section1" className="location" id=''>
          1981{" "}
        </a>
      </div>
      <div className="timeline-item" id="sec2">
        <h3 />
        <a href="#section2" className="location">
          1991{" "}
        </a>
      </div>
      <div className="timeline-item" id="sec3">
        <h3 />
        <a href="#section3" className="location">
          2010{" "}
        </a>
      </div>
      <div className="timeline-item" id="sec4">
        <h3 />
        <a href="#section4" className="location">
          2014{" "}
        </a>
      </div>
      {/* <div className="timeline-item" id='sec5'>
        <h3 />
        <a href="#section5" className="location">
          2022{" "}
        </a>
      </div> */}
    </div>
  </div>
</div>



      </div>

      <div className="stack">

<br />
<Biographyslides />
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Previousposition