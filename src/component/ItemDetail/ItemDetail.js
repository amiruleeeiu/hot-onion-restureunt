import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const ItemDetail = () => {
    const {productKey}=useParams();

    const [addItem,setAddItem]=useState([]);
    const [value,setValue]=useState(0);

    const item=fakeData.find(pd=>pd.key===productKey);
    const {name,img,detail,price}=item;

    const addProductHandler=(key)=>{
        const currectTtem=fakeData.find(item=>item.key===key);
        const newItem=[...addItem,currectTtem];
        setAddItem(newItem);
        
        const newValue=value+1;
        setValue(newValue);
        const sameItem=addItem.filter(item=>item.key===key);
        const count=sameItem.length+1;
        addToDatabaseCart(key,count);
    }
    
    return (
        <div>
            <div  className="item-detail">
                <div>
                    <h1>{name}</h1>
                    <p><small>{detail}</small></p>
                    <div >
                        <div className="d-flex justify-content-start item-number">
                            <h2>${price}</h2>
                            <button class="btn btn-default"><FontAwesomeIcon icon={faMinus} /></button>
                            <input class="text-center" type="text" value={value} disabled/>
                            <button class="btn btn-default"><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>

                    <button onClick={()=>addProductHandler(productKey)} className="add-btn"><FontAwesomeIcon icon={faCartPlus} /> Add</button>
                    
                </div>
                <div className="item-img">
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;