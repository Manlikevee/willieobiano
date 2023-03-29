import React from "react";
import Video from "./components/Video";
import { videos } from "../../js/data";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Videos() {
  return (
    <section className="videoSection">
      <h2 className="container">VIDEOS</h2>

      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        spaceBetween={30}
        className="container videoContainer"
        modules={[Navigation]}
      >
        <div className="blur"></div>
        {videos.map((data) => {
          return (
            <SwiperSlide>
              <Video {...data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
