import React from 'react';
import img from '../../image/food.jpg'
import styles from '../../styles/productDetails.module.css'
import styles2 from '../../styles/review.module.css'
import Review from '../../components/productDetails/Review'

const ProDetails = () => {
    return (
        <div className={styles.products}>
            <h1 className={styles.ph}>Purina Friskies Balance Dog Food with Chicken and Vegetables
                3Kg</h1>
            {/* initial pic */}
            <div className={styles.picDes}>
                < img src={img.src}></img>
                <div className={styles.primaryDescription}>
                    <div className={styles.brand}>Brand:  <span>Purina Friskies</span></div>
                    <div className={styles.ratings}>20 Ratings</div>
                    <div className={styles.price}>৳ 300.00</div>
                    <div className={styles.vat}>All prices include VAT.</div>
                    <div className={styles.weight}>Weight: 8kg</div>
                    <ul className={styles.about}>
                        <h3 >About this product</h3>
                        <li>Firm stools thanks to a healthy digestion</li>
                        <li>Supports shiny coat and healthy skin</li>
                        <div>
                            {/* qyantity */}
                            <div className={styles.qnty}>
                                <div className={styles.quantity}>Quantity</div>
                                <button>-</button>
                                <div className={styles.num}>1</div>
                                <button>+</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>


            {/* more pic */}
            <div className={styles.morepic}>
                <img src={img.src}></img>
                <img src={img.src}></img>
                <img src={img.src}></img>
                <img src={img.src}></img>

                <button id={styles.mbtn}>ADD TO CART</button>
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
            <div className={styles.customer}>
                <h3 className={styles.headln}>Customer Review</h3>
                <Review Name="Abid Al Hasan" headline="This Product is incredible. My dog loves it."
                    message="I bought this food because it has a lower fat content and because the pieces are larger and makes my Cocker Spaniel and Boxer chew rather than swallow. I am very happy with this dog food because they both lost weight. The kibble is larger in shape and less dense. I am thrilled with it.
                "></Review>
                <Review Name="Abid Al Hasan" headline="This Product is incredible. My dog loves it."
                    message="I bought this food because it has a lower fat content and because the pieces are larger and makes my Cocker Spaniel and Boxer chew rather than swallow. I am very happy with this dog food because they both lost weight. The kibble is larger in shape and less dense. I am thrilled with it.
                "></Review>
                <Review Name="Abid Al Hasan" headline="This Product is incredible. My dog loves it."
                    message="I bought this food because it has a lower fat content and because the pieces are larger and makes my Cocker Spaniel and Boxer chew rather than swallow. I am very happy with this dog food because they both lost weight. The kibble is larger in shape and less dense. I am thrilled with it.
                "></Review>
                <div className={styles2.cmnt}>

                    <button>View All Comments</button>
                    <button>Write Review</button>

                </div>
                <div className={styles2.write}>
                    
                    <input type="text" className={styles2.name} placeholder="Name">                      
                    </input>
                    <input type="text" className={styles2.reviewHead} placeholder="Your Review">                     
                    </input>                 
                    <textarea className={styles2.writecomment}>                      
                    </textarea>
                   
                </div>
                <input className={styles2.subm} value="submit"></input>
                
            </div>
        </div>
    );
};

export default ProDetails;