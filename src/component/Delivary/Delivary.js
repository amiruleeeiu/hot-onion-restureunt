import React from 'react';
import img from '../../logo/8 ordercomplete.png'
import image from '../../Image/Group 1151.png'
import './Delivary.css'

const Delivary = () => {
    return (
        <div className="delivary-content d-flex justify-content-between">
            <img src={img} alt=""/>
            <div className="order">
                <img src={image} alt=""/>
                <button className="check-btn">Contact</button>
            </div>
            
        </div>
    );
};

export default Delivary;