import React from 'react';

function ScrollBottomButton() {
  const scrollBottom = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }

  return (

<div className="scrollcont">
  <svg
    className="toBottom "
    id="scroll-Bottom"
    onClick={scrollBottom}
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
   
  >
    <title>scroll</title>
    <circle cx={30} cy={30} r={29} style={{ fill: "#fff", opacity: "0.28" }} />
    <polyline
      points="43.62 22.19 30 37.81 16.38 22.19"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }}
    />
  </svg>
</div>


  );
}

export default ScrollBottomButton;
