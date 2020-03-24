import React from 'react';
import logo from '../../logo/logo.png';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header-content">
            <div className="logo d-flex justify-content-between">
                <img src={logo} alt=""/>
            </div>
            <div className="header-menu">
                <a href={"/menu/"+"breakfast"}>Breakfast</a>
                <a href={"/menu/"+"lunch"}>Lunch</a>
                <a href={"/menu/"+"dinner"}>Dinner</a>
                
            </div>
        </div>
        
    );
};

export default Header;