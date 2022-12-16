import { useState } from 'react';
import PlaceOrderStyle from '../../styles/PlaceOrder.module.css'
import CustomerAddress from './CustomerAddress';
const PlaceOrderHome = () => {
    const [cartProduct, setCartProduct] = useState([
        {
            _id: 'aksdjflas',
            picture: ["https://i.ibb.co/Mn8qSVx/image.png"
            ],
            price: 1106,
            weight: 6,
            brand: "Happy Dog",
            name: "Mcbride Rocha",
        }, {
            _id: 'askldfj',
            picture: ["https://i.ibb.co/Mn8qSVx/image.png"
            ],
            price: 1106,
            weight: 6,
            brand: "Happy Dog",
            name: "Mcbride Rocha",
        }
    ])
    const handleRemoveItem = id => {
        setCartProduct(cartProduct.filter(product => product._id !== id))
    }
    return (
        <div className={PlaceOrderStyle.parentDiv}>
            <div className={PlaceOrderStyle.leftItems}>
                <CustomerAddress />
                <div className={PlaceOrderStyle.cartContainer}>
                    <h2>Products</h2>
                    {
                        cartProduct.map(product =>

                            <div className={PlaceOrderStyle.innerDivparent}>
                                <button className={PlaceOrderStyle.cancel} onClick={() => handleRemoveItem(product._id)}>X</button>
                                <img src={product.picture[0]}></img>
                                <div className={PlaceOrderStyle.innerDivWrite} >
                                    <h3 className={PlaceOrderStyle.cartTitle}>
                                        {product.name} </h3>
                                    <div>Brand : <span>{product.brand}</span> </div>
                                    <div>Quantity : <span>5</span> </div>
                                    <div>Unit Price : <span>{product.price}</span></div>
                                </div>
                            </div>
                        )}


                </div>
            </div>
            <div className={PlaceOrderStyle.SideDiv}  >
                <h2>Order Summery</h2>
                <div className={PlaceOrderStyle.SideDivWrite} >
                    <div>Total Price  : <span>Purnima Friskies</span> </div>
                    <div>Item Total : <span>5</span> </div>
                    <div>Tax : <span>300</span></div>
                    <div>Delivery fee : <span>Purnima Friskies</span> </div>
                    <div>Total Payment : <span>5</span> </div>
                    <div>Discount : <span>300</span></div>
                    <div>Total : <span>300</span></div>
                </div>
                <button className={PlaceOrderStyle.orderbtn}>Place Order</button>
            </div>
        </div >
    );
};

export default PlaceOrderHome;