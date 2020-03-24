import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './Shop.css'
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import background from '../../logo/bannerbackground.png'

const Shop = () => {
    
    let currectMenu;
    const [items,setItems]=useState(fakeData);
    const {category}=useParams();
    const [key,setKey]=useState([]);

    useEffect(()=>{
        const saveItem=getDatabaseCart();
        const productKey=Object.keys(saveItem);
        setKey(productKey);
    },[]);

        if(category){
            currectMenu=items.filter(item=>item.category===category);
            
        }
         else{
             currectMenu=items.filter(item=>item.category==='lunch');

         }
         const checkOutHandelar=()=>{

         }
        
    return (
        <div>
            
            <div className="shop-content">
            
                {
                    currectMenu.map(menu=><Item menu={menu}></Item>)
                }
                <div className="check-btn">
                    {
                        key.length>0 ?
                        <Link to={"/cart"}><button onClick={()=><Cart></Cart>}>Checkout Your Food</button></Link>
                        :
                        <button disabled>Checkout Your Food</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;