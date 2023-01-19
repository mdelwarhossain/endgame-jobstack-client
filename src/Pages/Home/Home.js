import React from "react";
import Statistics from "../Statistics/Statistics";
import About from "./AboutUs/About";
import Banner from "./Banner/Banner";
import OurTeam from "./OurTeam/OurTeam";
// kkkk

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Statistics></Statistics>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
