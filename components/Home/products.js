import React from "react";
import styles from "../../styles/products.module.css";
import food from "../../image/food.jpg";
import medicine from "../../image/medicine.png";
import classify from "../../image/classify.jpg";

import Product from "../Home/Product";
const Products = () => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <div className={styles.ProductAndService}>
        <div className={styles.productTitle}>
          <h1>Products and Services</h1>
          <h6> A trusted online shop</h6>
        </div>
        <div className={styles.cardContainer}>
          <Product title="Food" image={food.src}></Product>
          <Product title="Medicine" image={medicine.src}></Product>
          <Product title="Classifier" image={classify.src}></Product>
        </div>
      </div>
    </div>
  );
};

export default Products;
