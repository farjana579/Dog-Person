import styles from "../../styles/Home.module.css";
import logo from "../../image/logo.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Navigation = () => {
  const [creds, setCreds] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("Email") && localStorage.getItem("Password")) {
      setCreds(true)
    }
    else {
      setCreds(false)
    }
  }, [creds, router])
  const removeCred = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    setCreds(false)
  }
  return (
    <div className={styles.NavLogo}>
      <a href="/">
        <div className={styles.logoTitle}>
          <div className={styles.logo}>
            <img src={logo.src}></img>
          </div>
          <div className={styles.PageTitle}>
            <h2>Dog Person</h2>
          </div>
        </div>
      </a>
      <div className={styles.nav_items}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li className={styles.shopNav}>
            <a href="/shop?type=&page=1&subtype=">Shop</a>
            <ul className={styles.ProductType}>
              <li className={styles.medi}>
                <a href="/shop?type=medicine&page=1&subtype=">Medicine</a>
                <ul className={styles.MedicineType}>
                  <li>
                    <a href="/shop?type=medicine&page=1&subtype=antibiotics">
                      Antibiotics
                    </a>
                  </li>
                  <li>
                    <a href="/shop?type=medicine&page=1&subtype=antifungal">
                      Antifungal
                    </a>
                  </li>
                  <li>
                    <a href="/shop?type=medicine&page=1&subtype=antiparasitic">
                      Antiparasitic
                    </a>
                  </li>
                  <li>
                    <a href="/shop?type=medicine&page=1&subtype=steriods">
                      Steriods
                    </a>
                  </li>
                  <li>
                    <a href="/shop?type=medicine&page=1&subtype=pain reliever">
                      Pain reliever
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.food}>
                <a href="/shop?type=food&page=1&subtype=">Food</a>
                <ul className={styles.FoodType}>
                  <li>
                    <a href="/shop?type=food&page=1&subtype=kibble">Kibble</a>
                  </li>
                  <li>
                    <a href="/shop?type=food&page=1&subtype=canned">Canned</a>
                  </li>
                  <li>
                    <a href="/shop?type=food&page=1&subtype=raw">Raw</a>
                  </li>
                  <li>
                    <a href="/shop?type=food&page=1&subtype=semi moist">
                      Semi Moist
                    </a>
                  </li>
                  <li>
                    <a href="/shop?type=food&page=1&subtype=home made">
                      Home Made
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.classifyNav}>
            <a href="/classify">Classify</a>
          </li>
          {!creds ?
            <button className={styles.loginbtn}>
              <a href="/login">Log In</a>
            </button> :
            <button className={styles.loginbtn} onClick={removeCred}>
              Log Out
            </button>}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
