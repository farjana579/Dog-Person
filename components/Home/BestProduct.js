import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../../styles/bestproductcard.module.css";
import product1 from "../../image/product1.jpg";
import product2 from "../../image/product2.webp";
import classify from "../../image/classify.jpg";
const BestProduct = () => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <div className={styles.besttitle}>
        <h1>Best Product</h1>
      </div>
      <div className={styles.bestProductCardContainer}>
        <ProductCard
          title="Classifier"
          image={classify.src}
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"
        ></ProductCard>
        <ProductCard
          title="Dog Food"
          image={product1.src}
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"
        ></ProductCard>
        <ProductCard
          title="Happy Dog"
          image={product2.src}
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"
        ></ProductCard>
      </div>
    </div>
  );
};

export default BestProduct;
