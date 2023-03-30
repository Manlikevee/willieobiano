import React from "react";
import Layout from "../Layout/layout";
import Biographysplashpage from "./Biographysplashpage";
import Earlylife from "./Earlylife";
import { useRef } from "react";
// import useScrollSnap from "react-use-scroll-snap";
import Membership from "../membership/Membership";
import Previousposition from "./Previousposition";
import Achievements from "./Achievements";
import Publicsector from "./Publicsector";

const Biographyhero = () => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });
  return (
    <Layout>
      <div>
        <Biographysplashpage />

        {/* <div className="App" ref={scrollRef}> */}
          {/* <Achievements /> */}
          <Earlylife />
          <Previousposition />
        {/* </div> */}
        <Publicsector />
        <Membership/>
      </div>
    </Layout>
  );
};

export default Biographyhero;
