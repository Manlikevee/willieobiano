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
    <Link to="#" className="navbar-link">
        Services
      </Link>
    </li>
    <li>
    <Link to="#" className="navbar-link">
      Gallery
    </Link>
    </li>
    <li>
    <Link to="#" className="navbar-link">
        Contact
        </Link>
    </li>
  </ul>
  )
}

export default Sidelink