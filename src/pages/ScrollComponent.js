import { useState, useEffect, useRef, react  } from 'react';
import React from 'react'
function ScrollComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const sectionFiveRef = useRef(null);

  const checkPointOne = sectionOneRef.current?.offsetHeight || 0;
  const checkPointTwo =
    checkPointOne + (sectionTwoRef.current?.offsetHeight || 0);
  const checkPointThree =
    checkPointTwo + (sectionThreeRef.current?.offsetHeight || 0);
  const checkPointForth =
    checkPointThree + (sectionFourRef.current?.offsetHeight || 0);

  const addClass = (elemOne, elemTwo, margin) => {
    elemOne.classList.add('fixed');
    elemTwo.style.marginTop = margin + 'px';
  };

  const removeClass = (elemOne, elemTwo) => {
    elemOne.classList.remove('fixed');
    elemTwo.style.marginTop = '0px';
  };

  const onScroll = () => {
    if (scrollPosition >= 0 && scrollPosition < checkPointOne) {
      removeClass(sectionTwoRef.current, sectionThreeRef.current);
    } else if (scrollPosition > checkPointOne && scrollPosition <= checkPointTwo) {
      addClass(sectionTwoRef.current, sectionThreeRef.current, checkPointTwo);
      removeClass(sectionThreeRef.current, sectionFourRef.current);
    } else if (scrollPosition > checkPointTwo && scrollPosition <= checkPointThree) {
      addClass(sectionThreeRef.current, sectionFourRef.current, checkPointThree);
      removeClass(sectionFourRef.current, sectionFiveRef.current);
    } else if (scrollPosition > checkPointThree && scrollPosition <= checkPointForth) {
      addClass(sectionFourRef.current, sectionFiveRef.current, checkPointForth);
    }
  };

  return (
    <div>
      <div className="item item-1" ref={sectionOneRef}>
        <div className="col-5">
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna in dolor elementum commodo
            et vitae risus. Nullam tristique leo eu mi ultrices, non auctor arcu ultricies.
          </p>
        </div>
      </div>
      <div className="item item-2" ref={sectionTwoRef}>
        <div className="col-5">
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna in dolor elementum commodo
            et vitae risus. Nullam tristique leo eu mi ultrices, non auctor arcu ultricies.
          </p>
        </div>
      </div>
      <div className="item item-3" ref={sectionThreeRef}>
        <div className="col-5">
          <h2>Section 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna in dolor elementum commodo
            et vitae risus. Nullam tristique leo eu mi ultrices, non auctor
            </p>
            </div>
      </div>
      </div>
        );
    }

    
export default ScrollComponent;
