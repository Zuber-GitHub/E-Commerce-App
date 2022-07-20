import React, { useContext, useState } from "react";
import CartContext from "../Components/Context/cart-contetxt";
import {Link} from 'react-router-dom'


import './Header.css'

const Header = (props)=>{
    const cartCtx = useContext(CartContext);
    const cartCount = cartCtx.items.reduce((accumulator, curItem)=>{return accumulator + curItem.quantity},0);

    
    return(
        <>
            <div className="mainHeader">
            <nav className="navButtons">
                
                <Link to='/Home' className="navButtonsNavigation">Home</Link>
                <Link to='/Store' className="navButtonsNavigation">Store</Link>
                <Link to='/About' className="navButtonsNavigation">About</Link>
                <Link to='/Contact' className="navButtonsNavigation">Contact</Link>
                
                <button className="cartButton" onClick={props.onClose}><span>Cart</span><span className="cartCount">{cartCount}</span></button>
 
            </nav>
            </div>
        </>
    )
};
export default Header;