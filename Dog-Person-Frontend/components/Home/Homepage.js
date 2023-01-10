import React from "react";
import Banner from "./Banner";
import Products from "./products";
import BestProduct from "./BestProduct";
import KnowAboutUs from "./KnowAboutUs";
const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BestProduct></BestProduct>
      <KnowAboutUs></KnowAboutUs>
    </div>
  );
};

export default HomePage;
