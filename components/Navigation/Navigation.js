import styles from "../../styles/Home.module.css";
import logo from "../../image/logo.png";
const Navigation = () => {
  return (
    <div className={styles.NavLogo}>
      <div className={styles.logoTitle}>
        <div className={styles.logo}>
          <img src={logo.src}></img>
        </div>
        <div className={styles.PageTitle}>
          <h2>Dog Person</h2>
        </div>
      </div>
      <div className={styles2.nav_items}>
        <ul >
          <li>Home</li>
          <li className={styles.shopNav}>Shop
            <ul className={styles.ProductType}>
              <li className={styles.medi}>Medicine
                <ul className={styles.MedicineType}>
                  <li>Antibiotics</li>
                  <li>Antifungal</li>
                  <li>Antiparasitic</li>
                  <li>Steriods</li>
                  <li>Pain Reliever</li>
                </ul>
              </li>
              <li className={styles.food}>Food
                <ul className={styles.FoodType}>
                  <li>Kibble</li>
                  <li>Canned</li>
                  <li>Raw</li>
                  <li>Semi-Moist</li>
                  <li>Home Made</li>
                </ul>
              </li>
            </ul></li>
          <li className={styles.classifyNav}>Classify
          </li>
          <button className={styles.loginbtn}>Log In</button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
