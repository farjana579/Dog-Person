import React from "react";
import styles from "../../styles/Home.module.css";
import logo from "../../image/logo.png";

const Navigation = () => {
  return (
    <div className={styles.NavLogo}>
      <div className={styles.logoTitle}>
        <div className={styles.logo}>
          <img src={logo.src}></img>
        </div>
        <div className={styles.PageTitle}>
          <h2>Dog Person</h2>
        </div>
      </div>
      <div className={styles.Navbar}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Medicine</li>
          <li>Classify</li>
          <button className={styles.loginbtn}>Log In</button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
