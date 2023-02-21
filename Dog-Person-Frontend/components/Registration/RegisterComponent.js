import React, { useEffect, useState } from "react";
import logo from "../../image/pawBlack.png";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/registration.module.css";
const RegisterComponent = () => {
  const router = useRouter();
  const [errorEmail, setErrorEmail] = useState(false);
  const [userNameUsed, setUserNameUsed] = useState([]);
  const [errorUser, setErrorUser] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:4000/users`).then((res) => {
      setUserNameUsed(res.data);
     

    });
  }, []);
  //checking if user name available in database
  const handleUserName = (e) => {
    const input = e.target.value;
    // console.log(userNameUsed);
    for (const user of userNameUsed) {
      const username = user.name;
      if (username == input) {
        console.log("hitting");
        console.log(e.target);
        e.target.style.border = "1px solid red";
        e.target.style.outline = "1px solid red";
        setErrorUser(true);
        return;
      } else {
        setErrorUser(false);
        e.target.style.border = "1px solid black";
        e.target.style.outline = "1px solid black";
      }
    }
  };

  //checking if email available in database.
  const handleEmailVerification = (e) => {
    const email = e.target.value;
    const exp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!exp.test(email)) {
      e.target.style.border = "1px solid red";
      e.target.style.outline = "1px solid red";
      setErrorEmail(true);
      return;
    } else {
      console.log(e.target);
      setErrorEmail(false);
      e.target.style.border = "1px solid black";
      e.target.style.outline = "1px solid black";
    }
  };

  //check mobile is valid or not

  const handlePhone = (e) => {
    const contact = e.target.value;
    console.log(contact);
    const exp = /[0][1][^012]{1}[0-9]{8}/;
    if (!exp.test(contact)) {
      e.target.style.border = "1px solid red";
      e.target.style.outline = "1px solid red";
      setErrorPhone(true);
      return;
    } else {
      e.target.style.border = "1px solid black";
      e.target.style.outline = "1px solid black";
      setErrorPhone(false);
    }
  };
  
  // register user
  const handleRegistration = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    let info = {};
    if (errorUser) {
      alert("Unsuccessful");
      return;
    }
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
        router.push("/");
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
            onChange={handleUserName}
          ></input>
          {errorUser === true && (
            <div class={styles.errorMessage}>Already used.</div>
          )}
          <input
            type="text"
            id="Email"
            name="email"
            placeholder="Email"
            onChange={handleEmailVerification}
          />
          {errorEmail === true && (
            <div class={styles.errorMessage}>Pattern didn't match.</div>
          )}
          <input
            type="tel"
            name="contact"
            placeholder="Contact No."
            onChange={handlePhone}
          ></input>
          {errorPhone === true && (
            <div class={styles.errorMessage}>Invalid phone format.</div>
          )}
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
            Already have an account?.{" "}
            <span style={{ color: "#E76F51" }}>go to login page</span>.
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
