import React from 'react'
import Layout from '../Layout/layout'
import Biographysplashpage from './Biographysplashpage'
import Earlylife from './Earlylife'
import Previousposition from './Previousposition'
import Publicsector from './Publicsector'




const Biographyhero = () => {
  return (
    <Layout>
    <div>
<Biographysplashpage />
<Earlylife />
<Previousposition />
<Publicsector />
    </div>
    </Layout>
  )
}

export default Biographyhero