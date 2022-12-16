import { useState } from "react";
import ShopCard from "../components/Shop/ShopCard";
import styles from '../styles/shop.module.css'
const shop = () => {
    const [products, setProducts] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},])
    return (
        <div>
            <h2 style={{ marginLeft: "30px" }}>Search Results</h2>
            <div className={styles.shopContainer}>
                {

                    products.map(prodcut =>
                        <ShopCard name={'Hp Victus Gaming Laptop 16-D0027Ne, 16.1" Fhd,11Th Gen. Intel® Core? I7 Processor,16GB RAM, 1Tb Ssd, 4GB Nvidia® Geforce® Rtx 3050 Ti, Windows 10, En-Ar Kb,Blue, 4A3F5Ea'} ratingcount={500} avgrating={4.5} image="https://m.media-amazon.com/images/I/7106suqEZ7L._AC_SX569_.jpg" price={1200} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non in quo provident, " />
                    )
                }
            </div>
            <div className={styles.pageIndicator}>Showing <span>{12}-{20}</span> of <span>{20}</span></div>
            <div className={styles.pagination}>
                <button>Previous</button>
                <button>1</button>
                <div>....</div>
                <button>n</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export default shop;