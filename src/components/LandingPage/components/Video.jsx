import React from "react";

function Video({ image, buttonImg, title, text }) {
  return (
    <>
      <div className="video">
        <div className="img">
          <img src={image} alt="" />
          <a href="#">
            <img className="playButton" src={buttonImg} alt="" />
          </a>
        </div>

        <div className="info">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Video;
