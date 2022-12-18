import React from "react";
import logo from "../../image/pawBlack.png";
import styles from "../../styles/registration.module.css";
const RegisterComponent = () => {
  return (
    <div>
      <div className={styles.registrationHeader}>
        <img src={logo.src}></img>
        <h1>Dog Person</h1>
      </div>
      <div className={styles.registrationBox}>
        <form>
          <input type="text" id="fname" name="fname" placeholder="Name"></input>
          <input type="text" id="Email" name="Email" placeholder="Email" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Retype Password"
          />
          <button className={styles.btnStyle}>Register</button>
          <a href="/login">
            Already have an account?. go to login page.
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
