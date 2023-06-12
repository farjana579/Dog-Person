import React from "react";
import styles from "../../styles/Home.module.css";
import image from "../../image/img.png";

const Banner = () => {
  return (
    <div>
      <div></div>

      <div className={styles.banner}>
        <div className={styles.text}>
          <h5>Based on machine learning and AI classify dog’s breed</h5>
          <h1>Predict your pet’s breed</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className={styles.btnStyle}>
            <a href="/classify">classify</a>
          </button>
        </div>
        <div className={styles.dogImage}>
          <img src={image.src}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
