import React from "react";
import styles from "../../styles/bestproductcard.module.css";

const ProductCard = (props) => {
  const { image, title, paragraph } = props;
  return (
    <div>
      <div className={styles.bestCard}>
        <img src={image}></img>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button className={styles.btnStyle}>visit</button>
      </div>
    </div>
  );
};

export default ProductCard;
