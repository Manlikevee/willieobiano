import React, { useState } from "react"
import { Link } from "gatsby"
import myImage from "./images/willie.png"
import Sidelink from "../Sidelinks/Sidelink"

const Sidebar = () => {
  const [navActive, setNavActive] = useState(false)

  const toggleNavbar = () => {
    setNavActive(!navActive)
  }

  return (
    <>
       <div className="container">
    <a href="#" className="logo">
      <img
        src={myImage}
        width={170}
        height={40}
        alt="Pfolio home"
      />
    </a>
      <button
        type="button"
        data-nav-toggle-btn
        aria-label="Toggle menu"
        className={`nav-toggle-btn ${navActive ? "active" : ""}`}
        onClick={toggleNavbar}
      >
      <span className="line line-1" />
      <span className="line line-2" />

      </button>
      <nav
        data-navbar
        className={`navbar ${navActive ? "active" : ""}`}>
      

      <Sidelink />

      </nav>
    
      <div
        data-overlay
        className={`overlay ${navActive ? "active" : ""}`}
        onClick={toggleNavbar}
      ></div>
</div>

    </>
  )
}

export default Sidebar
