import React from "react";
import Navbar from "../components/navbar";
import HeaderSection from "../components/headerSection";
import Banner from "../components/banner";
import LogoCloud from "../components/logoCloud";
import Footer from "../components/footer";
import Popup from "../components/popup";

function home() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <Banner />
      <LogoCloud />
      <Footer />
      <Popup />
    </div>
  );
}

export default home;