import React from 'react'
import Biographyhero from '../component/BiographyHero/Biographyhero'
import Layout from '../component/Layout/layout'
// import LandingPage from "../compiledPage/LandingPage";
import Desktop from './Desktop';






const IndexPage = () => {
  return (
    // <Layout>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <h1>HELLO WORLD</h1>
    // </Layout>
    <Desktop />
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
