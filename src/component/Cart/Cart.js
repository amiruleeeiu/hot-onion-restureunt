import React, { useEffect, useState } from 'react';
import './Cart.css'
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

import CheckOut from '../CheckOut/CheckOut';
import { Link } from 'react-router-dom';

const Cart = () => {
   const [cart,setCart]=useState([]);
    useEffect(()=>{
        const saveItem=getDatabaseCart();
        
        const productKey=Object.keys(saveItem);
        const cartItems=productKey.map(key=>{
            const items=fakeData.find(item=>item.key===key);
            items.quantity=saveItem[key];
            return items;
        });
        setCart(cartItems);
    },[]);
    
    console.log(typeof(cart));
    let total=0;
    let itemNumber=0;
    for(let i=0;i<cart.length;i++){
        total=total+cart[i].price*cart[i].quantity;
        itemNumber=itemNumber+cart[i].quantity;
    }

    let shipping=0;

    if(total>70){
        shipping=4.77;
    }
    else if(total>10){
        shipping=12.99
    }

    const tax=total/10;

    const numberFormate=(num)=>{
        const formate=num.toFixed(2);
        return Number(formate);
    }

    

    return (
        <div className="cart-content">
            
            {
                cart.map(item=><CheckOut item={item}></CheckOut>)
            }
            <div class="d-flex justify-content-between">
                <h5>Subtotal: {itemNumber} items</h5>
                <h5>${numberFormate(total)}</h5>
            </div>
            <div class="d-flex justify-content-between">
                <h5>Tax:</h5>
                <h5> ${numberFormate(tax)}</h5>
            </div>
            <div class="d-flex justify-content-between">
                <h5>Delivary fee:</h5>
                <h5> ${numberFormate(shipping)}</h5>
            </div>
            <div class="d-flex justify-content-between">
                <h5>Total:</h5>
                <h5> ${numberFormate(total+tax+shipping)}</h5>
            </div>
            <div className="check-btn">
                <Link to="/delivary"><button>Place Order</button></Link>
            </div>
        </div>
    );
};

export default Cart;