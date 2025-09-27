import React from "react";

import Banner from "../Banner/Banner";
import WhyChooseUs from "../../../Components/WhyChooseUs.jsx";
import SatisfiedSection from "../../../Components/SatisfiedSection/SatisfiedSection";

import Ratings from "../../../Components/Ratings";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <SatisfiedSection></SatisfiedSection>
      <Ratings></Ratings>
    </div>
  );
};

export default Home;
