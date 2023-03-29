import React from "react";

export function Section() {
  return (
    <div className="sec_twitter">
      <div className="section">
        <div className="container">
          <div className="info">
            <h3>
              Economic prosperity is only possible when the benefits of growth
              are shared equitably among all citizens.
            </h3>
            <p className="name">Willie Obiano</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container twitter">
        <div className="top">
          <div>
            <img
              src="https://github.com/Cruxcodes/images-repository/blob/main/twitterIcon.png?raw=true"
              alt=""
            />
            <p>Conversations from Willie Obiano</p>
          </div>
          <a href="#">follow</a>
        </div>
        <div className="bottom">
          <img
            src="https://github.com/Cruxcodes/images-repository/blob/main/gb%204.png?raw=true"
            alt=""
          />
          <img
            src="https://github.com/Cruxcodes/images-repository/blob/main/gb%204.png?raw=true"
            alt=""
          />
          <img
            src="https://github.com/Cruxcodes/images-repository/blob/main/gb%204.png?raw=true"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
