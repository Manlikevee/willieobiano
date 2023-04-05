import React from 'react'
import Biographyhero from '../component/BiographyHero/Biographyhero'
import Layout from '../component/Layout/layout'
import { Helmet } from "react-helmet";
const Biography = () => {
  return (

    
<>

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

      <meta property="og:title" content="Willie Obiano - Biography Page" />
      <meta property="og:description" content="Willie Obiano is from Aguleri, a rural community in the Anambra river valley. It is the largest town in the area and the headquarters of Anambra East Local Council. His parents, Philip and Christiana, are both Catholics and from the same town. Philip, a catechist, was also a teacher, who taught in schools across Igboland." />
 
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