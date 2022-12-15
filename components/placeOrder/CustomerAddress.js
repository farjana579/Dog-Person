import React from 'react';
import PlaceOrderStyle from '../../styles/PlaceOrder.module.css'
const CustomerAddress = () => {
    return (
        <div className={PlaceOrderStyle.addressDiv}>
            <h3>Delivering Address</h3>
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
    );
};

export default CustomerAddress;