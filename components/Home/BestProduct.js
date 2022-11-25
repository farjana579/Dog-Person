import React from "react";
import BestProductCard from "./BestProductCard";
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
        <BestProductCard
          title="Classifier"
          image={classify.src}
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"
        ></BestProductCard>
        <BestProductCard
          title="Dog Food"
          image={product1.src}
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"
        ></BestProductCard>
        <BestProductCard
          title="Happy Dog"
          image={product2.src}
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"
        ></BestProductCard>
      </div>
    </div>
  );
};

export default BestProduct;
