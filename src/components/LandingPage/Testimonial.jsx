import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { testimonials } from "../../js/data";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Testimonial() {
  return (
    <>
      <section class="testimonial">
        {/* <!-- Slider main container --> */}
        <Swiper
          className="container swiper-slide"
          spaceBetween={50}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonials.map((data) => {
            return (
              <SwiperSlide>
                {" "}
                <div class="container comment">
                  <p>{data.comment}</p>
                </div>
                <div class="container person">
                  <div class="infoBody">
                    <img src={data.image} loading="lazy" alt="" />
                    <div class="info">
                      <p class="name">{data.name}</p>
                      <p class="title">{data.certification}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
