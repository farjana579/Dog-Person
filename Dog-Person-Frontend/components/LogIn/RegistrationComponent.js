import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import logo from "../../image/pawBlack.png";
import axios from "axios";
import styles from "../../styles/registration.module.css";
import { Checkbox } from "@mui/material";
const RegistrationComponent = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("Email") && localStorage.getItem("Password") || sessionStorage.getItem("Email") && sessionStorage.getItem("Password")) {
      router.push("/");
    }
  });


    var query = `query GetUser($item: String) {
        getUser(email: $item) {
            name
            email
            password
        }
      }`;

    const endpoint = "http://localhost:4001/gql";



  
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
    const item = info.email;

      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
          variables: { item },
        }),
      })
        .then((res) => res.json())
        .then((data) =>{
        if (data.data) {
    //       localStorage.clear();
    console.log(data.data)
          if (document.getElementById("remember").checked) {
            localStorage.setItem("username", data.data.getUser.name);
            localStorage.setItem("Email", info.email);
            localStorage.setItem("Password", info.password);
          }
          else {
            sessionStorage.setItem("username", data.data.getUser.name);
            sessionStorage.setItem("Email", info.email);
            sessionStorage.setItem("Password", info.password);
          }
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
            <i>
            Forgot password?</i>
          </a>
          <div className={styles.remember}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me.</label>
          </div>
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
