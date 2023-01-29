import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import logo from "../../image/pawBlack.png";
import axios from "axios";
import styles from "../../styles/registration.module.css";
const RegistrationComponent = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("Email") && localStorage.getItem("Password")) {
      router.push("/");
    }
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    //console.log(inputs);
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
          localStorage.setItem("Email", info.email);
          localStorage.setItem("Password", info.password);
          router.push("/");
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
          {/* {showHome === true && (
            <button className={styles.btnStyle}>LOG Out</button>
          )} */}
          <a href="/registration">
            New at Dog Person?{" "}
            <span style={{ color: "#E76F51" }}>
              Please create a new account.
            </span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegistrationComponent;
