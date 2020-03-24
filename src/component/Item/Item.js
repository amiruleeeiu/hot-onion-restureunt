import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';


const Lunch = (props) => {
    
     const {name,price,img,description,key}=props.menu;
    return (
        <div className="lunch-item ">
            <Link to={"/item/"+key}>
                <img src={img} alt=""/>
                <p>{name}</p>
                <p><small>{description}</small></p>
                <p>${price}</p>
            </Link>
        </div>
    );
};

export default Lunch;