import React, { useState } from "react";
import logo from "../../image/pawBlack.png";
import axios from "axios";
import styles from "../../styles/registration.module.css";
const RegisterComponent = () => {
  const [emailUsed, setEmailUsed] = useState(true);
  
  //checking if user name available in database
  const handleUserName = (e) => {
    const userName = e.target.value;
    axios.get(`http://localhost:4000/users?name=${userName}`)
    .then(res => {
      if (res.data) {
        alert("Available");
      } else {
        alert("not available");
      }
    });
  };
  // checking if email available in database.
  const handleEmailVerification = (e) => {
    const email = e.target.value;
    axios.get(`http://localhost:4000/users/${email}`).then((res) => {
      setEmailUsed(res.data);
      console.log(res);
    });
  };

  // register user
  const handleRegistration = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    let info = {};

    for (const input of inputs) {
      const name = input.name;
      const value = input.value;
      if (value === "") {
        alert(name + " is Empty");
        return;
      }
      info[name] = value;
    }
    if (info.password !== info.confirmPassword) {
      alert("Confirmation password is not matched");
      return;
    }
    if (!emailUsed) {
      alert("Use another email");
      return;
    }
    const finalData = {
      email: info.email,
      name: info.name,
      dob: info.DOB,
      password: info.password,
    };
    axios.post(`http://localhost:4000/users`, finalData).then((res) => {});
  };
  return (
    <div>
      <div className={styles.registrationHeader}>
        <img src={logo.src}></img>
        <h1>Dog Person</h1>
      </div>

      <div className={styles.registrationBox}>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Name"
            onBlur={handleUserName}
          ></input>
          <input
            type="text"
            id="Email"
            name="email"
            placeholder="Email"
            onBlur={handleEmailVerification}
          />
          <input type="date" name="DOB" placeholder="Date of Birth" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />

          <input
            type="password"
            id="password"
            name="confirmPassword"
            placeholder="Retype Password"
          />
          <button onClick={handleRegistration} className={styles.btnStyle}>
            Register
          </button>
          <a href="/login">Already have an account?. go to login page.</a>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
