import { Rating } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/productDetails.module.css'
import ReviewContainer from './ReviewContainer';
import AvgRating from './AvgRating';
const ProDetails = () => {
    // product holds the details of the product. initial value is a empty object.
    const [product, setProduct] = useState({
        name: '',
        picture: [],
        brand: '',
        rating: 0,
        avg_rating: 0,
        price: 0,
        weight: 0,
        about: '',

    })
    // getting id of the product from the url.
    const [id, setId] = useState();
    const [userInfo, setUserInfo] = useState("639ead7d0802db84b4ac4eb9")
    const router = useRouter()
    console.log(router);
    useEffect(() => {
        if (router.query.id !== undefined) {
            setId(router.query.id)
            axios.get(`http://localhost:4000/products/${router.query.id}`).then(res => {
                setProduct(res.data);
            })
        }
    }, [router])
    // current is the state variable to hold to display image. initial value is 0 
    const [current, setCurrent] = useState(0)
    const handleAddToCart = e => {
        const doc = document.getElementById('quantity');
        const productInfo = {
            productID: id,
            productName: product.name,
            productBrand: product.brand,
            price: product.price,
            quantity: parseInt(doc.value),
            buyerID: userInfo,
            productImg:product.picture
        }
        // console.log(productInfo);
        axios.post(`http://localhost:4000/order-details`, productInfo)
            .then(res => {
                if (res.data) {
                    router.push("/PlaceOrderIndex")
                }
            })
    }
    // this function handles the change of quantity. 
    const handleQuantity = (val) => {
        const doc = document.getElementById('quantity');
        if (parseInt(doc.value) === 1 && val === -1)
            return;
        doc.value = parseInt(doc.value) + val;
    }

    return (
        <div className={styles.products}>
            <h1 className={styles.ph}>{product.name}</h1>
            {/* initial pic */}
            <div className={styles.infoContainer}>
                <div className={styles.picDes}>
                    < img src={product.picture} />
                    <div className={styles.morepic}>
                        {
                            // product?.picture?.map((img, index) => {
                            //     if (index !== current) {
                            //         return <img onClick={() => setCurrent(index)} src={img} />
                            //     }
                            //     else {
                            //         return <></>
                            //     }
                            // }
                            // )
                        }
                    </div>
                </div>
                <div className={styles.primaryDescription}>
                    <div className={styles.brand}>Brand:  <span>{product.brand}</span></div>

                    <div className={styles.price}>৳ {product.price}</div>
                    <div className={styles.vat}>All prices include VAT.</div>
                    <div className={styles.weight}>Weight: {product.weight}kg</div>
                    <ul className={styles.about}>
                        <h3 >About this product</h3>
                        <li>Firm stools thanks to a healthy digestion</li>
                        <li>Supports shiny coat and healthy skin</li>
                    </ul>
                    <div className={styles.quantity}>
                        <span>Quantity</span>
                        <div onClick={() => handleQuantity(-1)}>-</div>
                        <input type="number" min={0} defaultValue="1" id="quantity" />
                        <div onClick={() => handleQuantity(+1)}>+</div>
                    </div>
                    <button id={styles.mbtn} onClick={handleAddToCart}>ADD TO CART</button>
                </div>
            </div>
            {/* product information */}
            <div className={styles.proInformation}>
                <h3 className={styles.headln}>Product Information</h3>
                <div className={styles.Information}>
                    <div>
                        <div className={styles.type}>Pet Type</div>
                        <div className={styles.info}>Dog</div>
                    </div>
                    <div>
                        <div className={styles.type}>Brand</div>
                        <div className={styles.info}>{product.brand}</div>
                    </div>
                    <div>
                        <div className={styles.type}>Product</div>
                        <div className={styles.info}>{product.type}</div>
                    </div>
                    <div>
                        <div className={styles.type}>Sub type</div>
                        <div className={styles.info}>{product.subtype}</div>
                    </div>
                    <div>
                        <div className={styles.type}>Weight</div>
                        <div className={styles.info}>{product.weight}</div>
                    </div>
                    <div>
                        <div className={styles.type}>Price</div>
                        <div className={styles.info}>{product.price}</div>
                    </div>
                </div>
            </div>
            {/* customer review */}
            <ReviewContainer id={id} />
        </div>
    );
};

export default ProDetails;