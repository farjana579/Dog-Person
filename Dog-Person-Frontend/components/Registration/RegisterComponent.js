import React, { useState } from "react";
import logo from "../../image/pawBlack.png";
import axios from "axios";
import styles from "../../styles/registration.module.css";
const RegisterComponent = () => {
  const [emailUsed, setEmailUsed] = useState(true);
  const [userNameUsed, setUserNameUsed] = useState(true);

  //checking if user name available in database
  const handleUserName = (e) => {
    const userName = e.target.value;
    axios.get(`http://localhost:4000/users?name=${userName}`).then((res) => {
      setUserNameUsed(res.data);
      if (userNameUsed) {
        alert("Use another name");
        return;
      }
    });
  };

  // checking if email available in database.
  // const handleEmailVerification = (e) => {
  //   const email = e.target.value;
  //   axios.get(`http://localhost:4000/users/${email}`).then((res) => {
  //     setEmailUsed(res.data);
  //     if (emailUsed) {
  //       alert("Use another email");
  //       return;
  //     }
  //   });
  // };

  //check mobile is valid or not

  const handlePhone = (e) => {
    const contact = e.target.value;
    console.log(contact);
    const exp = /[0][1][^012]{1}[0-9]{8}/;
    if (!exp.test(contact)) {
      alert("Enter a valid number");
      return;
    }
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

    const finalData = {
      email: info.email,
      name: info.name,
      dob: info.DOB,
      phone: info.contact,
      password: info.password,
    };
    axios.post(`http://localhost:4000/users`, finalData).then((res) => {
      if (res.data.insertedId) {
        alert("successful");
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
            // onBlur={handleEmailVerification}
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact No."
            onBlur={handlePhone}
          ></input>
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
          <a href="/login">
            Already have an account?. <b>go to login page</b>.
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
