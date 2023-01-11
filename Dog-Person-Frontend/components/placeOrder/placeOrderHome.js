import axios from 'axios';
import { useEffect, useState } from 'react';
import PlaceOrderStyle from '../../styles/PlaceOrder.module.css'
import CustomerAddress from './CustomerAddress';
const PlaceOrderHome = () => {
    // Using demo data.
    const [cartProduct, setCartProduct] = useState([])
    const [userid, sestUserid] = useState("639ead7d0802db84b4ac4eb9");
    useEffect(() => {
        axios.get(`http://localhost:4000/order-details/${userid}`).then(res => {
            // setCartProduct(res.data);
            console.log(res.data);
        })
    }, [])
    return (
        // Container of left and right column.
        <div className={PlaceOrderStyle.parentDiv}>
            {/* Left column. */}
            <div className={PlaceOrderStyle.leftItems}>
                {/* first div. */}
                <CustomerAddress />

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