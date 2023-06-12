import React from "react";
import styles from "../../styles/footer.module.css";
import playStore from "../../image/Vector.png";
import appleLogo from "../../image/applelogo.png";
const Footer = () => {
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <div className={styles.footerMain}>
        <div className={styles.footerFirst}>
          <div className={styles.footerDownAndLicense}>
            <a>Download Now</a>
            <a>License</a>
          </div>
          <div className={styles.footerFeatures}>
            <a href="/aboutUsIndex">About</a>
            <a>Feature</a>
            <a>Pricing</a>
            <a>Carriers</a>
            <a>Help</a>
            <a>Privacy Policy</a>
          </div>
          <a> &copy;2023 Dog Person. All right reserved</a>
        </div>

        <div className={styles.appLink}>
          <h3>Get the App</h3>
          <div className={styles.appleLink}>
            <div className={styles.appLogo}>
              <a>
                <img src={appleLogo.src}></img>
              </a>
            </div>
            <div className={styles.appText}>
              <a>
                <h6>Download on the</h6>
                <h3>App Store</h3>
              </a>
            </div>
          </div>
          <div className={styles.playStoreLink}>
            <div className={styles.playStoreLogo}>
              <a>
                <img src={playStore.src}></img>
              </a>
            </div>
            <div className={styles.playStoreText}>
              <a>
                {" "}
                <h6>Get it on</h6>
                <h3> Google Play</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
