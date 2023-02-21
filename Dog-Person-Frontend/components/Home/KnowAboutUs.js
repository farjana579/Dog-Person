import React from "react";
import styles from "../../styles/know_about_us.module.css";
const KnowAboutUs = () => {
  return (
    <div>
      {
        <div className={styles.videoSection}>
          <h1>About Dog Breeds</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xyvmJ2c9cHc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      }
    </div>
  );
};

export default KnowAboutUs;
