import React from 'react'
import ScrollBottomButton from '../Scrollbottombutton/ScrollBottomButton'

const Biographysplashpage = () => {
  return (
    <section className="section hero myhero" aria-label="home">
    <div className="container">
      <div className="hero-content">
        <div className="flexsectionone">
         
        <span className="section-subtitle">Chief</span>
          <h1 className="h1 hero-title myherotitle">Willie Maduaburochukwu Obiano</h1>
          <br />
          <span className="section-subtitle">The</span>
          <h1 className="h2 herosub-title">Ukwuoma Kpolu</h1>
          <p className="section-subtitle">Aguleri, Anambra State, Nigeria.</p>
        </div>
        <div className="bottomflexcon">
          <div className="div1">Biography</div>
          <div className="div2">Biography</div>
        </div>
      </div>

      <ScrollBottomButton />
    </div>
  </section>
  
  )
}

export default Biographysplashpage