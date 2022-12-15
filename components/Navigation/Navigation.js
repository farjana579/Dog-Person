import styles from "../../styles/Home.module.css";
import logo from "../../image/logo.png";
const Navigation = () => {
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
        <ul >
          <li><a href="/">Home</a></li>
          <li className={styles.shopNav}><a href="/shop">Shop</a>
            <ul className={styles.ProductType}>
              <li className={styles.medi}><a href="/shop?type=medicine">Medicine</a>
                <ul className={styles.MedicineType}>
                  <li><a href="/shop?type=medicine&sub-type=Antibiotics">Antibiotics</a></li>
                  <li><a href="/shop?type=medicine&sub-type=Antifungal">Antifungal</a></li>
                  <li><a href="/shop?type=medicine&sub-type=Antiparasitic">Antiparasitic</a></li>
                  <li>
                    <a href="/shop?type=medicine&sub-type=Antibiotics">Steriods</a>
                  </li>
                  <li>
                    <a href="/shop?type=medicine&sub-type=Antibiotics">Pain Reliever</a>
                  </li>
                </ul>
              </li>
              <li className={styles.food}><a href="/shop?type=food">Food</a>
                <ul className={styles.FoodType}>
                  <li>
                    <a href="/shop?type=food&sub-type=Kibble">Kibble</a>
                  </li>
                  <li>
                    <a href="/shop?type=food&sub-type=Canned">Canned</a>
                  </li>
                  <li>
                    <a href="/shop?type=food&sub-type=Raw">Raw</a>
                  </li>
                  <li>
                    <a href="/shop?type=food&sub-type=Semi-Moist">Semi Moist</a>
                  </li>
                  <li>
                    <a href="/shop?type=food&sub-type=Home-Made">Home Made</a>
                  </li>
                </ul>
              </li>
            </ul></li>
          <li className={styles.classifyNav}><a href="/classify">Classify</a>
          </li>
          <button className={styles.loginbtn}><a href="/login">Log In</a></button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
