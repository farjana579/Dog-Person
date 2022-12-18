import React from "react";
import Banner from "./Banner";
import Products from "./products";
import BestProduct from "./BestProduct";
const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BestProduct></BestProduct>
    </div>
  );
};

export default HomePage;
