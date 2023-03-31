import React from 'react'
import Biographyhero from '../component/BiographyHero/Biographyhero'
import Layout from '../component/Layout/layout'
import { Helmet } from "react-helmet";
const Biography = () => {
  return (

    
<>

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

      <meta property="og:title" content="Willie Obiano -Biography Page" />
      <meta property="og:description" content="Willie Obiano - A Visionary Leader Committed to Progress and Innovation.
Inspiring hope and confidence in the future of Nigeria with bold ideas and decisive action. Leading with purpose, passion, and dedication: The inspiring leadership of Willie Obiano" />
 
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://willieobiano.com/" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Biographyhero />
</>


          
  )
}

export default Biography

export const Head = () => <title>Willie Obiano -Biography Page</title>  