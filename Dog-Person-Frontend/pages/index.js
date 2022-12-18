import React from "react";
import styles from "../styles/Home.module.css";
import HomePage from "../components/Home/Homepage";

export default function Home() {
  return (
    <div className={styles.main}>
      <HomePage />
    </div>
  );
}
