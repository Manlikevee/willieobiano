import React from 'react'
import { Link } from "gatsby"

const Sidelink = () => {
  return (
    <ul className="navbar-list">
    <li>
    <Link to="/" className="navbar-link">
        Home
      </Link>
    </li>
    <li>
    <Link to="/Biography" className="navbar-link">
   
        Biography
      </Link>
    </li>
    <li>
    <Link to="/Notable" className="navbar-link">
  
   Notable Achievements

      </Link>
    </li>
    <li>
    <Link to="/Gallery" className="navbar-link">
      Gallery
    </Link>
    </li>
    <li>
    <Link to="/Contactus" className="navbar-link">
        Contact
        </Link>
    </li>
  </ul>
  )
}

export default Sidelink