import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './CheckOut.css'

const DelivaryDetail = (props) => {
    const {name,price,img,quantity}=props.item;
    return (
        <div>
            <div className="cart-item d-flex justify-content-between align-items-center">
                <img src={img} alt=""/>
                <div className="itemName">
                    <p>{name}</p>
                    <h3 style={{color:'red'}}>${price*quantity}</h3>
                </div>
                <div className="item-number">
                    <button class="btn btn-default"><FontAwesomeIcon icon={faMinus} /></button>
                    <input class="text-center" type="text" value={quantity} disabled/>
                    <button class="btn btn-default"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
        </div>
    );
};

export default DelivaryDetail;