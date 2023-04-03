import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { achievements } from "./data";
import EarlylifeAb from "./EarlyLifeAb";
import Earlylife from "./Earlylife";
SwiperCore.use([Keyboard, Mousewheel]);

function Achievements() {
  const [begin, setBegin] = React.useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const containerRef = useRef(null);
  const [scrolledToTop, setScrolledToTop] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    console.log(containerRef.current)
    if (container) {
      const handleScroll = () => {
        if (container.scrollTop === 0) {
          setScrolledToTop(true);
          console.log("hello")
        } else {
          setScrolledToTop(false);
          console.log("this isn't it")
        }
      };
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  let num = 0;
  return (
    <div ref={containerRef} >
      {windowSize.innerWidth > 768 ? (
        <Swiper
          // ref={scrollRef}
          spaceBetween={50}
          style={{ marginBottom: "2vh" }}
          keyboard={true}
          slidesPerView={1}
          direction="horizontal"
          className="section container swiperAchieved"
          mousewheel={true}
          onSlideChange={(swiper) => {
            console.log(swiper);
            num++;
            console.log(num);
          }}
          onReachBeginning={(mousewheel) => {
            mousewheel.mousewheel.disable();
            setTimeout(() => {
              mousewheel.mousewheel.enable();
            }, 1500);
          }}
          onReachEnd={(mousewheel, swiper) => {
            mousewheel.mousewheel.disable();
            setTimeout(() => {
              mousewheel.mousewheel.enable();
            }, 1500);
          }}
        >
          {achievements.map((data) => {
            return (
              <SwiperSlide>
                {" "}
                <EarlylifeAb
                  title={data.title}
                  image={data.image}
                  text={data.text}
                  texttwo={data.texttwo}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        achievements.map((data) => {
          return (
            <div className="section container">
              <Earlylife
                title={data.title}
                text={data.text}
                texttwo={data.texttwo}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Achievements;
