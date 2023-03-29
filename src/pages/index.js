import React from 'react'
import Biographyhero from '../component/BiographyHero/Biographyhero'
import Layout from '../component/Layout/layout'
import LandingPage from "../compiledPage/LandingPage";






const IndexPage = () => {
  return (
    // <Layout>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <h1>HELLO WORLD</h1>
    // </Layout>
    <LandingPage />
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
