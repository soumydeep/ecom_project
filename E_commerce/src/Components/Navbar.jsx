import React from "react";
import {Link} from "react-router-dom"
import ShoppingCartIcon from"@mui/icons-material/ShoppingCart"
import {useSelector} from 'react-redux'
import store from "./Redux/store";

function Navbar(){

const quantity=useSelector((store)=>store.cartReducer.cartQuantity);
    
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/cart">
            <div className="cart_container">
                <ShoppingCartIcon></ShoppingCartIcon>
                <div className="cart_quantity">{quantity}</div>
            </div>
            </Link>
        </div>
    )
}

export default Navbar