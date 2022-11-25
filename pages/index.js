import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Home/Banner";
import Navigation from "../components/Home/Navigation";
import styles from "../styles/Home.module.css";
import Products from "../components/Home/products";
import BestProduct from "../components/Home/BestProduct";
import Footer from "../components/Home/footer";
import HomePage from "../components/Home/Homepage";
export default function Home() {
  return (
    <div className={styles.main}>
      <HomePage></HomePage>
      
    </div>
  );
}
