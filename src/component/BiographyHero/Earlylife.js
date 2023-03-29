import React from 'react'
import myImage from "./images/earlylife.png"
import Previousposition from './Previousposition'

const Earlylife = () => {
  return (

    <div>
<section className="section skills" aria-label="our skills">
  <div className="container">
    <p className="section-subtitle">Early Life</p>
    <div className="skills-wrapper">
      <div className="divside d-column fixedtop">
        <img src={myImage} alt="" />
        <a href="mailto:info@Williebiano.com" className="btn has-before">
          info@Williebiano.com
        </a>
      </div>
      <div>
        <div className="earlylife">
          <h2 className=" h2 ">Early Life</h2>
          <div className="splitline" />
          <br />
          <p className="section-text">
            Obiano is from Aguleri, a rural community in the Anambra river
            valley. It is the largest town in the area and the headquarters of
            Anambra East Local Council. His parents, Philip and Christiana, are
            both Catholics and from the same town. Philip, a catechist, was also
            a teacher, who taught in schools across Igboland.
          </p>
          <p className="section-text">
            Following Nigeria’s military coup in 1966, many Igbo families lost
            their loved ones in the pogrom in Northern Nigeria. Amid the
            uncertainties, the July counter-coup occurred, and 11-year-old
            Willie and his siblings returned to their classrooms, with ill omen
            muffling family conversations in homes. In May 1967, Lt.-Col. Emeka
            Ojukwu, as Military Governor of Eastern Region, declared the region
            the Independent State of Biafra. The declaration changed the history
            of the region and the country.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<Previousposition />


    </div>

  )
}

export default Earlylife