import React, { useState, useEffect } from "react";
import "./layout.css";
import Header from "../Myheader/Header";
// import Preloader from "../Preloader/Preloader"
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloader = document.querySelector("[data-preloader]");
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded && (
        <div className="preloader" data-preloader>
          <div className="circle" />
        </div>
      )}

      <Header />
      
        {children}+
        
      <Footer />
    </>
  );
};

export default Layout;
