import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Honour() {
  return (
    <div className="notable honours">
      {/* <div className="img">
          <img src={image6} alt="" />
        </div> */}
      <h3>HONORS AND AWARDS</h3>
      <p>
        Governor Willie Obiano holds the enviable record of being one of a
        handful of governors who won all the important awards and recognitions
        in Nigeria in less than three years in office.
      </p>

      <div className="achievements">
        <div className="imageOne"></div>
        <div className="imageTwo"></div>
        <div className="imageThree"></div>
        <div className="imageFour"></div>
        <div className="imageFive"></div>
      </div>

      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="achievements"
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="achievements">
            <div className="imageOne"></div>
            <div className="imageTwo"></div>
            <div className="imageThree"></div>
            <div className="imageFour"></div>
            <div className="imageFive"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
    </div>
  );
}

export default Honour