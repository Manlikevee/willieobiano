import React , { useState, useEffect } from 'react'
import { Link } from "gatsby"
import Sidebarlight from '../Sidebarlight/Sidebarlight'
import myImage from "./images/willie.png"






function Headerlight() {
  const [isHeaderActive, setIsHeaderActive] = useState(false)

  useEffect(() => {
    const header = document.querySelector("[data-header]")

    function handleScroll() {
      if (window.scrollY >= 200) {
        setIsHeaderActive(true)
      } else {
        setIsHeaderActive(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  
  const headerClass = `header ${isHeaderActive ? "active" : ""}`
  return (

  
    <header data-header className= {headerClass}>
          <Sidebarlight />
    </header>
  
  )

}
export default Headerlight