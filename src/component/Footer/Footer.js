import React from 'react'
import myImage from "./images/willie.png"
import { Helmet } from "react-helmet";

const Footer = () => {
  return (


    <div>

<Helmet>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </Helmet>

        <footer className="footer">
  <li className="container" style={{ marginBottom: 20 }}>
    <a href="#" className="logo">
      <img
        src={myImage}
        width={170}
        height={40}
        alt="Pfolio home"
      />
    </a>
  </li>
  <div className="container">
    <ul className="footer-list">
      <li>
        <p className="h4 footer-list-title">Get in touch</p>
      </li>
      <li>
        <a href="mailto:info@Williebiano.com" className="footer-link">
          info@Williebiano.com
        </a>
      </li>
    </ul>
    <ul className="footer-list">
      <li>
        <p className="h4 footer-list-title">Quick Links</p>
      </li>
      <li>
        <div className="flexlink">
          <div className="ftwo">
            <a href="">About Obiano</a>
            <a href="">Achievements</a>
          </div>
          <div className="ftwo">
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>
      </li>
    </ul>
    <ul className="social-list">
      <li>
        <a href="https://twitter.com/williemobiano?lang=en" className="social-link">
          <ion-icon  name="logo-twitter" />
        </a>
      </li>
     
      <li>
        <a href="https://www.instagram.com/williemobiano/" className="social-link">
          <ion-icon  name="logo-instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/WillieObiano/" className="social-link">
          <ion-icon  name="logo-facebook" />
        </a>
      </li>

    </ul>
  </div>
  <div className="willyobianofooter container">
    © Copyright 2023, All Rights Reserved by Willie Obiano
  </div>
</footer>

    </div>
  )
}

export default Footer