import React, { useState } from 'react';
import PlaceOrderStyle from '../../styles/PlaceOrder.module.css'
const CustomerAddress = () => {
    const [district, setDistrict] = useState(null)
    const [city, setCity] = useState(null)
    const [area, setArea] = useState(null)
    const addressData = [
        {
            district: 'Chittagong',
            cities: [
                {
                    city: 'Patiya',
                    area: ['College Bazar', 'Moijjar Tek', 'Santir Hat']
                },
                {
                    city: 'Chattogram',
                    area: ['Bayezid', 'Oxygen', 'Hamjar Bag', 'Bibir Hat', 'Amin Jute Mills']
                }
            ]
        },
        {
            district: 'Dhaka',
            cities: [
                {
                    city: 'Dhanmondi',
                    area: ['D1', 'D2', 'D3']
                },
                {
                    city: 'Savar',
                    area: ['S1', 'S2', 'S3', 'S4', 'S5']
                }
            ]
        }
    ]
    return (
        <div className={PlaceOrderStyle.addressDiv}>
            <h3>Delivering Address</h3>
            <div className={PlaceOrderStyle.parent}>
                <div className={PlaceOrderStyle.selectList}>
                    <select onChange={e => {
                        setDistrict(addressData[e.target.selectedIndex - 1])
                        setCity(null)
                        setArea(null)
                    }}>
                        <option>District</option>
                        {
                            addressData.map(fullDistrict =>
                                <option value={fullDistrict.district}>{fullDistrict.district}</option>
                            )
                        }
                    </select>
                </div>
                <div className={PlaceOrderStyle.selectList}>
                    {
                        district &&
                        <select onChange={e => {
                            setCity(district.cities[e.target.selectedIndex - 1])
                            setArea(null)
                        }} >
                            <option>City</option>
                            {
                                district['cities'].map(fullCity => <option value={fullCity.city}>{
                                    fullCity.city
                                }</option>)
                            }
                        </select>
                    }
                </div>
                <div className={PlaceOrderStyle.selectList}>
                    {
                        city &&
                        <select onChange={e => {
                            setArea(city.area[e.target.selectedIndex - 1])
                        }}>
                            <option>Area</option>
                            {
                                city['area'].map(fullArea =>
                                    <option value={fullArea}>{fullArea}</option>)
                            }
                        </select>
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerAddress;