import React from "react";
import Statistics from "../Statistics/Statistics";
import About from "./AboutUs/About";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import OurTeam from "./OurTeam/OurTeam";
// kkkk

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Statistics></Statistics>
      <About></About>
      <OurTeam></OurTeam>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
