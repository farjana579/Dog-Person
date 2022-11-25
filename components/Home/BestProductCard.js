import React from "react";
import styles from "../../styles/bestproductcard.module.css";

const BestProductCard = (props) => {
  return (
    <div>
      <div className={styles.bestCard}>
        <img src={props.image}></img>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        <button className={styles.btnStyle}>visit</button>
      </div>
    </div>
  );
};

export default BestProductCard;
