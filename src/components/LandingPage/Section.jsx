import React from "react";
import { useEffect } from "react";
import twitter from './images/logos_twitter.png'

export function Section() {
    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);



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
              src={twitter}
              alt=""
            />
            <p>Conversations from Willie Obiano</p>
          </div>
          <a href="https://twitter.com/WillieMObiano">follow</a>
        </div>
        <div className="bottom">
          <div className="twitter-embed">
            <a
              className="twitter-timeline"
              // data-theme="dark"
              data-tweet-limit="5"
              data-chrome="noheader nofooter noborders"
              href="https://twitter.com/WillieMObiano?ref_src=twsrc%5Etfw"
            >
              Tweets by Willie Obiano
            </a>
          </div>
        </div>
      </div>
    </div>
    // <>
    // {/* <a
    //   class="twitter-timeline"
    //   href="https://twitter.com/WillieMObiano?ref_src=twsrc%5Etfw"
    // >
    //   Tweets by WillieMObiano
    // </a>{" "}
    // <script
    //   async
    //   src="https://platform.twitter.com/widgets.js"
    //   charset="utf-8"
    // ></script> */}
    // {/* </> */}

    // <div className="twitter-embed">
    //   <a
    //     className="twitter-timeline"
    //     // data-theme="dark"
    //     data-tweet-limit="5"
    //     data-chrome="noheader nofooter noborders"
    //     href="https://twitter.com/WillieMObiano?ref_src=twsrc%5Etfw"
    //   >
    //     Tweets by HeyMarkKop
    //   </a>
    // </div>
  );
}
