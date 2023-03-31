import React from 'react'
import '../styles/styleLegacy.css'
import '../styles/styles.css'
import LandingPage from '../compiledPage/LandingPage'
import { Helmet } from "react-helmet";
import ogImage from "./og-image.png"

function Desktop() {
  return (
    <div>
    <Helmet>
    <meta name="description" content="Willie Obiano - A Visionary Leader Committed to Progress and Innovation.
Inspiring hope and confidence in the future of Nigeria with bold ideas and decisive action. Leading with purpose, passion, and dedication: The inspiring leadership of Willie Obiano" />
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
Umueri Cargo Airport,
Peter Obi,
Akpokuedike,
Anambra State Social Identity Number,
ANSSID" />

      <meta property="og:title" content="Willie Obiano -" />
      <meta property="og:description" content="Willie Obiano - A Visionary Leader Committed to Progress and Innovation.
Inspiring hope and confidence in the future of Nigeria with bold ideas and decisive action. Leading with purpose, passion, and dedication: The inspiring leadership of Willie Obiano" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://willieobiano.com/" />
      <meta property="og:type" content="website" />
    </Helmet>


        <LandingPage/>
    </div>
  )
}

export default Desktop