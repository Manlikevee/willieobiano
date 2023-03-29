import React from "react";
import Header from "../components/LandingPage/Header";
import * as landing from "../components/LandingPage";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../components/Layout/Layout";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";

function LandingPage() {

  return (
    <div>
      <Layout>
        <Header />
        <landing.Testimonial />
        <landing.Videos />
        <landing.Section />
      </Layout>

      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
