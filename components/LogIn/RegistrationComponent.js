import React from "react";
import logo from "../../image/pawBlack.png";
import styles from "../../styles/registration.module.css";
const RegistrationComponent = () => {
  return (
    <div>
      <div className={styles.registrationHeader}>
        <img src={logo.src}></img>
        <h1>Dog Person</h1>
      </div>
      <div className={styles.registrationBox}>
        <form>
          <input type="text" id="Email" name="Email" placeholder="Email" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <a>
            <i>Forget password?</i>
          </a>
          <button className={styles.btnStyle}>LOG IN</button>
          <a href="/registerpage">
            New at Dog Person?. Please create a new account
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegistrationComponent;
