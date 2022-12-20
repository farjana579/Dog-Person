import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShopCard from "../../components/Shop/ShopCard";
import styles from '../../styles/shop.module.css'
import axios from 'axios'
const shop = () => {
    const [products, setProducts] = useState([{}])
    const [type, setType] = useState(-1)
    const [sub, setSub] = useState(-1);
    const router = useRouter();
    useEffect(
        () => {
            if (router.query.type !== undefined && router.query.subtype !== undefined) {
                axios.get(`http://localhost:4000/products?type=${router.query.type}&subtype=${router.query.subtype}`).then(res => {
                    setProducts(res.data)
                })
            }
        }, [router])
    return (
        <div>
            <h2 style={{ marginLeft: "30px" }}>Search Results</h2>
            {/* Shop Container */}
            <div className={styles.shopContainer}>
                {
                    // Loop through all products and getting details of them.
                    products.map(product =>
                        // Calling Card component and passing dynamic values.
                        <ShopCard name={product.name} ratingcount={product.rating} avgrating={product.avg_rating} image={product.picture} price={product.price} paragraph={product.about} id={product._id} />
                    )
                }
            </div>
            {/* Page count. */}
            <div className={styles.pageIndicator}>Showing <span>{12}-{20}</span> of <span>{20}</span></div>
            {/* pagination */}
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