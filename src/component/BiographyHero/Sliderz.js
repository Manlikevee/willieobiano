import React, { useState, useEffect, useRef } from 'react';

function Sliderz() {
  const [totalSliderVisibleItems, setTotalSliderVisibleItems] = useState(0);
  const [totalSlidableItems, setTotalSlidableItems] = useState(0);
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    const slider = sliderContainer.closest("[data-slider]");

    const sliderPrevBtn = slider.querySelector("[data-slider-prev]");
    const sliderNextBtn = slider.querySelector("[data-slider-next]");

    setTotalSliderVisibleItems(Number(getComputedStyle(slider).getPropertyValue("--slider-items")));
    setTotalSlidableItems(sliderContainer.childElementCount - totalSliderVisibleItems);

    const moveSliderItem = function () {
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }

    const slideNext = function () {
      const slideEnd = currentSlidePos >= totalSlidableItems;

      if (slideEnd) {
        setCurrentSlidePos(0);
      } else {
        setCurrentSlidePos(currentSlidePos + 1);
      }

      moveSliderItem();
    }

    sliderNextBtn.addEventListener("click", slideNext);

    const slidePrev = function () {
      if (currentSlidePos <= 0) {
        setCurrentSlidePos(totalSlidableItems);
      } else {
        setCurrentSlidePos(currentSlidePos - 1);
      }

      moveSliderItem();
    }

    sliderPrevBtn.addEventListener("click", slidePrev);

    const dontHaveExtraItem = totalSlidableItems <= 0;
    if (dontHaveExtraItem) {
      sliderNextBtn.style.display = 'flex';
      sliderPrevBtn.style.display = 'flex';
    }

    return () => {
      sliderNextBtn.removeEventListener("click", slideNext);
      sliderPrevBtn.removeEventListener("click", slidePrev);
    }
  }, [currentSlidePos, totalSliderVisibleItems, totalSlidableItems]);

  return (
    <div className="slider" data-slider>
      <ul className='slider-container' data-slider-container ref={sliderContainerRef}>
   
      <li className="slider-item">
        <div className="portfolio-card img-holder">
          <div className="imgdiv">
            <img
              src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              width={600}
              height={600}
              loading="lazy"
              alt="portfolio"
              className="img-cover"
            />
          </div>
          <div className="card-content">
            <h3 className="h3 card-title">Public Service</h3>
            <p className="card-text"></p>
          </div>
          <a href="javascript:void(0)" className="layer-link" />
        </div>
      </li>
      <li className="slider-item">
        <div className="portfolio-card img-holder">
          <div className="imgdiv">
            <img
              src="https://images.unsplash.com/photo-1413882353314-73389f63b6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              width={600}
              height={600}
              loading="lazy"
              alt="portfolio"
              className="img-cover"
            />
          </div>
          <div className="card-content">
            <h3 className="h3 card-title">Public Service</h3>
            <p className="card-text"></p>
          </div>
          <a href="javascript:void(0)" className="layer-link" />
        </div>
      </li>
      <li className="slider-item">
        <div className="portfolio-card img-holder">
          <div className="imgdiv">
            <img
              src="https://images.unsplash.com/photo-1591486085897-f433f05e7aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              width={600}
              height={600}
              loading="lazy"
              alt="portfolio"
              className="img-cover"
            />
          </div>
          <div className="card-content">
            <h3 className="h3 card-title">Public Service</h3>
            <p className="card-text"></p>
          </div>
          <a href="javascript:void(0)" className="layer-link" />
        </div>
      </li>
      <li className="slider-item">
        <div className="portfolio-card img-holder">
          <div className="imgdiv">
            <img
              src="https://images.unsplash.com/photo-1619975101918-6d27886e8c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              width={600}
              height={600}
              loading="lazy"
              alt="portfolio"
              className="img-cover"
            />
          </div>
          <div className="card-content">
            <h3 className="h3 card-title">Public Service</h3>
            <p className="card-text"></p>
          </div>
          <a href="javascript:void(0)" className="layer-link" />
        </div>
      </li>
      <li className="slider-item">
        <div className="portfolio-card img-holder">
          <div className="imgdiv">
          <img
              src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              width={600}
              height={600}
              loading="lazy"
              alt="portfolio"
              className="img-cover"
            />
          </div>
          <div className="card-content">
            <h3 className="h3 card-title">Public Service</h3>
            <p className="card-text"></p>
          </div>
          <a href="javascript:void(0)" className="layer-link" />
        </div>
      </li>
      </ul>
      <div className="slider-controls">
     
      <button
        className="slider-control prev"
        data-slider-prev=""
        aria-label="Slide to previous item"
      >
        <div className="line" />
        <div className="arrow" />
      </button>
      <button
        className="slider-control next"
        data-slider-next=""
        aria-label="Slide to next item"
      >
        <div className="line" />
        <div className="arrow" />
      </button>
    </div>
      </div>

  );
}

export default Sliderz;
