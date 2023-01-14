import React from "react";
import logo from "../../image/pawBlack.png";
import axios from "axios";
import styles from "../../styles/registration.module.css";
const RegistrationComponent = () => {
  const handleLogin = (e) => {  
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs);
    let info = {};
    for (const input of inputs) {
      const name = input.name;
      const value = input.value;
      if (value === "") {
        alert("Empty input field");
        return;
      }
      info[name] = value;
    }
    axios
      .get(
        `http://localhost:4000/login?email=${info.email}&password=${info.password}`
      )
      .then((res) => {
        if (res.data) {
          alert("Success");
        } else {
          alert("failed");
        }
      });
  };
  return (
    <div>
      <div className={styles.registrationHeader}>
        <img src={logo.src}></img>
        <h1>Dog Person</h1>
      </div>
      <div className={styles.registrationBox}>
        <form onSubmit={handleLogin}>
          <input type="text" id="Email" name="email" placeholder="Email" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <a>
            <i>Forgot password?</i>
          </a>
          <button onClick={handleLogin} className={styles.btnStyle}>
            LOG IN
          </button>
          <a href="/registration">
            New at Dog Person?. Please create a new account
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegistrationComponent;
