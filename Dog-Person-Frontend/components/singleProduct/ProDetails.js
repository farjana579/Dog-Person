import { Rating } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/productDetails.module.css'
import ReviewContainer from './ReviewContainer';
import WriteReview from './WriteReview';

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
    const router = useRouter()
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

    // this function handles the change of quantity. 
    const handleQuantity = (val) => {
        const doc = document.getElementById('quantity');
        if (parseInt(doc.value) === 0 && val === -1)
            return;
        doc.value = parseInt(doc.value) + val;
    }

    return (
        <div className={styles.products}>
            <h1 className={styles.ph}>{product.name}</h1>
            {/* initial pic */}
            <div className={styles.infoContainer}>
                <div className={styles.picDes}>
                    < img src={product.picture[current]} />
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
                    <div className={styles.ratings}><Rating readOnly value={product.avg_rating} /> ({product.rating} Ratings)</div>
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
                        <input type="number" min={0} defaultValue="0" id="quantity" />
                        <div onClick={() => handleQuantity(+1)}>+</div>
                    </div>
                    <button id={styles.mbtn}>ADD TO CART</button>
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
                        <div className={styles.type}>Pet Type</div>
                        <div className={styles.info}>Dog</div>
                    </div>
                    <div>
                        <div className={styles.type}>Pet Type</div>
                        <div className={styles.info}>Dog</div>
                    </div>
                    <div>
                        <div className={styles.type}>Pet Type</div>
                        <div className={styles.info}>Dog</div>
                    </div>
                </div>
            </div>
            {/* customer review */}
            <ReviewContainer id={id} />
            <WriteReview />
        </div>
    );
};

export default ProDetails;