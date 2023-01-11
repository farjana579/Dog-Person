import axios from 'axios';
import { useEffect, useState } from 'react';
import PlaceOrderStyle from '../styles/PlaceOrder.module.css'
import CustomerAddress from '../components/placeOrder/CustomerAddress';
const PlaceOrderHome = () => {
    // Using demo data.
    const [cartProduct, setCartProduct] = useState([])
    const [userid, sestUserid] = useState("639ead7d0802db84b4ac4eb9");
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:4000/order-details/${userid}`).then(res => {
            setCartProduct(res.data);
            if (res.data) {
                let totalPrice = 0
                for (const product of res.data) {
                    totalPrice += product.price * product.quantity;
                }
                setTotal(totalPrice)
            }
        })
    }, [])
    // removing items when cancel button pressed.
    const handleRemoveItem = id => {
        const res = confirm("Do you want to remove from the cart?")
        if (res) {
            let totalPrice = 0
            setCartProduct(cartProduct.filter(product => {
                totalPrice += product.price * product.quantity
                return product._id !== id
            }))
            setTotal(totalPrice)
            axios.delete(`http://localhost:4000/order-details/${id}`)
        }
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
                            // single shoped item.
                            <div className={PlaceOrderStyle.innerDivparent}>
                                {/* Cancel button */}
                                <button className={PlaceOrderStyle.cancel} onClick={() => handleRemoveItem(product._id)}>X</button>
                                {/* Picture of the product. */}
                                {/* <img src={product?.picture[0]}></img> */}
                                {/* details box. */}
                                <div className={PlaceOrderStyle.innerDivWrite} >
                                    {/* name of the product */}
                                    <h3 className={PlaceOrderStyle.cartTitle}>
                                        {product.productName} </h3>
                                    {/* brand */}
                                    <div>Brand : <span>{product.productBrand}</span> </div>
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
                <h2>Order Summery</h2>
                <div className={PlaceOrderStyle.SideDivWrite} >
                    <div>Total Price  : <span>{total}</span> </div>
                    <div>Tax : <span>{total * 0.15}</span></div>
                    <div>Delivery fee : <span>{50}</span> </div>
                    <div>Total Payment : <span>{total * 1.15 + 50}</span> </div>
                    <div>Discount : <span>{5}%</span></div>
                    <div>Total : <span>{(total * 1.15 + 50) * .95}</span></div>
                </div>
                <a href="/payment-gateway">
                    <button className={PlaceOrderStyle.orderbtn}>Place Order</button></a>
            </div>
        </div >
    );
};

export default PlaceOrderHome;