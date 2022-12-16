import React, { useState } from 'react';
import styles from '../../styles/productDetails.module.css'
import ReviewContainer from './ReviewContainer';
import WriteReview from './WriteReview';

const ProDetails = () => {
    const [current, setCurrent] = useState(0)
    const [product, setProduct] = useState({
        picture: ["https://i.ibb.co/Mn8qSVx/image.png",
            "https://i.ibb.co/L8srR5L/image.png",
            "https://i.ibb.co/JrMS9Gg/image.png",
            "https://i.ibb.co/DRrpQFy/image.png",
            "https://i.ibb.co/xz7bLxt/image.png"
        ],
        price: 1106,
        weight: 6,
        rating: 572,
        avg_rating: 2.9669,
        brand: "Happy Dog",
        type: "medicine",
        name: "Mcbride Rocha",
        email: "mcbriderocha@chillium.com",
        about: "Ea cillum aliqua exercitation proident ipsum non et in eu aliquip nisi. Cillum duis quis proident laborum esse et dolore. Quis quis non excepteur incididunt aliqua enim. Eu magna fugiat cillum exercitation veniam officia deserunt proident excepteur.",
        registered: "2016-12-12T02:03:48 -06:00"
    })
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
                    < img src={product.picture[current]}></img>
                    <div className={styles.morepic}>
                        {
                            product?.picture.map((img, index) => {
                                if (index !== current) {
                                    return <img onClick={() => setCurrent(index)} src={img} />
                                }
                                else {
                                    return <></>
                                }
                            }
                            )
                        }
                    </div>
                </div>
                <div className={styles.primaryDescription}>
                    <div className={styles.brand}>Brand:  <span>{product.brand}</span></div>
                    <div className={styles.ratings}>{product.rating} Ratings</div>
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
            <ReviewContainer />
            <WriteReview />
        </div>
    );
};

export default ProDetails;