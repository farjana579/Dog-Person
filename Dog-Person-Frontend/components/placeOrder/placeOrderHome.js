import { useState } from 'react';
import PlaceOrderStyle from '../../styles/PlaceOrder.module.css'
import CustomerAddress from './CustomerAddress';
const PlaceOrderHome = () => {
    // Using demo data.
    const [cartProduct, setCartProduct] = useState([
        {
            _id: 'aksdjflas',
            picture: ["https://i.ibb.co/Mn8qSVx/image.png"
            ],
            price: 1106,
            quantity: 2,
            weight: 6,
            brand: "Happy Dog",
            name: "Mcbride Rocha",
        }, {
            _id: 'askldfj',
            picture: ["https://i.ibb.co/Mn8qSVx/image.png"
            ],
            quantity: 4,
            price: 1106,
            weight: 6,
            brand: "Happy Dog",
            name: "Mcbride Rocha",
        }
    ])
    // removing items when cancel button pressed.
    const handleRemoveItem = id => {
        setCartProduct(cartProduct.filter(product => product._id !== id))
    }
    return (
        // Container of left and right column.
        <div className={PlaceOrderStyle.parentDiv}>
            {/* Left column. */}
            <div className={PlaceOrderStyle.leftItems}>
                {/* first div. */}
                <CustomerAddress />
                {/* Shoped Items container. */}
                <div className={PlaceOrderStyle.cartContainer}>
                    <h2>Products</h2>
                    {
                        // looping through shoped item/demo data.
                        cartProduct.map(product =>
                            // single shopped item.
                            <div className={PlaceOrderStyle.innerDivparent}>
                                {/* Cancel button */}
                                <button className={PlaceOrderStyle.cancel} onClick={() => handleRemoveItem(product._id)}>X</button>
                                {/* Picture of the product. */}
                                <img src={product.picture[0]}></img>
                                {/* details box. */}
                                <div className={PlaceOrderStyle.innerDivWrite} >
                                    {/* name of the product */}
                                    <h3 className={PlaceOrderStyle.cartTitle}>
                                        {product.name} </h3>
                                    {/* brand */}
                                    <div>Brand : <span>{product.brand}</span> </div>
                                    {/* amount of quantity buyed. */}
                                    <div>Quantity : <span>{product.quantity}</span> </div>
                                    {/* price. */}
                                    <div>Unit Price : <span>{product.price}</span></div>
                                </div>
                            </div>
                        )}


                </div>
            </div>
            <div className={PlaceOrderStyle.SideDiv}  >
                <h2>Order Summary</h2>
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