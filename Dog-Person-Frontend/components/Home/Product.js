import React from "react";
import styles from "../../styles/products.module.css";
import food from "../../image/food.jpg";
const Product = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <img src={props.image}></img>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Product;
