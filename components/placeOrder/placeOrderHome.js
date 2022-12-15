import React from 'react';
import PlaceOrderStyle from '../../styles/PlaceOrder.module.css'
import Food from '../../image/food 1.png'

const PlaceOrderHome = () => {
    return (
        <div>
            <div className={PlaceOrderStyle.firstDiv}>
                <h3>Delivered </h3>
                <h2>Address</h2>
                <div className={PlaceOrderStyle.parent}>
                    <div className={PlaceOrderStyle.selectList}>
                        <select >
                            <option>District</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                        </select>
                    </div>
                    <div className={PlaceOrderStyle.selectList}>
                        <select>
                            <option>City</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                        </select>
                    </div>
                    <div className={PlaceOrderStyle.selectList}>
                        <select>
                            <option>Area</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                        </select>
                    </div>
                    <div className={PlaceOrderStyle.selectList}>
                        <select>
                            <option>Address</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                            <option>Chittagong</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={PlaceOrderStyle.SecondDiv}>
                <h2>Products</h2>

                <div className={PlaceOrderStyle.innerDiv}>
                    <div className={PlaceOrderStyle.innerDivparent}>
                        <img src={Food.src}></img>

                        <div className={PlaceOrderStyle.innerDivWrite} >
                            <h3>Purina Friskies Balance Dog Food with Chicken and Vegetables </h3>
                            <p>Brand: <span>Purnima Friskies</span> </p>
                            <p>Quantity:<span>5</span> </p>
                            <p>Price:<span>300</span></p>
                        </div>
                    </div>
                </div>
                <div className={PlaceOrderStyle.innerDiv}>
                    <div className={PlaceOrderStyle.innerDivparent}>
                        <img src={Food.src}></img>

                        <div className={PlaceOrderStyle.innerDivWrite} >
                            <h3>Purina Friskies Balance Dog Food with Chicken and Vegetables </h3>
                            <p>Brand: <span>Purnima Friskies</span> </p>
                            <p>Quantity:<span>5</span> </p>
                            <p>Price:<span>300</span></p>
                        </div>
                    </div>
                </div>
                <div className={PlaceOrderStyle.innerDiv}>
                    <div className={PlaceOrderStyle.innerDivparent}>
                        <img src={Food.src}></img>

                        <div className={PlaceOrderStyle.innerDivWrite} >
                            <h3>Purina Friskies Balance Dog Food with Chicken and Vegetables </h3>
                            <p>Brand: <span>Purnima Friskies</span> </p>
                            <p>Quantity:<span>5</span> </p>
                            <p>Price:<span>300</span></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={PlaceOrderStyle.SideDiv}  >
                <h2>Order Summery</h2>
                <div className={PlaceOrderStyle.SideDivWrite} >

                    <p>Total Price: <span>Purnima Friskies</span> </p>
                    <p>Item Total:<span>5</span> </p>
                    <p>Tax:<span>300</span></p>
                    <p>Delivery fee: <span>Purnima Friskies</span> </p>
                    <p>Total Payment:<span>5</span> </p>
                    <p>Discount:<span>300</span></p>
                    <p>Total:<span>300</span></p>
                </div>
                <button className={PlaceOrderStyle.orderbtn}>Place Order</button>
            </div>
        </div >
    );
};

export default PlaceOrderHome;